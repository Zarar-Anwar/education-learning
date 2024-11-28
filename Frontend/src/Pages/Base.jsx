import React from 'react'
import Header from './include/Header'
import Footer from './include/Footer'

function Base({children}) {

    return (
        <>
            <div id="main-wrapper" class="main-wrapper">
                <Header/>
                {children}
                <Footer/>
            </div>

        </>
    )
}

export default Base