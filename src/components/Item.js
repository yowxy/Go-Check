

function Item ({ item,onDeleteItem,onToogleItem }){
    return(
      <li>
                <input type="checkbox" value={item.done} onChange={() => onToogleItem(item.id)} />
                <span style={{
                  textDecoration: item.done ? "line-through" : ""  
                }}>{item.title}</span>
                <button onClick={()=> onDeleteItem(item.id)} >❌</button>
       </li>
    )
  }


  export default Item;