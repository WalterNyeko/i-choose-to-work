import React from 'react'

const Step3 = () => {
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">Profile</div>

              <div class="card-body">
                <form>
                
                    <div class="row">
                      <div class="col-md-4" >
                        <div class="card" >
                          <img class="card-img-top" src="images/pic.png" alt="Card image cap"></img>
                            <div class="card-body">
                              <a href="#" class="btn btn-primary">Upload Profile Picture</a>
                            </div>
                          </div>
                      </div>
                      <div class="col-md-8">
                        <label for="name">About Me</label>
                          <div>
                            <textarea class="form-control" rows="5" id="comment" autofocus></textarea>
                          </div>
                      </div>
                    </div>

                    <hr />

                    <div class="form-group row mb-0 justify-content-center">
                      <div class="col-md-8">
                        <span class="text-muted">
                          
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

export default Step3
