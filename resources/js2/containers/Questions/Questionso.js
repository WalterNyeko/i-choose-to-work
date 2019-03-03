import React from 'react'
import Question from './Questions';

const Questionso = (props) => props.questions.map((qn) => <><Question label={qn.title} id={qn.id} help={qn.help_text} type={qn.type}/><br/></>) 

export default Questionso
