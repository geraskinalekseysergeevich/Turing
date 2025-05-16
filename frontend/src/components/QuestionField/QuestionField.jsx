import classes from './QuestionField.module.css'

const QuestionField = ({ questionText }) => {
	return (
		<div className={classes.question_field}>
			<p>{questionText}</p>
		</div>
	)
}

export default QuestionField
