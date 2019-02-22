import React from 'react'
import {
  Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;


class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       confirmDirty: false,
       autoCompleteResult: [],
       success: false
    }

    this.handleConfirmBlur = this.handleConfirmBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
    this.compareToFirstPassword = this.compareToFirstPassword.bind(this);
    this.validateToNextPassword = this.validateToNextPassword.bind(this);
  }
  

  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({
          success: !this.state.success
        })
      }
      else {
        console.log('Something went wrong');
      }
    });
  }

  handleConfirmBlur(e){
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword(rule, value, callback){
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword(rule, value, callback){
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange(value){
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '256',
    })(
      <Select style={{ width: 85 }}>
        <Option value="256">+256</Option>
      </Select>
    );

    return (
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-md-8">
                  {this.state.success === false ?
                  <Form>
                    <Form.Item
                      {...formItemLayout}
                      label="E-mail"
                    >
                      {getFieldDecorator('email', {
                        rules: [{
                          type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                          required: true, message: 'Please input your E-mail!',
                        }],
                      })(
                        <Input />
                      )}
                    </Form.Item>
                    <Form.Item
                      {...formItemLayout}
                      label="Password"
                    >
                      {getFieldDecorator('password', {
                        rules: [{
                          required: true, message: 'Please input your password!',
                        }, {
                          validator: this.validateToNextPassword,
                        }],
                      })(
                        <Input type="password" />
                      )}
                    </Form.Item>
                    <Form.Item
                      {...formItemLayout}
                      label="Confirm Password"
                    >
                      {getFieldDecorator('confirm', {
                        rules: [{
                          required: true, message: 'Please confirm your password!',
                        }, {
                          validator: this.compareToFirstPassword,
                        }],
                      })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                      )}
                    </Form.Item>
                    <Form.Item
                      {...formItemLayout}
                      label={(
                        <span>
                          Fullname&nbsp;
                          <Tooltip title="What do you want others to call you?">
                            <Icon type="question-circle-o" />
                          </Tooltip>
                        </span>
                      )}
                    >
                      {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
                      })(
                        <Input />
                      )}
                    </Form.Item>
                    <Form.Item
                      {...formItemLayout}
                      label="Phone Number"
                    >
                      {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                      })(
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                      )}
                    </Form.Item>
                    
                    <Form.Item {...tailFormItemLayout}>
                      {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                      })(
                        <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                      )}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout} >
                      <div className="row">
                       <div className="col-md-6">
                        <Button type="primary" onClick={this.handleSubmit}>Register</Button>
                       </div>
                       {this.state.success === true ? 
                       <div className="col-md-6">
                        <Button type="primary" onClick={this.props.nextStep}>Complete your profile</Button>
                       </div>
                       :
                       null 
                       }
                      </div>
                    </Form.Item>
                  </Form>
                  :
                  <div>
                     Please complete your profile
                        <Button type="primary" onClick={this.props.nextStep}>Complete your profile</Button>
                      
                  </div>
                }
                </div>
              </div>
          </div>
     
    );
  }
}

const Step1 = Form.create({ name: 'register' })(RegistrationForm);

export default Step1;