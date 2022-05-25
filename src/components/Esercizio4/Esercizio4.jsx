import React, { useState } from 'react'
import Data from '../../data/es4-mock.js'
import { BsArrowRight } from 'react-icons/bs'

function Esercizio4() {
    const [visible, setVisible] = useState(3);

    const showAll = () => {
        setVisible()
    }

    return (
        <div className='es4-container'>
            <div className="item-wrapper">
                {Data.slice(0, visible).map((item, i) => (
                    <div className='es4-item'>
                        <div className="img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="content">
                            <div className="date">
                                {item.date}
                            </div>
                            <div className="title">
                                <h1>
                                    {item.title}
                                </h1>
                            </div>
                            <div className="description">
                                {item.description}
                            </div>
                            <div className="link">
                                <a href={item.link}>
                                    <p>
                                        vedi
                                    </p>
                                    <BsArrowRight />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={showAll}>
                    Vedi tutto
                </button>
            </div>
        </div>
    )
}

export default Esercizio4