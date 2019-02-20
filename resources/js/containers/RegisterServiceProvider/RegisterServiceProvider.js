import React, { Component } from 'react'
import Step1 from '../../components/RegisterServiceProvider/Step1';
import Step2 from '../../components/RegisterServiceProvider/Step2';
import Step3 from '../../components/RegisterServiceProvider/Step3';

import { Steps, Button, message } from 'antd';
import "antd/dist/antd.css";

import "./registerProvider.css";

const Step = Steps.Step;

export default class RegisterServiceProvider extends Component {

  constructor(props) {
      super(props);
      this.state = {
          current: 0,
      };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    const steps = [{
        title: 'User Credentials',
        content: <Step1/> ,
    }, {
        title: 'Services',
        content: <Step2/> ,
    }, {
        title: 'Profile',
        content: <Step3/> ,
    }];
    return (
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-10">
              <Steps current={current} className="steps">
                {steps.map(item => <Step key={item.title} title={item.title} />)}
              </Steps>
              <div className="steps-content">{steps[current].content}</div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-10">
            {
              current < steps.length - 1
              && <Button type="primary" onClick={() => this.next()}>Next</Button>
            }
            {
              current === steps.length - 1
              && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
            }
            {
              current > 0
              && (
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                Previous
              </Button>
              )
            }
            </div>
        </div>
      </div>
    );
  }
}
