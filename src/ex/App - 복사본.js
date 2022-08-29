import imgA from './i16186153027.png';
import styles from "./App.module.css";
import Button from "./Button.js";
import { useState, useEffect } from "react";


function App() {
  //console.log("I RUN ONLY ALWAYS")

  const [counter, setcounter] = useState(0);
  const [keyword, setkeyword] = useState("");
  const onClick = () => {
    setcounter((prev)=>prev+1);
  }
  const onChange = (event) =>{
    setkeyword(event.target.value);
  }
 
  useEffect( ()=> {
    console.log("I RUN ONLY ONCE");
  },[]);
  // useEffect 는 함수가 한 번만 실행되도록 설정해준다.
  useEffect( ()=> {
    console.log("I RUN CHANGE KEYWORD", keyword);
  }, [keyword]);

  useEffect( ()=> {
    console.log("I RUN CHANGE COUNTER", counter);
  }, [counter]);


  return (
    <div>
      <input
        value={keyword}
        type="text"
        placeholder='Search here...'
        onChange={onChange}
      />
      <h1>{counter}</h1>
      <Button text={"Click Me !!!"}
       onClick={onClick}
      />
    </div>
  );
}

export default App;
