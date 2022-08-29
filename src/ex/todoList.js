//
// 이거 보고 싶으면 파일면 App.js 로 바꾸고 실행해
//
import {useState, useEffect} from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event)=>{
    setTodo(event.target.value);
  }
  const onSubmit = (event)=>{
    event.preventDefault();
    if (todo ===""){
      return ;
    } else{
      setTodos((currentArray) => [todo, ...currentArray]);
    }
    setTodo("");
  }

  return (
    <div className="App">
      <h1>My To Do List ({todos.length})</h1>
      <form  onSubmit={onSubmit}>
        <input
          onChange={onChange} 
          value={todo}
          type= "text"
          placeholder="Write your to do..."
        />
        <button 
          type="submit"
        >Add To Do</button>
      </form>
      <hr/>
      <ul>
        {todos.map((item, index)=>
          <li key={index}>{item}</li>)
        }
      </ul>      
    </div>
  );
}

export default App;
