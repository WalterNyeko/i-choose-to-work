import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Service from './Service';
import {Spinner} from 'reactstrap';
import ListGroupo from './ListGroup';
import {ListGroup} from 'reactstrap';
import PaginationComponent from './pagination';


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
          loadingService: false,
          offset: 1,
          lastPage: '',
          total: '',
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
    if (this.state.offset === 1)
    {
        this.setState({
            loadingService: true
        })
        axios.get('/api/services')
            .then((res) => {
                this.setState( {
                    loadingService: false,
                    services: res.data.data,
                    lastPage: res.data.last_page,
                    total: res.data.total,
                    perPage: res.data.per_page,
                    offset: this.state.offset + 1,
                    pervious: res.data.prev_page_url
                });
            })
            .catch((err) => {
                this.setState({
                    loadingService: false,
                    errors: err.message
                });
            })
            console.log(this.state.offset)
    }
    else
    {
        this.setState({
            loadingService: true
        })
        axios.get(`/api/services?page=${this.state.offset}`)
            .then((res) => {
                this.setState({
                    loadingService: false,
                    services: [...res.data.data],
                    lastPage: res.data.last_page,
                    total: res.data.total,
                    perPage: res.data.per_page + this.state.perPage,
                    offset: this.state.offset + 1,
                    pervious: res.data.prev_page_url
                });
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
                <div className="row">
                    {this.state.perPage } of {this.state.total} Services
                </div>
                <div className="row justify-content-center">
                    {this.state.loadingService === true ? <Spinner color="primary" /> : <div></div>}
                    {this.state.services.length ? services : 'No services found'}
                    <hr/>
                    
                </div>
                {this.state.offset != this.state.total ? <button className="btn btn-primary" onClick={() => this.getServices() }>Load Others</button> : null }
            </div>
          </div>
      </Fragment>
    )
  }
}


if (document.getElementById('services')) {
    ReactDOM.render( <ServiceComponent/> , document.getElementById('services'));
}
