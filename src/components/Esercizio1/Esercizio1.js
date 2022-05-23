import React from 'react'
import Title from './Title'
import Description from './Description'
import Button from './Button'

function Esercizio1() {
    return (
        <div className='es1-container'>
            <div className='es1-wrapper'>
                <Title text="Infrastruttura e tecnologia dietro alle emozioni" />
                <Description text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                <Button text="approfondisci" link="#" />
            </div>
        </div>
    )
}

export default Esercizio1