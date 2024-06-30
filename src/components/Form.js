import { useState } from "react";



function Form ({ onAddItem }) {
    const [title, setTitle] = useState("");
  
  
  
    function handleSubmit(e){
        e.preventDefault();
        if(!title) return;
        const newitem = {
          id:  Date.now(),
          title,
          done: false,
        }
        onAddItem(newitem);
        setTitle("")
    }
    return(
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>ada yang perlu kamu catat gak?</h3>
        <input type="text" name="title" id="" 
          placeholder="isi catatan di sini yaaa"
          value={title}
          onChange={(e) => {
            console.log(e)
            setTitle(e.target.value)}
          }
          
  
        />
        <button>Add</button>
      </form>
    );
  } ;

  export default Form;