import React, { Fragment, useState } from 'react'
import logo from './../img/logo.png'
import Button from './Button'
import { Icon } from '@iconify/react';

function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    let drawerStyle = isDrawerOpen 
    ? 'drawer lg:hidden flex flex-col items-start py-4 px-6 gap-6 absolute h-screen z-10 bg-white shadow-blueDefault w-60 left-0 transition-all duration-500'
    : 'drawer lg:hidden flex flex-col items-start py-4 px-6 gap-6 absolute h-screen z-10 bg-white shadow-blueDefault w-60 -left-60 transition-all duration-500'
    
    let burgerIcon = isDrawerOpen 
    ? 'ci:close-big'
    : 'ci:hamburger'

    console.log(isDrawerOpen)
    return (
        <Fragment>
        <nav className="container mx-auto flex lg:justify-between justify-center items-center flex-row p-5 relative">
            <div className="lg:hidden absolute left-3 cursor-pointer" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                <Icon icon={burgerIcon} color="#3096e1" width="32" height="32" />
            </div>
            <div className="logo">
                <img src={logo} alt="logo-vaccinate" />
            </div>
            
            <div className="hidden navlink font-semibold lg:flex lg:flex-row gap-8">
                <h5><a className="hover:text-blue-normal transition-all duration-300" href="/">Beranda</a></h5>
                <h5><a className="hover:text-blue-normal transition-all duration-300" href="/">Pengetahuan Vaksin</a></h5>
                <h5><a className="hover:text-blue-normal transition-all duration-300" href="#lokasi">Tempat Vaksinasi</a></h5>
                <h5><a className="hover:text-blue-normal transition-all duration-300" href="#kontak">Kontak</a></h5>
            </div>

            <div className="hidden lg:block">
                <Button link="#daftar">Daftar</Button>
            </div>

        </nav>
            <div className={drawerStyle}>
                <h5><a className="hover:text-blue-normal font-semibold transition-all duration-300" href="/">Beranda</a></h5>
                <h5><a className="hover:text-blue-normal font-semibold transition-all duration-300" href="/">Pengetahuan Vaksin</a></h5>
                <h5><a className="hover:text-blue-normal font-semibold transition-all duration-300" href="#lokasi">Tempat Vaksinasi</a></h5>
                <h5><a className="hover:text-blue-normal font-semibold transition-all duration-300" href="#kontak">Kontak</a></h5>
                <Button link="#daftar">Daftar</Button>
            </div>
        </Fragment>
    )
}

export default Navbar
