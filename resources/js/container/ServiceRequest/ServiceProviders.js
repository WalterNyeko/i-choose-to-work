import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getProviders} from '../../store/actions/providers/providersActions'
import { Spin, notification } from 'antd';
import 'antd/dist/antd.min.css'
import ServiceProviderList from '../../components/serviceProviders/serviceProviderList';
import {makeOffer} from '../../store/actions/offers/offersAction'
import { routes } from '../../constants';


class ServiceProviders extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }

    this.openNotification = this.openNotification.bind(this);
    this.hire = this.hire.bind(this);
    this.openSuccess = this.openSuccess.bind(this);
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
  
  render() {
    let providers = null;
    if (this.props.providers.length) {
        providers = this.props.providers.map((provider, i) => <ServiceProviderList name={provider.name} id={provider.id} hire={() => this.hire(provider.id)} about={provider.bio_profile ? provider.bio_profile.description : 'Service provider' }/>)
    }
    else 
    {
        providers = <div><h2>There are no providers yet</h2></div>
    }
    return (
      <div>
        {this.props.loadingProviders === true ? <Spin/> : providers}
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