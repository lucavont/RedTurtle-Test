import React from 'react'
import Data from '../../data/es3-mock.json'
import { useState } from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

function Esercizio3() {

    const [active, setActive] = useState(null)
    const activate = (i) => {
        if (active === i) {
            return setActive(null)
        }
        setActive(i)
    }

    return (
        <div className='es3-container'>
            <div className='accordion'>
                {Data.map((item, i) => (
                    <div className='es3-item' key={item.id}>
                        <div className='item-wrapper' onClick={() => activate(i)}>
                            <div className='item-title'>
                                <h3>{item.name}</h3>
                                <span>{active === i ? <FaArrowDown /> : <FaArrowUp />}</span>
                            </div>
                            <hr className='larger-hr' />
                            <div className={active === i ? 'item-description show' : 'item-description'}>

                                <hr className="little-hr" />
                                <p>
                                    {item.text}
                                </p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Esercizio3