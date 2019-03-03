import React from 'react'
import PicturesWall from '../ProfilePicUpload';
import { Button } from 'antd';

const Step3 = (props) => {
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
                        <PicturesWall/>
                        <h3>Profile Pic</h3>
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
                      <div class="col-md-8 text-right">
                        <span class="text-muted">
                          <Button type="primary" onClick={props.finish} >Finish</Button>
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
