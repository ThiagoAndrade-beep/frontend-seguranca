import React from 'react'
import { HiCheck } from "react-icons/hi";
import "./cardPrices.css"

const CardPrices = ({ title, price, description, infos, textBtn, isPopular }) => {
    return (
        <div className={`card-price ${isPopular ? "card-popular" : ""}`}>
            {isPopular && (
                <span className='popular-badge'>Mais popular</span>
            )}

            <h3>{title}</h3>
            <h2>R$ {price} <span className='month'>/mês</span></h2>
            <p className='plan-description'>{description}</p>

            <ul className="infos-list">
                {infos.map((item, index) => (
                    <li className="infos-item" key={index}>
                        <span className="check-wrapper">
                            <HiCheck size={14} />
                        </span>
                        <p>{item.text}</p>
                    </li>
                ))}
            </ul>
            <button className={`btn-plans ${isPopular ? "btn-popular" : ""}`}>{textBtn}</button>
        </div>
    )
}

export default CardPrices