import React, { Component } from 'react';
import {
  Form, Icon, Input, Button, Checkbox, Alert
} from 'antd';
import 'antd/dist/antd.min.css'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {register} from '../../../store/actions/auth/registerAction'

class GeneralRegistration extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirmBlur = this.handleConfirmBlur.bind(this);
    this.compareToFirstPassword = this.compareToFirstPassword.bind(this);
    this.validateToNextPassword = this.validateToNextPassword.bind(this);
  }
  
  handleSubmit(e){
    e.preventDefault();
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        if (!err) {
            const data = {
              email: values.email,
              password: values.password,
              name: values.name,
              phone: values.phone,
            //   password_confirmation: values.confirmed,
              role: 'public'
            }

            this.props.register(data);
            
        }
    });
  }
    handleConfirmBlur(e) {
        const value = e.target.value;
        this.setState({
            confirmDirty: this.state.confirmDirty || !!value
        });
    }

    compareToFirstPassword(rule, value, callback) {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    validateToNextPassword(rule, value, callback) {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {
                force: true
            });
        }
        callback();
    }

  render() {
    const { getFieldDecorator } = this.props.form;
    let authRedirect = null;
    if (this.props.isLoginedin === true) {
        authRedirect = <Redirect to="/" />
    }

    // if (this.props.isLoginedin && this.props.location.state !== undefined) {
    //     return (
    //         <Redirect to={this.props.location.state.from} />
    //     );
    // }

    return (
      <div className="container">
           {authRedirect}
          <div className="row justify-content-center margin-top-30">
              <div className="col-md-8">
                  <div className="card">
                      

                      <div className="card-body">
                          <Form onSubmit={this.handleSubmit} >
                           
                            <div className="row">
                                <div className="col-xl-6">
                                    <div class="submit-field">
                                        <h5>Name</h5>
                                        
                                            <Form.Item>
                                                {getFieldDecorator('name', {
                                                    rules: [{required:true, message: 'Please enter your name'}],
                                                })(
                                                    <input id="name" type="text" class="with-border" name="name"   autoFocus/>
                                                )}
                                            </Form.Item>
                                        
                                    </div>
                                </div>
                                
                                <div className="col-xl-6">
                                    <div class="submit-field">
                                        <h5>Email</h5>

                                        
                                            <Form.Item>
                                                {getFieldDecorator('email', {
                                                    rules: [{required:true, message: 'Please provide a valid email'}, 
                                                            {type: 'email', message: 'The input is not valid E-mail!'},
                                                        ]
                                                })(
                                                    <input id="email" type="email" class="with-border" name="email" />
                                                )}
                                            </Form.Item>
                                        
                                    </div>
                                </div>
                            </div>

                            <div class="submit-field">
                                <h5>Phone Number</h5>

                                
                                    <Form.Item>
                                        {getFieldDecorator('phone', {
                                            rules: [{required:true, message: 'Please enter a phone number'}]
                                        })(
                                            <input id="phone" type="phone" class="with-border" name="phone" />
                                        )}
                                    </Form.Item>
                                
                            </div>

                            

                            
                           <div className="row">
                                <div className="col-xl-6">
                                    <div class="submit-field">
                                        <h5>Password</h5>

                                        
                                            <Form.Item>
                                                {getFieldDecorator('password', {
                                                    rules: [
                                                        {required:true, message: 'enter a strong password'},
                                                        {validator: this.validateToNextPassword,}
                                                    ]
                                                })(                                        
                                                <input id="password" type="password" class="with-border" name="password"  />
                                                )}
                                            </Form.Item>
                                    
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div class="submit-field">
                                        <h5>Confrm Password</h5>

                                        
                                        <Form.Item>
                                            {getFieldDecorator('confirm', {
                                                rules: [
                                                    {required: true, message: 'Please confirm password'},
                                                    {validator: this.compareToFirstPassword,}
                                                ]
                                            }) (
                                                <input id="password-confirm" type="password" class="with-border" name="confirmed" />
                                            )}
                                        </Form.Item>
                                        
                                    </div>
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
                                    <button class="button full-width button-sliding-icon ripple-effect" type="submit" >Register <i class="icon-material-outline-arrow-right-alt"></i></button>
                                </div>
                            </div>
                        </Form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({

    isLoginedin: state.auth.isLogin,
})

const Register = Form.create({ name: 'register' })(GeneralRegistration);

export default connect(mapStateToProps, {register})(Register);