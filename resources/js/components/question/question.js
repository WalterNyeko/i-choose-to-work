import React from 'react'

const Question = (props) => {
  return (
      <div className="form-group row">
            <label  className="col-md-4 col-form-label text-md-right text-captalize">{props.label}</label>
            <div className="col-md-6">
                <input name={props.name} type="text" onChange={(e) => console.log(e.target.value) }  className="form-control" placeholder={props.help}/>
            </div>
        </div>
  )
}

export default Question
