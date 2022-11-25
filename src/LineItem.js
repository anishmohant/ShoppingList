import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
const LineItem = ({item, handleDelete, handleCheck}) => {
  return (
      <li className='item' key={item.id}>
          <input onChange={() => handleCheck(item.id)} checked={item.checked} type="checkbox" />
          <label style={(item.checked) ? { textDecoration: 'line-through' } : null}
              onDoubleClick={() => handleCheck(item.id)} >{item.item}</label>
          <FaTrashAlt onClick={() => handleDelete(item.id)} role="button" tabIndex="0" />
      </li>
  )
}

export default LineItem