import React from 'react'

const Sidebar2 = (props) => {
  return (
    <div class="col-xl-3 col-lg-4">
			<div class="sidebar-container">
                {props.children}
            <div class="clearfix"></div>
            </div>
    </div>
  )
}

export default Sidebar2
