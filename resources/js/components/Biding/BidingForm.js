import React, { Component } from 'react'
import { Form, Alert, DatePicker, notification } from "antd";
import LineBreak from '../lineBreak';

import {connect} from 'react-redux'
import {bidPost} from '../../store/actions/bid/bidAction'

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class Biding extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.openNotification = this.openNotification.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        if (!err) {
            const data = {
                service_req_id: this.props.id,
                estimated_cost: values.amount,
                description: values.description,
                delivery_date: values.delivery_date
            }
            this.props.bidPost(data)
            this.openNotification()
        }
    });
  }

  openNotification(){
      const args = {
          message: 'Notification Title',
          description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
          duration: 0,
      };
      notification.success(args);
  };
  
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <>
        <LineBreak/>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Bid on the project</div>
                        <div className="card-body">
                            <Form>
                                <div className="submit-field">
                                    <h5>Amount</h5>
                                    <Form.Item>
                                        {getFieldDecorator('amount', {
                                            rules: [
                                                {required: true, message: 'Please enter amount for the task'},
                                            ]
                                        })(
                                            <input type="number" placeholder="amount" className="form-control"/>
                                        )}
                                    </Form.Item>
                                </div>
                                <div className="submit-field">
                                     <h5>Delivery Date</h5>
                                     <Form.Item>
                                         {getFieldDecorator('date')(
                                             <DatePicker style={{ width: '100%' }} onChange={this.props.onChange} />
                                         )}
                                     </Form.Item>
                                </div>
                                <div className="submit-field">
                                     <h5>Description</h5>
                                     <Form.Item>
                                         {getFieldDecorator('description')(
                                             <textarea className="form-control" rows="3" ></textarea>
                                         )}
                                     </Form.Item>
                                </div>
                                <hr/>
                                <div class="form-group row mb-0 justify-content-center">
                                    <div class="col-md-8"> 
                                        <span class="text-muted">
                                           Make your best bid
                                        </span>
                                    </div>
                                    <div class="col-md-4">
                                        {this.props.loading ? 'Submiting....' :
                                            <button onClick={this.handleSubmit} class="button full-width button-sliding-icon ripple-effect" type="submit" >Bid <i class="icon-material-outline-arrow-right-alt"></i></button>
                                        }
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
    loading: state.bid.loading,
    message: state.bid.message,
    errors: state.bid.errors
})

const BidingForm = Form.create({name: 'biding_form'})(Biding);

export default connect(mapStateToProps, {bidPost})(BidingForm);

