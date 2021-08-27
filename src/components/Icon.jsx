import React from 'react'


function Icon({icon, type}) {
    let style = type === 'round' 
    ? { backgroundImage: `url(${icon})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPositionY: 'center', borderRadius: '100px', backgroundColor: '#BFDEF6'} 
    : {backgroundImage: `url(${icon})`, backgroundSize: 'cover'}

    return (
        <div className="w-10 h-10 rounded-lg" style={style}>

        </div>
    )
}

export default Icon
