import { useState } from "react";
import Item from "./Item";


function Checklist ({ items,onDeleteItem,onToogleItem, onClearItems }){
    const [sortBy, setSortBy] = useState("Input");
  
  
    function sortItems() {
      switch (sortBy) {
        case "title":
          return items.slice().sort((a, b) => a.title.localeCompare(b.title));
        case "status":
          return items.slice().sort((a, b) => Number(a.done) - Number(b.done));
        case "input":
        default:
          return items;
      }
    }
  
    const sortedItems = sortItems();
    return(
      <div className="list">
          <ul>
              {sortedItems.map((item)=> (
                <Item key={item.id} 
                item={item} 
                onDeleteItem={onDeleteItem} 
                onToogleItem={onToogleItem}/>
              ))}
          </ul>
          <div className="actions">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="input">Urutkan berdasarkan input </option>
              <option value="title">Urutkan berdasarkan  judul</option>
              <option value="title">Urutkan berdasarkan  Status</option>
            </select>
            <button onClick={onClearItems}>Hapus</button>
          </div>
      </div>
    )
  }


  export default Checklist;