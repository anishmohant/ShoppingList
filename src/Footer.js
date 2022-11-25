import React from 'react'

const Footer = ({length}) => {
    return (
        <footer>
            <p>{length} {length!==1?'Items':"Item"}</p>
        </footer>
    )
}

export default Footer