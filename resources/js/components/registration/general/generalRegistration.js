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
          <div className="row justify-content-center">
              <div className="col-md-8">
                  <div className="card">
                      <div className="card-header">Register</div>

                      <div className="card-body">
                          <Form onSubmit={this.handleSubmit} >
                           
                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                                <div class="col-md-6">
                                    <Form.Item>
                                        {getFieldDecorator('name', {
                                            rules: [{required:true, message: 'Please enter your name'}],
                                        })(
                                            <input id="name" type="text" class="form-control" name="name"   autoFocus/>
                                        )}
                                    </Form.Item>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                                <div class="col-md-6">
                                    <Form.Item>
                                        {getFieldDecorator('email', {
                                            rules: [{required:true, message: 'Please provide a valid email'}, 
                                                    {type: 'email', message: 'The input is not valid E-mail!'},
                                                   ]
                                        })(
                                            <input id="email" type="email" class="form-control" name="email" />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Phone Number</label>

                                <div class="col-md-6">
                                    <Form.Item>
                                        {getFieldDecorator('phone', {
                                            rules: [{required:true, message: 'Please enter a phone number'}]
                                        })(
                                            <input id="phone" type="phone" class="form-control" name="phone" />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>

                            

                            

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <Form.Item>
                                        {getFieldDecorator('password', {
                                            rules: [
                                                {required:true, message: 'enter a strong password'},
                                                {validator: this.validateToNextPassword,}
                                            ]
                                        })(                                        
                                        <input id="password" type="password" class="form-control" name="password"  />
                                        )}
                                    </Form.Item>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confrm Password</label>

                                <div class="col-md-6">
                                <Form.Item>
                                    {getFieldDecorator('confirm', {
                                        rules: [
                                            {required: true, message: 'Please confirm password'},
                                            {validator: this.compareToFirstPassword,}
                                        ]
                                    }) (
                                        <input id="password-confirm" type="password" class="form-control" name="confirmed" />
                                    )}
                                </Form.Item>
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