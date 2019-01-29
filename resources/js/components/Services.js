import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Service from './Service';
import {Spinner} from 'reactstrap';
import ListGroupo from './ListGroup';
import {ListGroup} from 'reactstrap';


export default class ServiceComponent extends Component {
  constructor(props)
  {
      super(props);
      this.state = {
          categories: [],
          services: [],
          loading: false,
          errors: [],
          id: '',
          loadingService: false
      }
      this.getCategories = this.getCategories.bind(this);
      this.getServices = this.getServices.bind(this);
      this.handleServiceClick = this.handleServiceClick.bind(this);
  }
  componentDidMount()
  {
      this.getCategories();
      this.getServices();
  }

  getCategories()
  {
    this.setState({
        loading: true
    })
    axios.get('/api/categories')
        .then((res) => {
            this.setState({
                loading: false,
                categories: res.data
            });
        })
        .catch((err) => {
            this.setState({
                loading: false,
                errors: err.message,
            })
        })
  }

  getServices()
  {
    if(this.state.id === '')
    {
        this.setState({
            loadingService: true
        })
        axios.get('/api/services')
            .then((res) => {
                this.setState({
                    loadingService: false,
                    services: res.data
                })
            })
            .catch((err) => {
                this.setState({
                    loadingService: false,
                    errors: err.message
                });
            })
    }
  }

  handleServiceClick(serviceId)
  {
      this.setState({
          id: serviceId,
          loadingService: true
      });
      
      axios.get(`api/servicess/${serviceId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
             })
            .then((res) => {
                this.setState({
                    loadingService: false,
                    services: res.data
                })
                // console.log(res.data);
            })
            .catch((err) => {
                        this.setState({
                            loadingService: false,
                            errors: err
                        })

                        console.log(this.state.errors)
                    })
  }

  render() {
    const cats = this.state.categories.map((cat) => <ListGroupo name={cat.name} onclick={() => this.handleServiceClick(cat.id)}/>  )
    const services = this.state.services.map((service) => <div key={service.id} className="col-md-4">
                                                             <Service title={service.name} link={`request/${service.id}`}/>
                                                         </div>  )
    return (
      <Fragment>
          <div className="row">
            <div className="col-md-3">
                {this.state.loading === true ? <Spinner color="primary" /> : <div></div>}
                <ListGroup>
                    {cats}
                </ListGroup>
            </div>
            <div className="col-md-9">
                <div className="row justify-content-center">
                    {this.state.loadingService === true ? <Spinner color="primary" /> : <div></div>}
                    {services}
                </div>
            </div>
          </div>
      </Fragment>
    )
  }
}


if (document.getElementById('services')) {
    ReactDOM.render( <ServiceComponent/> , document.getElementById('services'));
}
