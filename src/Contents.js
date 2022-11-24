import React, { useState } from 'react'
import {FaTrashAlt} from  'react-icons/fa'

const Contents = () => {


    const initItems = [
        {
            id: 1,
            checked: true,
            item: "One half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: false,
            item: "Item 2"
        },
        {
            id: 3,
            checked: false,
            item: "Item 3"
        }
    ]
    const [items, setItems] = useState(initItems)
    const handleCheck = (id) => { 
        const listItems = items.map((item) => 
            item.id === id ?                        //if
                {...item,checked: !item.checked}:   //true
                item                                //else
        );
        setItems(listItems)
        localStorage.setItem('shoppinglist',JSON.stringify(listItems))
    }
    const handleDelete = (id) => { 
        const listItems = items.filter((item) => item.id!==id)
        setItems(listItems)
        localStorage.setItem('shoppinglist', JSON.stringify(listItems))
    }




    return (
        <main>
            {items.length?(
                <ul>
                    {items.map((item) => (
                        <li className='item' key={item.id}>
                            <input onChange={() => handleCheck(item.id)} checked={item.checked} type="checkbox" />
                            <label style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)} >{item.item}</label>
                            <FaTrashAlt onClick={() => handleDelete(item.id)} role="button" tabIndex="0" />
                        </li>


                    ))}
                </ul>
            ):(<p>Empty</p>)}
        </main>
    ) 
}

export default Contents