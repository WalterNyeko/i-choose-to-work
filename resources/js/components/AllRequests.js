import React, { Component, Fragment } from 'react';
import Select2 from 'react-select2-wrapper';
import 'react-select2-wrapper/css/select2.css';
import Select from 'react-select';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form, FormGroup, Label, FormText, Spinner, Alert
} from 'reactstrap';
import {connect} from 'react-redux'

class AllRequestsComponent extends Component {

  constructor(props)
  {
      super(props);
      this.state = {
          loadingRequets: false,
          loadingServices: false,
          loadingCategoris: false,
          requests: [],
          services: [],
          categories: [],
          errors: [],
          selectedOption: [],
          options: [],
          serviceId: '',
          requestso: [],
          isCat: false,
          modal: false,
          requestId: '',
          amount: null,
          visible: false,
          isBiding: false,
          permError: [],

      }
      
      this.getRequests = this.getRequests.bind(this);
      this.getServices = this.getServices.bind(this);
      this.getCategories = this.getCategories.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
      this.setServiceId = this.setServiceId.bind(this);
      this.handleCategoryClick = this.handleCategoryClick.bind(this);
      this.toggle = this.toggle.bind(this);
      this.handleAmount = this.handleAmount.bind(this);
      this.submitBid = this.submitBid.bind(this);
      this.onDismiss = this.onDismiss.bind(this);
      this.hasErrorFor = this.hasErrorFor.bind(this);
      this.renderErrorFor = this.renderErrorFor.bind(this);
  }

  //on togle of the modal pass the request id to the modal 
    toggle(id) {
    this.setState({
      modal: !this.state.modal,
      requestId: id
    });
  }
  componentDidMount()
  {
      this.getRequests();
      this.getCategories();
      this.getServices();
  }

  getRequests()
  {
      axios.get('api/all-requests')
            .then((res) => {
                this.setState({
                    loading: false,
                    requests: res.data,
                    isCat: false 
                })

            })
            .catch((err) => {
                this.setState({
                    loading: false,
                    errors: err
                })
            })
  }

  getCategories()
  {
        this.setState({
            loadingCategories: true
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
      if(this.state.serviceId == '')
      {
        this.setState({
            loadingService: true
        })
        axios.get('/api/services1')
            .then((res) => {
                this.setState({
                    loadingService: false,
                    services: res.data
                })
                this.handleAdd(res.data)
            })
            .catch((err) => {
                this.setState({
                    loadingService: false,
                    errors: err.message
                });
            })
      }
        
  }


  handleAdd(service) {
    service.map((service) => this.setState(previousState => ({
          options: [...previousState.options, {value: service.id, label: service.name}]
      })));
  }

  handleChange(e)
  {
      this.setState({
          selectedOption: e
      });
      console.log(Object.values(e)[0]);
    //   this.setServiceId();

      const id = Object.values(e)[0];
      this.setState({
          loadingService: true,
      })

      axios.get(`api/all-requests/${id}`)
          .then((res) => {
              this.setState({
                  loading: false,
                  requests: res.data,
                  isCat: false
              })

          })
          .catch((err) => {
              this.setState({
                  loading: false,
                  errors: err
              })
          })
    console.log(this.state.requests)
  }

  setServiceId(objto)
  {
      
      this.setState({
          loadingService: true,
      })

      axios.get(`/api/services/${objto}`)
          .then((res) => {
              this.setState(previousState => ({
                  loadingService: false,
                //   services: [...previousState.services, res.data]
                    services: res.data
              }))
          })
          .catch((err) => {
              this.setState({
                  loadingService: false,
                  errors: err.message,
              });
          })
  }
  
  handleCategoryClick(id)
  {
      this.setState({
          loadingRequets: true,
      })
      axios.get(`api/cat-requests/${id}`)
            .then((res) => {
                this.setState({
                    loadingRequets: false,
                    requestso: res.data,
                    isCat: true
                })
                console.log(this.state.requestso)
            })
            .catch((err) => {
                console.log(err)
            })
  }

  
  handleAmount(event)
  {
    //   const name = e.target.name
    //   const value = e.target.value 

    //   this.setState({
    //       [name]: value,
    //   });
    this.setState({
        amount: event.target.value
    });

  }

  submitBid(event)
  {
      event.preventDefault();

      this.setState({
          isBiding: true,
      })
      const data = {
          service_req_id: this.state.requestId,
          provider_id: this.props.user.id,
          estimated_cost: this.state.amount
      }

      axios.post('api/bid', data)
            .then((res) => {
                this.onDismiss();
                this.setState({
                    isBiding: true,
                })
            })
            .then((re) => {
                this.setState({
                    isBiding: false,
                })
            })
            .catch((err) => {
                this.setState({
                    isBiding: false,
                    errors: err.response.data.errors,
                })
                this.onDismiss();
                console.log(this.state.errors)
            });
  }

  onDismiss()
  {
      this.setState({
          visible: !this.state.visible
      })
  }
  hasErrorFor (field) {
        return !!this.state.errors[field]
      }

   renderErrorFor (field) {
    if (this.hasErrorFor(field)) {
        return (
        <span className='invalid-feedback'>
            <strong>{this.state.errors[field][0]}</strong>
        </span>
        )
    }
    }

  

  render() {

    const requests = this.state.requests.map((req) => <div key={req.id} className="col-md-4 mb-4">
                                                        <h4 className="text-capitalize">{req.service.name} service need</h4>
                                                        <p>{req.description.substring(0,200)}</p>
                                                        <small>Location: {req.address}</small><br/>
                                                        <small>By: {req.customer.name}</small><br/>
                                                        {/* <a href={'bid/'+req.id} className="btn btn-primary">Apply</a> */}
                                                        <Button color="danger" onClick={() => this.toggle(req.id)}>Apply</Button>
                
                                                    </div>);
    const requestso = this.state.requestso.map((req) => req.requests.map((requesti) => <div key={requesti.id} className="col-md-4 mb-4">
                                                                                        <h4 className="text-capitalize">{requesti.service.name} service needed</h4>
                                                                                        <p>{requesti.description.substring(0,200)}</p>
                                                                                        <small>Location: {requesti.address}</small><br/>
                                                                                        <small>By: {requesti.customer.name}</small><br/>
                                                                                        <Button color="danger" onClick={() => this.toggle(requesti.id)}>Apply</Button>
                                                                                    </div>));
    const cats = this.state.categories.map((cat) => <a onClick={() => this.handleCategoryClick(cat.id)} key={cat.id} class="list-group-item list-group-item-action text-capitalize">
                                                        {cat.name}
                                                    </a>)
    const options = []; 
    
    return (
      <Fragment>
        <div className="col-md-3">
            <h5>Filters</h5> 
            <hr/>
            <h6>Select service</h6>
            <Select
                value={this.state.selectedOption}
                onChange={this.handleChange}
                options = {
                    this.state.options
                }
            />
            <hr/>
            <h6>Service categories</h6>   
                <div class="list-group">   
                    {cats}  
                    {this.state.selectedOption.data}
                </div> 
        </div>
        <div className="col-md-9">
            <div className="row">
                {this.state.loadingRequets === true && <Spinner color="primary" />}
                {this.state.isCat === false ? requests : requestso}
            </div>
        </div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Submit your offer</ModalHeader>
          <ModalBody>
              <Alert color={`${this.hasErrorFor('role') ? 'danger' : this.hasErrorFor('provider_id') ? 'danger' : 'success'}`} isOpen={this.state.visible} toggle={this.onDismiss}>
                    {`${this.hasErrorFor('role') ? this.state.errors['role'] : '' }`}
                    {`${this.hasErrorFor('provider_id') ? this.state.errors['provider_id'] : '' }`}
                    {`${this.hasErrorFor('estimated_cost') ? 'Something went wrong' : '' }`}
              </Alert>
            <form onSubmit={this.submitBid}>
                <FormGroup>
                    <Label for="exampleEmail">Amount</Label>
                    <input type="number"  className={`form-control ${this.hasErrorFor('estimated_cost') ? 'is-invalid' : ''}`} name="amount" onChange={this.handleAmount} placeholder="amount to charge" />
                    {this.renderErrorFor('estimated_cost')}
                </FormGroup>
            </form>
            {this.state.isBiding === true && <Spinner color="success"/>}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.submitBid}>Post</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
    </Fragment>
    )
  }
}

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps, {})(AllRequestsComponent)
