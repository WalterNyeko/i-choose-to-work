import React, { Component } from 'react'
import { routes } from '../constants';
import {Link} from 'react-router-dom'
import LineBreak from '../components/lineBreak';

export default class NotFound extends Component {
  render() {
    return (
      <>
        <div className="container">
          <LineBreak/>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  Register as a Service Provider
                </div>
                <div className="card-body">
                  <p>Please register as a service provider</p>
                  <Link to={routes.PROVIDER_SERVICE} className="btn btn-primary">Register</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
