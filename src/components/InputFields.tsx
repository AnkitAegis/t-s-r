import React from 'react'
import "./styles.css"

type Props = {
    todo:string
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e: React.FormEvent)=>void
}
const InputFields: React.FC<Props> = ({todo,setTodo,handleAdd}) => {
    
    return (
        <form className='input' onSubmit={handleAdd}>
            <input 
            type='text' 
            value={todo} 
            placeholder='Enter your task' 
            className='input_box' 
            onChange={(e)=>setTodo(e.target.value)}
            />
            <button type='submit' className='input_submit'>Go</button>
        </form>
    )
}

export default InputFields