import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

function Button(props) {
    return (
        <div className='es1-btn-wrapper'>
            <a className='es1-btn' href={props.link}>
                {props.text}
                <span>
                    <BsArrowRight />
                </span>
            </a>
        </div>


    )
}

export default Button