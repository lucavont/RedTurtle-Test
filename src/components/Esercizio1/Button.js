import React from 'react'

function Button(props) {
    return (

        <a href={props.link}>
            {props.text}
        </a>

    )
}

export default Button