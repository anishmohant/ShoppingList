import ItemList from './ItemList'

const Contents = ({handleCheck, handleDelete, items}) => {
   
    return (
        <main>
            {items.length?(
                <ItemList items={items} handleDelete={handleDelete} handleCheck={handleCheck}/>
            ):(<p>Empty</p>)}
        </main>
    ) 
}

export default Contents