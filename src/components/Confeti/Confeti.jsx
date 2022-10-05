import React from 'react'
import Confetti from 'react-confetti'

function Confeti() {
    const width = document.documentElement.clientWidth
    const height = document.documentElement.clientHeight
    return (
        <Confetti
            width={width}
            height={height}
        />
    )
}

export default Confeti