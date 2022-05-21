import React from 'react'

function Button(props) {
    return (
        <Button>
            <a href={props.link} target="_blank" rel='noreferrer'>{props.text}</a>
        </Button>
    )
}

export default Button