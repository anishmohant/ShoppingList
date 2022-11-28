import React from 'react'

const SearchItem = ({search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='search'> Search</label>
        <input onChange={(e)=>setSearch(e.currentTarget.value )} value={search} role="searchbox" type="text" name="" id="search" placeholder='Search Items' />
        
        
        </form >
  )
}

export default SearchItem