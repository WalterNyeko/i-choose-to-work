import React from 'react'

const Sidebar2 = (props) => {
  return (
    <div className="col-xl-3 col-lg-4">
			<div className="sidebar-container">
                {props.children}
            <div className="clearfix"></div>
            </div>
    </div>
  )
}

export default Sidebar2
