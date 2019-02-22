import React, { Component } from 'react'
import Step1 from '../../components/RegisterServiceProvider/Step1';
import Step2 from '../../components/RegisterServiceProvider/Step2';
import Step3 from '../../components/RegisterServiceProvider/Step3';
import {Redirect} from 'react-router-dom';

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

      this.register = this.register.bind(this);
      this.handleChange1 = this.handleChange1.bind(this);
      this.goDashboard = this.goDashboard.bind(this);

  }

  register()
  {
    console.log('i have register for htis already');
    this.next();
  }

  handleChange1(e)
  {
    console.log(e.target.value)
  }

  goDashboard()
  {
    this.props.history.push('/dashboard')
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
        content: <Step1 
                      nextStep={this.register} 
                      changeRegister={this.handleChange1}/> ,
    }, {
        title: 'Services',
        content: <Step2
                      saveServiceContinue={this.register} /> ,
    }, {
        title: 'Profile',
        content: <Step3 finish={this.goDashboard}/> ,
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
        
      </div>
    );
  }
}
