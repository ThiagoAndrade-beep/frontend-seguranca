import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi";
import "./cardFaq.css"

const CardFaq = ({ question, response }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className={`faq-item ${open ? "open" : ""}`}>
            <div className='faq-question'>
                <p>{question}</p>
                <button onClick={() => setOpen(!open)}><FiChevronDown /></button>
            </div>

            <div className="faq-response">
                <p>{response}</p>
            </div>
        </div>
    )
}

export default CardFaq