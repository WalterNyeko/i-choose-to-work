import React, { Component } from 'react';
import {connect} from 'react-redux';
import {register} from '../actions/authAction';
import {getServices} from '../actions/servicesAction';
import {Redirect} from 'react-router-dom';
import Chosen from '../components/Chosen';

class RegisterComponent extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      isPro: false,
      roles: [],
      options: [],
      service: [],
      services: [],
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleServices = this.handleServices.bind(this);
  }

  componentDidMount()
  {
      this.props.getServices();
  }

  
  handleOnChange(e)
  {
    

    if(this.state.isPro === true)
    {
        this.setState({
            [e.target.name]: e.target.value,
            roles: ['public', 'provider'],
        })
    }
    if(this.state.isPro === false)
    {
        this.setState({
            [e.target.name]: e.target.value,
            roles: ['public']
        })
    }

  }


  handleServices(value)
  {
    this.setState({
        services: value
    })
  }

  handleSubmit(e)
  {
      e.preventDefault();

      const data = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.confirmed,
          roles: this.state.roles,
          services: this.state.services
      }
      
    // console.log(data);
    this.props.register(data);
  }
  render() {
    let authRedirect = null;
    if (this.props.isLoginedin) {
        authRedirect = <Redirect to={this.props.authRedirectPath}/>
    }
    const options = this.props.services.map((service, index) => <option key={index} value={service.id}>{service.name}</option>) 
    return (
      <div className="container">
           {authRedirect}
          <div className="row justify-content-center">
              <div className="col-md-8">
                  <div className="card">
                      <div className="card-header">Register</div>

                      <div className="card-body">
                          <form onSubmit={this.handleSubmit} >
                           
                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control" name="name" onChange={this.handleOnChange}  value={this.state.name} required autofocus/>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" name="email" onChange={this.handleOnChange} value={this.state.email} required/>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Phone Number</label>

                                <div class="col-md-6">
                                    <input id="phone" type="phone" class="form-control" name="phone" onChange={this.handleOnChange} value={this.state.phone} required/>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="role" class="col-md-4 col-form-label text-md-right">Do you want a Pro Account</label>

                                <div class="col-md-6 checkbox">
                                    
                                        <select class="form-control" name="role" onChange={() => this.setState({isPro: !this.state.isPro })}>
                                            <option  value="1">No</option>
                                            <option value="0">Yes</option>
                                            
                                        </select>   
                                        <span class="form-text text-muted">
                                            If you are to provide services on the platform. This makes you an Ichuzz2work Pro
                                        </span>
                                </div>
                                
                            </div>

                            {this.state.isPro ? 
                              <div class="form-group row">
                                  <label for="name" class="col-md-4 col-form-label text-md-right">Which Service</label>

                                  <div class="col-md-6">
                                       <Chosen onChange={ value => this.handleServices(value)}>
                                            {options}
                                       </Chosen>
                                  </div>
                              </div>
                              :
                              null
                            }

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" value={this.state.password} name="password" onChange={this.handleOnChange} required />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confrm Password</label>

                                <div class="col-md-6">
                                    <input id="password-confirm" type="password" class="form-control" name="confirmed" onChange={this.handleOnChange} value={this.state.confirmed} required />
                                </div>
                            </div>

                            <hr/>

                            <div class="form-group row mb-0 justify-content-center">
                                <div class="col-md-8"> 
                                    <span class="text-muted">
                                        By registering, you are accepting the <a href="#">terms and conditons</a> of Ichuzz2work
                                    </span>
                                </div>
                                <div class="col-md-4">
                                    <button type="submit" class="btn btn-primary">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    services: state.services.items,
    authRedirectPath: state.auth.authRedirectPath,
    isLoginedin: state.auth.isAutheticate,
})

export default connect(mapStateToProps, {register, getServices})(RegisterComponent);
