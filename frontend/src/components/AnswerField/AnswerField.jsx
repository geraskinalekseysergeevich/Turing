import { useEffect, useRef, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import classes from './AnswerField.module.css'

const AnswerField = ({ answerText, animated = true }) => {
	const messageEndRef = useRef(null)
	const [key, setKey] = useState(0)

	const scrollToBottom = () => {
		if (messageEndRef.current) {
			messageEndRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}

	useEffect(() => {
		const observer = new MutationObserver(scrollToBottom)
		if (messageEndRef.current) {
			observer.observe(messageEndRef.current.parentNode, { childList: true, subtree: true })
		}

		return () => observer.disconnect()
	}, [])

	useEffect(() => {
		setKey(prevKey => prevKey + 1)
	}, [answerText])

	return (
		<div className={classes.answer_field}>
			{animated ? (
				<TypeAnimation
					key={key}
					className={classes.answer_text}
					sequence={[answerText]}
					wrapper="div"
					repeat={1}
					cursor={false}
				/>
			) : (
				<p className={classes.answer_text}>{answerText}</p>
			)}
			<div ref={messageEndRef} />
		</div>
	)
}

export default AnswerField
