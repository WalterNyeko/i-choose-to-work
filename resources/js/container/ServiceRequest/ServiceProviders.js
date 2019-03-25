import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getProviders} from '../../store/actions/providers/providersActions'
import { Spin, notification } from 'antd';
import 'antd/dist/antd.min.css'
import ServiceProviderList from '../../components/serviceProviders/serviceProviderList';
import {makeOffer} from '../../store/actions/offers/offersAction'
import { routes } from '../../constants';
import Sidebar2 from '../../components/Sidebar2';
import LineBreak from '../../components/lineBreak';
import Main from '../../components/Main';
import LocationSearch from '../../components/LocationSearch';
import SearchFilter from '../../components/search';



class ServiceProviders extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       providers: []
    }

    this.openNotification = this.openNotification.bind(this);
    this.hire = this.hire.bind(this);
    this.openSuccess = this.openSuccess.bind(this);
    this.getUsersRating = this.getUsersRating.bind(this);
  }

  openNotification(){
      notification.info({
          message: 'Select a service provider',
          description: 'You can easily select a sevice provider from the list below',
          duration: 0,
          onClick: () => {
              console.log('Notification Clicked!');
          },
      });
  };

  componentDidMount() {
      const { match: { params }, history } = this.props;

      this.props.getProviders(params.id);
      this.openNotification();
      this.searchProvider = this.searchProvider.bind(this);
  }

  getUsersRating()
  {
    axios.get(`api/ratings/average/90`)
      .then((res) => {
        console.log(res.averageRate)
      })
      .catch((err) => {
        return 0
      })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.providers)
    {
      this.setState({
        providers: nextProps.providers
      })
    }
  }
  

  openSuccess(){
    notification.success({
      message: 'Thanks',
      description: 'You have successfully hired',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    })
  }

  hire(id)
  {
    const requestId = sessionStorage.getItem('request_id')
    const data = {
      service_req_id: requestId,
      provider_id: id,
      estimated_cost: 0
    }
    this.props.makeOffer(data);
    this.props.history.push(routes.DASHBOARD)
    this.openSuccess();
  }
  searchProvider(value)
  {
    console.log(value);
  }
  
  render() {
    let providers = null;
    if (this.props.providers.length) {
        providers = this.state.providers.map((provider, i) => <ServiceProviderList name={provider.name} rating={this.getUsersRating()} id={provider.id} hire={() => this.hire(provider.id)} address={provider.bio_profile.address} about={provider.bio_profile ? provider.bio_profile.description : 'Service provider' }/>)
    }
    else 
    {
        providers = <div><h2>There are no providers yet</h2></div>
    }
    return (
      <div className="container">
        <LineBreak/>
        <div class="row">
          <Sidebar2>
            <LocationSearch/>
            <SearchFilter onSearch={(value) => this.searchProvider(value)}/>
          </Sidebar2>
          <Main header="Service Providers Available">
            <div class="freelancers-container freelancers-list-layout margin-top-35">
              {providers}
            </div>
          </Main>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    loadingProviders: state.providers.loading,
    providers: state.providers.providers,
    providerErrors: state.providers.errors
})
export default connect(mapStateToProps, {getProviders, makeOffer})(ServiceProviders)