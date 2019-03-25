import React from 'react'
import {Link} from 'react-router-dom'
import { routes } from '../../constants';

const CallToAction = () => {
  return (
    <>
        <div className="photo-section" data-background-image="images/section-background.jpg">

                
                <div className="text-content white-font">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-6 col-md-8 col-sm-12">
                                <h2>Provide a service, hire experts or get hired  <br/> For any task, any time anywhere</h2>
                                <p>Make your Knowledge, expertise, skills and abilities known to the customers. You get hired for what you can deliver best. Ichuzz2work enables your Aspirations. DECENT WORK FOR A DECENT PAY </p>
                                <Link to={routes.REGISTER} className="button button-sliding-icon ripple-effect big margin-top-20">Get Started <i className="icon-material-outline-arrow-right-alt"></i></Link>
                            </div>
                        </div>

                    </div>
                </div>

               

        </div>
    </>
  )
}

export default CallToAction
