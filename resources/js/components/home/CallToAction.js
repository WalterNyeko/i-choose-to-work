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
                                <h2>Hire experts or be hired. <br/> For any task, any time.</h2>
                                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation is on the runway towards.</p>
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
