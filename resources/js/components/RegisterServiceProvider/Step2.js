import React from 'react'
import { Button } from 'antd';

const Step2 = (props) => {
  return (
    // <div>
    //   <h2>Hello this is step 2</h2>
    // </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Add Services</div>

            <div class="card-body">
              <form>
         
                <div class="form-group row">
                  <label for="name" class="col-md-4 col-form-label text-md-right">Service</label>
                  <div class="col-md-6">
                    <input id="name" type="text" class="form-control" name="name" value="" autofocus></input>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="name" class="col-md-4 col-form-label text-md-right">Description</label>
                    <div class="col-md-6">
                      <textarea class="form-control" rows="5" id="comment"></textarea>
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-md-4 col-form-label text-md-right">Experience</label>
                      <div class="col-md-6">
                        <select class="form-control" id="available">
                          <option>Less than 1 year</option>
                          <option>1 to 2 years</option>
                          <option>3 to 5 years</option>
                          <option>5 to 10 years</option>
                          <option>More than 10 years</option>
                        </select>
                      </div>
                  </div>

                  <div class="form-group row">
                    <label for="billing" class="col-md-4 col-form-label text-md-right">Billing Rate per hour</label>
                    <div class="col-md-6">
                      <input id="name" type="text" class="form-control" name="name" value="" autofocus></input>
                    </div>
                  </div>

                  <div class="form-group row">
                    <label class="col-md-4 col-form-label text-md-right">Availability</label>
                      <div class="col-md-6">
                        <select class="form-control" id="available">
                          <option>Immediately</option>
                          <option>One to Two weeks</option>
                          <option>One month</option>
                          <option>Other</option>
                        </select>
                      </div>
                  </div>

                  <hr />

                    <div class="form-group row mb-0 justify-content-center">
                      <div class="col-md-8">       
                        <Button type = "primary" onClick={props.saveAndNew} > Add Another Service</Button>
                      </div>
                      <div class="col-md-4">
                        <Button type="primary" onClick={props.saveServiceContinue} >Save and continue</Button>
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

export default Step2
