
import Contents from './Contents';
import Footer from './Footer';
import './Header'
import Header from './Header';
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
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ?                        //if
        { ...item, checked: !item.checked } :   //true
        item                                //else
    );
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
  }
  return (
    <div className="App">
      <Header title="Grocery" />
      <Contents handleCheck={handleCheck} handleDelete={handleDelete} items={items} setItems={setItems}/>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
