import React from 'react'
import logo from './../img/logo.png'

function Footer() {
    return (
        <footer className="bg-pureWhite py-10">
            <div className="container mx-auto px-4">
                <div className>
                    <div className="logo">
                        <img src={logo} alt="logo-vaccinate" />
                    </div>
                    <p className="sm:w-96 w-auto text-left text-grey font-medium text-base mt-4">Bersama mari cegah dan lawan penyebaran Virus COVID-19 untuk Indonesia.</p>
                    <p className="text-center md:text-left text-grey font-medium text-base mt-8 md:mt-4" >© Copyright 2021</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
