import React from 'react'

const PopularCategories = (props) => {
  return (
    <>
        <div className="section margin-top-65 margin-bottom-30">
            <div className="container">
                <div className="row">
                    
                    <div className="col-xl-12">
                        <div className="section-headline centered margin-top-0 margin-bottom-45">
                            <h3>Popular Categories</h3>
                        </div>
                    </div>
                    {props.categories.map((cat, i) => 
                            <div key={i} className="col-xl-3 col-md-6">
                                <a href="#" className="photo-box small" data-background-image="images/carpenter.jpg">
                                    <div className="photo-box-content">
                                        <h3 style={{ textTransform: 'capitalize' }}>{cat.name}</h3>
                                        <span>Book</span>
                                    </div>
                                </a>
                            </div>
                    )}

                </div>
            </div>
        </div>
    </>
  )
}

export default PopularCategories
