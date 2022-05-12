import React from 'react'
import { Navbar, Aside, Footer } from './components'
import './styles.css'

function Menu(props) {

    return (
        <div className='wrapper'>
            <Navbar userData={props.userData} />
            <Aside />
            <div className='content-wrapper bg-light'>
                <section className='marginContent bg-light'>
                    {props.children}
                </section>
            </div>
            <Footer />
        </div>

    )
}

export default Menu