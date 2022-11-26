
import Contents from './Contents';
import Footer from './Footer';
import './Header'
import Header from './Header';
import AddItem from './AddItem';
import React, { useState } from 'react'


function App() {

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
  const [newItem, setNewItem] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return
    addItem(newItem)
    setNewItem('')
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ?                        //if
        { ...item, checked: !item.checked } :   //true
        item                                //else
    );
    setAndSaveItems(listItems)
   }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setAndSaveItems(listItems)

  }
  const setAndSaveItems = (newItems) => { 
    setItems(newItems)
    localStorage.setItem('shoppinglist', JSON.stringify(newItems))
   }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {id, checked:false, item}
    const listItems = [...items,myNewItem]
    setAndSaveItems(listItems)
  }
  return (
    <div className="App">
      <Header title="Grocery" />
      <AddItem handleSubmit={handleSubmit} newItem={newItem} setNewItem={setNewItem} />
      <Contents handleCheck={handleCheck} handleDelete={handleDelete} items={items} setItems={setItems} />
      <Footer length={items.length} />
    </div>
  );


}

export default App;
