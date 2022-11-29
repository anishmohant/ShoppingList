import ItemList from './ItemList'

const Contents = ({handleCheck, handleDelete, items}) => {
   
    return (
        <>
            {items.length?(
                <ItemList items={items} handleDelete={handleDelete} handleCheck={handleCheck}/>
            ):(<p>Empty</p>)}
        </>
    ) 
}

export default Contents