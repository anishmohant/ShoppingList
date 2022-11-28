
import Contents from './Contents';
import SearchItem from './SearchItem';
import Footer from './Footer';
import './Header'
import Header from './Header';
import AddItem from './AddItem';
import React, { useState } from 'react'


function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')))

  const [newItem, setNewItem] = useState('')

  const [search, setSearch] = useState('')

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
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setAndSaveItems(listItems)
  }
  return (
    <div className="App">
      <Header title="Grocery" />
      <AddItem handleSubmit={handleSubmit} newItem={newItem} setNewItem={setNewItem} />
      <SearchItem search={search} setSearch={setSearch} />
      <Contents
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        setItems={setItems} 
        items={items.filter(
          item => (
            (item.item).toLowerCase().includes(search.toLocaleLowerCase())
            )
          )}
        />
      <Footer length={items.length} />
    </div>
  );


}

export default App;
