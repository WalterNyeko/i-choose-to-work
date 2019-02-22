import React from 'react'

const Step1 = () => {
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Register</div>
            <div class="card-body">
              <form method="POST" action="">
              
                  <div class="form-group row">
                    <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                    <div class="col-md-6">
                      <input id="name" type="text" class="form-control" name="name"  required autofocus></input>
                    </div>
                  </div>

                <div class="form-group row">
                  <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                  <div class="col-md-6">
                    <input id="email" type="text" class="form-control" name="email" required autofocus></input>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="phone" class="col-md-4 col-form-label text-md-right">Phone Number</label>
                  <div class="col-md-6">
                    <input id="phone" type="text" class="form-control" name="phone" required autofocus></input>
                  </div>
                </div>
                  
                <div class="form-group row">
                  <label for="address" class="col-md-4 col-form-label text-md-right">Address</label>
                  <div class="col-md-6">
                    <input id="address" type="text" class="form-control" name="address" required autofocus></input>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                  <div class="col-md-6">
                    <input id="password" type="password" class="form-control" name="password" required autofocus></input>
                  </div>
                </div>

                <div class="form-group row">
                  <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                  <div class="col-md-6">
                    <input id="password-confirm" type="password" class="form-control" name="password-confirmation" required autofocus></input>
                  </div>
                </div>
              
                <hr />

                <div class="form-group row mb-0 justify-content-center">
                  <div class="col-md-8">
                    <span class="text-muted">
                      By registering, you are accepting the <a href="#">terms and conditons</a> of Ichuzz2work
                    </span>
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
