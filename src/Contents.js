import React, { useState } from 'react'

const Contents = () => {

    const [name, setName] = useState("Intial Name")
    const handleNameChange = () => {
        const names = ["bob", "lal", "skop"]
        const int = Math.floor(Math.random() * 3)
        setName(names[int])
    }
    const handleClick = () => { console.log("clicked") }
    const handleClick2 = (name) => { console.log(`${name} was clicked`) }
    const handleClick3 = (e) => { console.log(e) }
    return (
        <main>
            <p>
                Contents
                Hello {name}

            </p>
            <button onClick={handleNameChange}>chaneg it</button>
            <button onClick={()=> handleClick2("dafe")}>name</button>
            <button onClick={(e) => handleClick3(e)}>name</button>
        </main>
    )
}

export default Contents