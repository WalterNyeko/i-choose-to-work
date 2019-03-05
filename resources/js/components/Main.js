import React from 'react'

const Main = (props) => {
  return (
    <>
      <div class="col-xl-9 col-lg-8 content-left-offset">
			<h3 class="page-title">{props.header}</h3>
            {props.children}
      </div>
    </>
  )
}

export default Main
