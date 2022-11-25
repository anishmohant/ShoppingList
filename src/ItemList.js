import React from 'react'

import LineItem from './LineItem'
const ItemList = ({handleCheck, handleDelete, items}) => {
  return (
      <ul>
          {items?.map((item) => (
              <LineItem key={item.id} item={item} handleDelete={handleDelete} handleCheck={handleCheck}/>
            // <>sads</>
          ))}
      </ul>
  )
}

export default ItemList