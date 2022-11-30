
import Contents from './Contents';
import SearchItem from './SearchItem';
import Footer from './Footer';
import './Header'
import Header from './Header';
import AddItem from './AddItem';
import React, { useEffect, useState } from 'react'
import apiRequest from './apiRequest';


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

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ?                        //if
        { ...item, checked: !item.checked } :   //true
        item                                //else
    );
    setItems(listItems)
    const myItem = listItems.filter(item => item.id === id)
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked:myItem[0].checked})
    }
    const reqUrl= `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl,updateOptions)
    if (result) setFetchError(result)
  }

  const handleDelete =  async (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    const deleteOptions =  {
      method:'DELETE'
    }
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions)
    if (result) setFetchError(result)

  }


  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = { id, checked: false, item }
    const listItems = [...items, myNewItem]
    setItems(listItems)
    const postOptions = {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions)
    console.log('s')
    if (result) setFetchError(result)
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
