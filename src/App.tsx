import InputFields from 'components/InputFields';
import { Todo } from 'Model';
import React, {useState} from 'react';
import './App.css';

const App: React.FC = () => {
  const [todo,setTodo] = useState<string>("");
  const [data,setData] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent)=>{
    e.preventDefault();

    let id:number = Math.random()*100;
    if(todo==""){
      return alert("Enter a todo");
    }
    let temp = {id,todo,isDone:false};
    setData([...data,temp]);
    setTodo("");
  }
  return (
    <div className="App">
      <header>TaskFolk</header>
      <InputFields todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
