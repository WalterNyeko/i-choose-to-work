import React, { Component } from 'react'
import {
  Form, Icon, Input, Button, Checkbox, Alert, AutoComplete, Select, Tooltip, notification, InputNumber, Switch, message
} from 'antd';
import 'antd/dist/antd.min.css'
import {connect} from 'react-redux'
import {Redirect, Link} from 'react-router-dom';
import {getServices} from '../.../../../../store/actions/services/servicesAction'
import {saveService} from '../.../../../../store/actions/services/savingServiceAction'
import { routes } from '../../../constants';
import LineBreak from '../../lineBreak';

// const dataSource = ['Service 1', 'Tiling', 'Plumbing'];

const { TextArea } = Input;
const Option = Select.Option;


class ProviderServices extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isAvailable: true,
       experience_type: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.handleSubmitAndClear = this.handleSubmitAndClear.bind(this);
    this.openNotification = this.openNotification.bind(this);
  }

  componentDidMount() {
      this.props.getServices();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.loading)
    {
        const hide = message.loading('Please wait....', 0);
        // Dismiss manually and asynchronously
        setTimeout(hide, 2000);
    }
    if(nextProps.saveLoading)
    {
        const hide = message.loading('Saving....', 0);
        // Dismiss manually and asynchronously
        setTimeout(hide, 2000);
    }
    
  }

    openNotification(){
      notification.success({
          message: 'Saved Successfully',
          description: 'Service was successfully added',
          onClick: () => {
              console.log('Notification Clicked!');
          },
      });
    };
  

  onChangeStatus()
  {
      this.setState({
          isAvailable: !this.state.isAvailable
      })
  }

//   componentWillReceiveProps(nextProps) {
//       if(nextProps.services)
//       {
//           nextProps.services.map((serv) => this.setState(prev => ({
//               services: [...prev.services, serv.name]
//           })))
//           console.log(this.state.services)
//       }
//   }

  handleSubmit(e) {
      e.preventDefault();
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
          if (!err) {
              const data = {
                  serviceId: values.service,
                  billing_rate_per_hour: values.billing === undefined ? 0 : values.billing,
                  experience_in_months: values.experience,
                  isAvailable: this.state.isAvailable,
              }
              this.props.saveService(data);
              this.openNotification();
              return this.props.history.push(routes.DASHBOARD)
          }
      });
  }

  handleSubmitAndClear(e) {
      e.preventDefault();
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
          if (!err) {
              const data = {
                  serviceId: values.service,
                  billing_rate_per_hour: values.billing === undefined ? 0 : values.billing,
                  experience_in_months: values.experience,
                  isAvailable: this.state.isAvailable,
                  experience_type: this.state.experience_type
              }
              this.props.saveService(data);
              const { form: { resetFields } } = this.props;
              this.openNotification();
              return resetFields();
          }
      });
  }

  onChange(value) {
      console.log('changed', value);
  }
  
  render() {
    const {getFieldDecorator }= this.props.form;
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: 'years',
    })(
      <Select style={{ width: 85 }} onChange={(value) => console.log(value)}>
        <Option value="years">Years</Option>
        <Option value="months">Months</Option>
        <Option value="weeeks">Weeks</Option>
        <Option value="days">Days</Option>
      </Select>
    );
    const options = this.props.services.map((service, index) => <Option key={index} value={service.id}>{service.name}</Option> );
    return (
      <div className="container">
        <LineBreak/>
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        Add Service
                    </div>
                    <div className="card-body">
                        <Form>
                            <div className="row form-group">
                                <label className="col-md-4 col-form-label text-md-right">Service</label>
                                <div className="col-md-6">
                                    <Form.Item>
                                        {getFieldDecorator('service', {
                                            rules: [{required: true, message: 'Please select the service you want to offer'}]
                                        })(
                                            <Select
                                                showSearch
                                                style={{ width: '100%' }}
                                                placeholder="Select Service"
                                                optionFilterProp="children"
                                                // onChange={handleChange}
                                                // onFocus={handleFocus}
                                                // onBlur={handleBlur}
                                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                            >
                                                {options}
                                            </Select>
                                        )}
                                    </Form.Item>
                                </div>
                                <div className="col-md-2">
                                    <Tooltip title="Select service to offer">
                                        <Icon type="question-circle-o" />
                                    </Tooltip>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-4 col-form-label text-md-right">Experience</label>
                                <div className="col-md-6">
                                    <Form.Item>
                                        {getFieldDecorator('experience', {
                                            rules: [{required: true, message: 'Provide your experience in terms of years, weeks or days'}]
                                        })(
                                            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                                        )}
                                    </Form.Item>
                                </div>
                                <div className="col-md-2">
                                    <Tooltip title="Whats your experience in the service">
                                        <Icon type="question-circle-o" />
                                    </Tooltip>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-4 col-form-label text-md-right">Billing per hour</label>
                                <div className="col-md-6">
                                    <Form.Item>
                                        {getFieldDecorator('billing', {
                                            // rules: [{}]
                                        })
                                        (
                                            <input type="number" className="form-control" placeholder="Billing in UGX" />
                                        )
                                        }
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="row form-group">
                                <label className="col-md-4 col-form-label text-md-right">Are you available</label>
                                <div className="col-md-6">
                                    <Form.Item>
                                        {getFieldDecorator('isAvailable', {
                                            // rules: [{}]
                                        })
                                        (
                                            <Switch defaultChecked  onChange={this.onChangeStatus}/>
                                        )}
                                    </Form.Item>
                                </div>
                            </div>
                            {/* <div className="row form-group">
                                <label className="col-md-4 col-form-label text-md-right">Some descrption</label>
                                <div className="col-md-6">
                                    <Form.Item>
                                        {getFieldDecorator('isAvailable', {
                                            // rules: [{}]
                                        })
                                        (
                                            <TextArea rows={4} />
                                        )}
                                    </Form.Item>
                                </div>
                            </div> */}
                            <div className="form-group row mb-0 justify-content-center">
                                <div className="col-md-6"> 
                                    <button type="button" onClick={this.handleSubmitAndClear} className="btn btn-primary">
                                        Save and Add Another Service
                                    </button>
                                </div>
                                <div className="col-md-4">
                                    <button type="button" onClick={this.handleSubmit} className="btn btn-primary">
                                       Save and Continue
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
    services: state.services.services,
    loading: state.services.loading,
    errors: state.services.errors,
    saveLoading: state.saveService.loading
})

const ServiceForm = Form.create({name: 'service_form'})(ProviderServices)

export default connect(mapStateToProps, {getServices, saveService })(ServiceForm);
