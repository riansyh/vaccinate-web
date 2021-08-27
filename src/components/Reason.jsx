import React from 'react'
import Icon from './Icon'
import askIcon from './../img/ask.png'
import CardReason from './CardReason'
import reasons from '../script/reasons'

function Reason() {
    const cardList = reasons.map((reason => 
        <CardReason key={reason.key} icon={reason.icon} title={reason.title} content={reason.content} />
    ))

    return (
        <div className="p-10 lg:p-20 flex flex-col items-center">
            <Icon icon={askIcon} ></Icon>
            <h1 className="h1-space mt-5" >KENAPA KAMU</h1>
            <h1 className="h1">Harus Vaksinasi</h1>
            <p className="mt-6 text-grey max-w-screen-sm max-auto">
                Dapatkan banyak keuntungan ketika kamu sudah mendapatkan vaksin COVID-19, diantaranya adalah:
            </p>
            <div className="flex gap-6 my-12 flex-wrap items-center justify-center">
                {cardList}
            </div>
        </div>
    )
}

export default Reason
