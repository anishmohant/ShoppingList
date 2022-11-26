import React from 'react'
import { FaPlus } from 'react-icons/fa'
const AddItem = ({newItem,setNewItem, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label  htmlFor="addItem">Add Item</label>
        <input autoFocus  type="text" placeholder='Add Item' value={newItem} required name="" id=""  onChange={(e) => setNewItem(e.target.value)} />
        <button type='submit' aria-label='Add Item'><FaPlus/></button>
    </form>
  )
}

export default AddItem