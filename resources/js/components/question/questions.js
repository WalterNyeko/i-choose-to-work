import React from 'react'
import Question from './question';

const Questions = (props) => props.questions.map((question, i) => <Question key={i} label={question.title}  name={question.name} onChangeQn={(e, o) => props.onChangeQuestion(e, o)} help={question.help_text}/>)

export default Questions
