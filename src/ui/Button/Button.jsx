import React from 'react'

function Button({ text = "button", color = "white", bgColor = "black" }) {

    return (
        <button style={{ backgroundColor: bgColor, color: color }}>{text}</button>
    )
}

export default Button