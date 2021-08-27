import React from 'react'
import Icon from './Icon'
import telephoneIcon from './../img/tel.png'
import webIcon from './../img/web.png'

function Contact() {
    return (
        <div className="container rounded-3xl mb-28 mx-auto w-11/12 lg:w-8/12 px-6 lg:px-9 py-14 bg-gradient-to-r from-blue-light to-blue-normal" id="kontak">
            <h1 className="text-white text-2xl md:text-4xl font-bold ">Masih ragu dan bingung dengan Vaksinasi COVID-19?</h1>
            <h2 className="mt-4 text-white font-medium">Hubungi: </h2>
            <div className="flex flex-wrap gap-6 items-center justify-center mt-4">
                <div className="flex w-full sm:w-max lg:w-max flex-col sm:flex-row px-5 py-2 bg-blue-white rounded-lg justify-center items-center">
                    <Icon icon={telephoneIcon}></Icon>
                    <div className="info sm:ml-4 ml-0">
                        <h3 className="text-blue-normal font-semibold mt-2 sm:mt-0">HOTLINE</h3>
                        <h3 className="text-grey text-base lg:text-xl font-semibold">119 ext 9</h3>
                    </div>
                </div>
                <div className="flex w-full sm:w-max lg:w-max flex-col sm:flex-row px-5 py-2 bg-blue-white rounded-lg justify-center items-center">
                    <Icon icon={webIcon}></Icon>
                    <div className="info sm:ml-4 ml-0">
                        <h3 className="text-blue-normal font-semibold mt-2 sm:mt-0">WEBSITE</h3>
                        <h3 className="text-grey text-base lg:text-xl font-semibold">pedulilindungi.id</h3>
                    </div>
                </div>                
            </div>
        </div>
    )
}
export default Contact
