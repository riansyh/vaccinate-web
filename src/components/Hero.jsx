import React from 'react'
import Button from './Button'
import illustrasiOne from './../img/illustrasi-1.png'

function Hero() {
    return (
        <div className="hero bg-white shadow-blueDefault">
            <div className="container mx-auto flex flex-col items-center relative px-4">
                <h1 className="h1 mt-8 z-10" >Lindungi Diri dan Keluarga <br /> dengan <span className="text-green-normal">Vaksinasi</span></h1>
                <p className="mt-6 text-grey z-10 max-w-screen-sm max-auto">Jangan takut vaksinasi, mari bersama-sama kita ikuti anjuran pemerintah dengan cara
                vaksinasi demi menghentikan penyebaran Virus COVID-19</p>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 mx-auto mb-52 mb- sm:mb-60 z-10">
                    <Button link="#daftar">Daftar Sekarang</Button>
                    <Button type="secondary">Pengetahuan Vaksin</Button>
                </div>
                <img src={illustrasiOne} alt="illustrasi-vaksinasi" className="absolute bottom-0 z-0 sm:h-72"/>
            </div>
        </div>
    )
}
export default Hero
