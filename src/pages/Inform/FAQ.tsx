import React from 'react'

function FAQ ({faq, indx, toggleFAQ} : {faq:any, indx:any, toggleFAQ:any}) {
	return (
		<div
			className={"faq " + (faq.open ? 'open' : '')}
			key={indx}
			onClick={() => toggleFAQ(indx)}
		>
			<div className="faq-question">
				{faq.question}
			</div>
			<div className="faq-answer">
				{faq.answer}
			</div>
		</div>
	)
}

export default FAQ