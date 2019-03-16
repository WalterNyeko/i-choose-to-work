import React, { Component } from 'react'
import {
  Form, Icon, Input, Button, Checkbox, Alert
} from 'antd';
import 'antd/dist/antd.min.css'
import {Link, Redirect} from 'react-router-dom'
import { routes } from '../../constants/routes';
import { connect } from 'react-redux'
import {login, getUser } from '../../store/actions/auth/loginAction'
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    
  }

  

  handleSubmit(e){
    e.preventDefault();
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        if (!err) {
            const data = {
              email: values.email,
              password: values.password
            }
            this.props.login(data)
        }
    });
  }
  
  render() {
    let authRedirect = null;
    if (this.props.isLoginedin === true) {
        authRedirect = <Redirect to={routes.DASHBOARD}/>
    }

    if (this.props.isLoginedin && this.props.location.state !== undefined) {
        return (
            <Redirect to={this.props.location.state.from} />
        );
    }
    let alert = null;
    if(this.props.errors.length || this.props.errors.error)
    {
      alert = <Alert
                message="Something went wrong"
                description="Invalid Credentails"
                type="error"
                closable
                onClose={() => {}}
                style={{ marginBottom: 5 }}
              />
    }
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        {authRedirect}   
  
        <div className="container">
          <div className="row justify-content-center margin-top-30">
              <div className="col-md-8 col-xs-12">
                  <div className="d-flex justify-content-between auth">
                    <div className="login">
                      <h4>Login</h4>
                    </div>
                    <div className="register" onClick={() => this.props.history.push(routes.REGISTER)}>
                      <h4>Sign up</h4>
                    </div>
                  </div>
                  <div className="card">
                    
                    <div className="card-body">
                    {alert}
                      <Form onSubmit={this.handleSubmit}>
                            <div className="submit-field">
                              <h5>Email</h5>
                              
                                <Form.Item>
                                  {getFieldDecorator('email', {
                                    rules: [{required: true, message: 'Please enter your email address'}],
                                  })(
                                        <input name="name" type="email"  
                                            className="with-border"
                                            placeholder="email"/>
                                  )}
                                </Form.Item>
                              
                            </div>
                            <div className="submit-field">
                              <h5>Password</h5>
                              
                                <Form.Item>
                                  {getFieldDecorator('password', {
                                    rules: [{required: true, message: 'Please enter password'}],
                                  })(
                                        <input name="password" type="password" 
                                            className="with-border" 
                                            placeholder="password"/>
                                  )}
                                </Form.Item>
                             
                            </div>
                            <div className="form-group row mb-0">
                                
                                <div className="col-md-6">
                                    <button className="btn btn-block btn-success full-width button-sliding-icon ripple-effect" type="submit" >Log In <i className="icon-material-outline-arrow-right-alt"></i></button>
                                </div>
                                <div className="col-md-6">
                                    <Link  className="btn btn-link" to={routes.FORGOT_PASSWORD}>
                                        Forgot Your Password?
                                    </Link>
                                </div>
                                
                            </div>
                      </Form>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </>
    )
  }
}

const mapStateToProps = state => ({
  isLoginedin: state.auth.isLogin,
  loading: state.auth.loading,
  token: state.auth.token,
  errors: state.auth.errors
})

const EmailLogin = Form.create({name: 'normal_login'})(Login)

export default connect(mapStateToProps, {login, getUser})(EmailLogin);
