import React, { Component } from 'react'
import {connect} from 'react-redux'
import { DatePicker, notification, Spin, Select, Form } from 'antd';
import 'antd/dist/antd.css';
import {fetchQuestions} from '../../store/actions/questions/questionsAction'
import Questions from '../../components/question/questions';
import moment from 'moment';
//Import React Scrit Libraray to load Google object
import Script from 'react-load-script';
import {postRequest} from '../../store/actions/requestsActions/reqActions'
import { routes } from '../../constants';
import {getSingleService} from '../../store/actions/services/servicesAction'

const {
    MonthPicker,
    RangePicker,
    WeekPicker
} = DatePicker;

const Option = Select.Option;

class RequestFormo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       questions: [],
       service: {}
    }
    this.handleQuestions = this.handleQuestions.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.disabledDate = this.disabledDate.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.openNotification = this.openNotification.bind(this);
  }

  componentDidMount() {
      const { match: { params } } = this.props;
      this.props.fetchQuestions(params.id);
  }

  componentWillMount() {
      const { match: { params } } = this.props;
      this.props.getSingleService(params.id);
  }

  componentWillReceiveProps(nextProps) {
      if(nextProps.service)
      {
        this.setState({
            service: nextProps.service
        })  
      }
  }
  
  
  handleQuestions(name, value)
  {
      this.setState({
          qn: {[name]: value},
      })
    
      console.log(this.state.qn);
  }

  openNotification(){
      notification.success({
          message: 'Request made successfully',
          description: 'Your request has been made',
          onClick: () => {
              console.log('Notification Clicked!');
          },
      });
  };

  onChangeDate(date, dateString) {
      this.setState({
          date: dateString
      })
      console.log(this.state.date)
  }

  onChange(e)
  {
      const target = e.target;
      const name = target.name;
      const value = target.value 
      this.setState({
          [name] : value
      })
  }

  disabledDate(current) {
      // Can not select days before today and today
      return  current < moment().endOf('day');
  }

  handleScriptLoad() {
      // Declare Options For Autocomplete
      var options = {
          //   types: ['(cities)'],
          componentRestrictions: {
              country: "ug"
          }
      };

      // Initialize Google Autocomplete
      /*global google*/ // To disable any eslint 'google not defined' errors
      this.autocomplete = new google.maps.places.Autocomplete(
          document.getElementById('autocomplete'),
          options,
      );

      // Fire Event when a suggested name is selected
        this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  }

  handlePlaceSelect() {

      // Extract City From Address Object
      let addressObject = this.autocomplete.getPlace();
      let address = addressObject.address_components;

      // Check if address is valid
      if (address) {
          // Set State
          this.setState({
              city: address[0].long_name,
              address: addressObject.formatted_address,
              lat: addressObject.geometry.viewport.ga.j,
              long: addressObject.geometry.viewport.ga.l,
          });
      }
      console.log(this.state.address)
  }

  handleSubmit(e)
  {
      e.preventDefault();

      const { match: { params }, history } = this.props;


        this.props.form.validateFields((err, values) => {
            if (!err) {
                const data = {
                    service_id: params.id,
                    address: this.state.address,
                    description: values.description,
                    expected_start_date: this.state.date,
                    payment_method: 'cash'
                }
                this.props.postRequest(data);
                this.openNotification();
                this.props.history.push(`${routes.SERVICE_PROVIDERS}/${params.id}`)
                // console.log(data);
            }
        });
    
    // if(this.props.postErrors.length > 0)
    // {
    //     alert('something went wrong')
    // }
  }
  
  
  render() {
    // const service = this.state.service
    const {getFieldDecorator} = this.props.form;
    return (
      <div className="container">
        <div class="margin-top-30"></div>
        <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhV7K0LTU02IbjYC1Tz6GEpF3z5TU2_xs&libraries=places" onLoad={this.handleScriptLoad}        
        /> 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div class="card">
                    <div class="card-header">
                        Request  expert
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <label className="col-md-4 col-form-label text-md-right">Date</label>
                                
                                    <div className="col-md-6">
                                        <Form.Item help="When do you need the service">
                                            {getFieldDecorator('date', {
                                                rules: [{ required: true, message: 'Please enter date you need the service!' }],
                                            })(
                                                <DatePicker style={{ width: '100%' }} onChange={this.onChangeDate} />
                                            )}
                                        </Form.Item>
                                    </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-4 col-form-label text-md-right">Address</label>
                                <div className="col-md-6">
                                    <Form.Item help="Please provide the location">
                                        <input type="text" id="autocomplete"  className="form-control" onChange={this.handlePlaceSelect} />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-4 col-form-label text-md-right">Payment method</label>
                                <div className="col-md-6">
                                    <Form.Item help="How to pay service provider">
                                        {getFieldDecorator('payment', {
                                            rules: [{required: true, message: "Please select payment method"}],
                                        })(
                                            <Select
                                                showSearch
                                                style={{ width: '100%' }}
                                                placeholder="Select a payment method"
                                                optionFilterProp="children"
                                                // onChange={handleChange}
                                                // onFocus={handleFocus}
                                                // onBlur={handleBlur}
                                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                            >
                                                <Option value="cash">Cash</Option>
                                            </Select>
                                        )}
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-md-4 col-form-label text-md-right">Description</label>
                                <div className="col-md-6">
                                   <Form.Item help="Please give extra description of what you want">
                                        {getFieldDecorator('description', {
                                            rules: [{required: true, message: 'Please provide more description'},
                                                    {min: 20, message: 'Describe what you need in more than 20 words'}
                                        ]
                                        } )(
                                            <textarea  className="form-control" name="description"  ></textarea>
                                        )}
                                   </Form.Item>
                                    
                                </div>
                            </div>
                            {this.props.questions.length ?
                            <Questions questions={this.props.questions} />
                            : null }
                            <div className="form-group row">
                                <div className="col-md-8 offset-md-4">
                                    <button type="submit" className="btn btn-primary">
                                        { this.props.postLoading === true ? <><Spin/> Sending request..</> : 'Book' }
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
    loading: state.questions.loading,
    errors: state.questions.errors,
    questions: state.questions.items,
    postLoading: state.makeRequest.loading,
    postErrors: state.makeRequest.errors,
    service: state.services.service
})

const RequestForm = Form.create({name: 'request_form'})(RequestFormo)

export default connect(mapStateToProps, {fetchQuestions, postRequest, getSingleService})(RequestForm)
