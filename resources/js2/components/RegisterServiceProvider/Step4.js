import React from 'react'
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import 'antd/dist/antd.min.css';

const Step1 = (props) => {
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Register</div>
            <div class="card-body">
              <form >
              
                  <div class="form-group row">
                    <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                    <div class="col-md-6">
                      <input id="name" type="text" class="form-control" onChange={props.changeRegister} name="name"  required autofocus></input>
                    </div>
                  </div>

                <div class="form-group row">
                  <label for="email"  class="col-md-4 col-form-label  text-md-right">E-Mail Address</label>
                  <div class="col-md-6">
                    <input id="email" onChange={props.changeRegister} type="text" class="form-control" name="email" required autofocus></input>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="phone" class="col-md-4 col-form-label text-md-right">Phone Number</label>
                  <div class="col-md-6">
                    <input id="phone" onChange={props.changeRegister} type="text" class="form-control" name="phone" required autofocus></input>
                  </div>
                </div>
                  
                <div class="form-group row">
                  <label for="address" class="col-md-4 col-form-label text-md-right">Address</label>
                  <div class="col-md-6">
                    <input id="address" onChange={props.changeRegister} type="text" class="form-control" name="address" required autofocus></input>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                  <div class="col-md-6">
                    <input id="password" onChange={props.changeRegister} type="password" class="form-control" name="password" required autofocus></input>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                  <div class="col-md-6">
                    <input id="password-confirm" onChange={props.changeRegister} type="password" class="form-control" name="password-confirmation" required autofocus></input>
                  </div>
                </div>
              
                <hr />

                <div class="form-group row mb-0 justify-content-center">
                  <div class="col-md-8">
                    <span class="text-muted">
                      By registering, you are accepting the <a href="#">terms and conditons</a> of Ichuzz2work
                    </span>
                  </div>
                  <div className="col-md-4">
                    <Button type="primary" onClick={props.submitRegister}>Submit</Button>
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

export default Step1
