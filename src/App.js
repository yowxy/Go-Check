import { useState } from "react";
import Logo from "./components/logo";
import Form from "./components/Form";
import Checklist from "./components/Checklist";
import Stats from "./components/Stats";
// const  listItemms = [
//   {id:1 ,title:"Eat", done:"true"},
//   {id:2 ,title:"Hungry", done:"false"},
// ];


function App() {
    const [listItems, setListItems] = useState([]);
    function handleItem (item){
      setListItems((listItems) => [...listItems,item]);
    }

    function handleDeleteitem(id){
      setListItems((listItems) => listItems.filter((item) => item.id !== id));
    }

    function  handleToogleItem (id){
        setListItems((listItems)=>{
          return listItems.map((item)=>{
            if(item.id === id) {
                return{
                  ...item,
                  done: !item.done,
                };
            }
            return item;
          })
        })
    }

    function handleClearitems (){
      const confirm = window.confirm("yakin ingin menghapus item ini?")
      if(confirm){
        setListItems([]);
      }
    }

  return(
        <div className="app">
          <Logo/>
          <Form onAddItem ={handleItem}/>
          <Checklist items={listItems} 

          onDeleteItem={handleDeleteitem} 

          onToogleItem={handleToogleItem} 

          onClearItems={handleClearitems}/>

          <Stats items ={listItems}/>
        </div>
  )
}







export default App;
