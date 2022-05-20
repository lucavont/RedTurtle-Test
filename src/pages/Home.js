import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <nav className='home-nav'>
                <Link to='/es-1'>Esercizio 1</Link>
                <Link to='/es-1'>Esercizio 1</Link>
                <Link to='/es-1'>Esercizio 1</Link>
                <Link to='/es-1'>Esercizio 1</Link>
            </nav>
        </div>
    )
}

export default Home