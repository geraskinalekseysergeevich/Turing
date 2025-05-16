import AnswerField from '../AnswerField/AnswerField'
import QuestionField from '../QuestionField/QuestionField'

const MessagePair = ({ questionText, answerText, animated = false }) => {
	return (
		<div>
			<QuestionField questionText={questionText} />
			<AnswerField answerText={answerText} animated={animated} />
		</div>
	)
}

export default MessagePair
