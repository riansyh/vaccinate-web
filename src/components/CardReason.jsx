import React from 'react'
import Icon from './Icon'

function CardReason({icon, title, content}) {
    return (
        <div className="flex flex-col px-5 py-8 gap-6 items-center shadow-blueDefault hover:shadow-blueHover transition-all w-64 bg-pureWhite rounded-xl duration-700">
            <Icon icon={icon} type="round"></Icon>
            <div>
                <h2 className="text-left font-bold text-xl" >{title}</h2>
                <p className="text-left mt-2 text-sm text-grey" >{content}</p>
            </div>
        </div>
    )
}

export default CardReason
