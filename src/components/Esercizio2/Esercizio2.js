import React from 'react'
import Title from '../Esercizio1/Title'
import Description from '../Esercizio1/Description'
import Simbolo from '../../assets/simbolo.svg'
import Data from '../../data/es2-mock.json'
import { BsArrowRight } from 'react-icons/bs'

function Esercizio2() {
    return (
        <div className='es2-container'>
            <nav>
                <a href='#'>
                    <img src={Simbolo} alt="Logo" />
                </a>
            </nav>
            <Title text="I nostri valori" />
            <hr className='title-hr' />
            <Description text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <div className='es2-content-wrapper'>
                {Data.map((item) => (
                    <div className='es2-item'>
                        <div className='item-title'>
                            <h2>{item.title}</h2>
                        </div>
                        <hr />
                        <div className='item-description'>
                            <p>{item.description}</p>
                        </div>
                        <a href={item.href}>approfondisci
                            <span>
                                <BsArrowRight />
                            </span>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Esercizio2