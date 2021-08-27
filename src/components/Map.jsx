import React from 'react'
import Icon from './Icon'
import mapIcon from './../img/map.png'

function Map() {
    return (
        <div className="p-10 lg:p-20 flex flex-col items-center" id="lokasi">
            <Icon icon={mapIcon} ></Icon>
            <h1 className="h1-space mt-5">TEMUKAN</h1>
            <h1 className="h1">Tempat Vaksinasi Di Sekitarmu</h1>
            <p className="mt-6 text-grey max-w-screen-sm max-auto">
                Temukan tempat vaksinasi di sekitar tempat tinggalmu dengan mudah menggunakan website ini
            </p>
            <div className="flex gap-6 my-12">
                <div className="mapouter lg:max-w-2xl w-auto"><div className="gmap_canvas"><iframe title="vaksin location" className="gmap_iframe" width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=900&amp;height=400&amp;hl=en&amp;q=Majalengka&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.fnfgo.com/">FNF Go</a></div></div>
            </div>
        </div>
    )
}

export default Map
