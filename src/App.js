
import Contents from './Contents';
import SearchItem from './SearchItem';
import Footer from './Footer';
import './Header'
import Header from './Header';
import AddItem from './AddItem';
import React, { useEffect, useState } from 'react'


function App() {
  const API_URL = 'http://localhost:3500/items'
  const [isLoading, setIsLoading] = useState(true)

  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')
  const [fetchError, setFetchError] = useState(null)
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw Error("Could not connect ")
        const listItems = await response.json()
        console.log(listItems)
        setItems(listItems)
        setFetchError(null)
      } catch (error) {
        setFetchError(error.message)
      }
      finally{
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      
      (async () => await fetchItems())();
    }, 2000 );
  }, [])


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
    setItems(listItems)
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)

  }


  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setItems(listItems)
  }
  return (
    <div className="App">
      <Header title="Grocery" />
      <AddItem handleSubmit={handleSubmit} newItem={newItem} setNewItem={setNewItem} />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p style={{ color: 'red' }}>{`Error : ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Contents
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          setItems={setItems}
          items={items.filter(
            item => (
              (item.item).toLowerCase().includes(search.toLocaleLowerCase())
            )
          )}
        />}
      </main>
      <Footer length={items.length} />
    </div>
  );


}

export default App;
