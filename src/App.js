import React, {useState} from "react";

function App() {

  const [inputText, setIputText] = useState("");
  const [doItems, setDoItems] = useState([]);


  function handleChange(event){
    const newValue = event.target.value;
    setIputText(newValue);
  }
    function addItem(){
      setDoItems((preValue)=>{
        return [...preValue, inputText]
      });
      setIputText("");
    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
         {doItems.map((todoItem) => {
            return (
              <li>{todoItem}</li>
            )
         } )}
        </ul>
      </div>
    </div>
  );
}

export default App;
