import React from 'react'

function Button({children, type, link}) {
    let style;
    switch (type) {
        case 'secondary':
            style = "border-blue-normal border-2 hover:bg-blue-light hover:text-white transition-all px-6 py-3 rounded-lg font-bold text-blue-normal duration-500"
            break
        default:
            style = "bg-gradient-to-r from-blue-light to-blue-normal hover:bg-blue-light transition-colors px-6 py-3 rounded-lg font-bold text-white duration-500"
            break;
    }

    return (
        <button className={style}>
            <a href={link}>{children}</a>
        </button>
    )
}

export default Button
