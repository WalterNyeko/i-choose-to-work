import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const Question = (props) => {
  switch (props.type) {
      case 'text':
          return(
              <>
                <div className="form-group row">
                        <Label for="exampleEmail">{props.label}</Label>
                        <Input type="text" name={props.id} id="exampleEmail" placeholder={props.help} />
                </div>
            </>
          )
  
      default:
          break;
  }
}

export default Question
