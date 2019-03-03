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
            window.location.replace = "/";
        }
    });
  }
  
  render() {
    let authRedirect = null;
    if (this.props.isLoginedin === true) {
        authRedirect = <Redirect to="/"/>
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
      <div className="row justify-content-center">
        {authRedirect}      
        <div className="col-md-7 col-xs-9">
            <div className="d-flex justify-content-between auth">
              <div className="login">
                <h4>Login</h4>
              </div>
              <div className="register" onClick={() => this.props.history.push(routes.REGISTER)}>
                <h4>Sign up</h4>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                Login
              </div>
              <div className="card-body">
              {alert}
                <Form onSubmit={this.handleSubmit}>
                      <div className="form-group row">
                        <label  className="col-md-4 col-form-label text-md-right">Email</label>
                        <div className="col-md-6">
                          <Form.Item>
                            {getFieldDecorator('email', {
                              rules: [{required: true, message: 'Please enter your email address'}],
                            })(
                                  <input name="name" type="email"  
                                      className="form-control" 
                                      placeholder="email"/>
                            )}
                          </Form.Item>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label  className="col-md-4 col-form-label text-md-right">Password</label>
                        <div className="col-md-6">
                          <Form.Item>
                            {getFieldDecorator('password', {
                              rules: [{required: true, message: 'Please enter password'}],
                            })(
                                  <input name="password" type="password" 
                                      className="form-control" 
                                      placeholder="password"/>
                            )}
                          </Form.Item>
                        </div>
                      </div>
                      <div className="form-group row mb-0">
                          
                          <div className="col-md-8 offset-md-4">
                              <button type="submit" className="btn btn-primary">
                                  Login
                              </button>
                              
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
