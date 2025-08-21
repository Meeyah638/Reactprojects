import React from 'react'
import { useState } from 'react'
import { FcEmptyTrash } from 'react-icons/fc'
import './Todo.css'
const Todo = () => {
    let [toDo, settoDo] = useState([])
    let [inputValue, setinputValue] = useState('')
    const changeValue = (e) => {
        setinputValue(e.target.value)
    }

    const addTask = () => {
        if (inputValue.trim() !== '') {
            settoDo([...toDo, inputValue])
            setinputValue('')
        }
        console.log([...toDo, inputValue])
        console.log(toDo)
    }
    const handleDelete = (del) => {
        const updatedList = toDo.filter((updated, index) => index !== del)
        settoDo(updatedList)
    }
    return (
        <div className='All-items'>
            <h1 style={{ textAlign: 'center' }}>TO-DO LIST</h1>
            <input type="text" value={inputValue} onChange={changeValue}
                placeholder='Add item e.g. Read my books' className='input-text' />
            <button onClick={addTask} className='add-task'>Add Task</button>
            <ul className='todolist'>
                {
                    toDo.map((item, id) => (
                        <div key={id} style={{
                            display: 'flex', flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <li style={{
                                listStyleType: 'none'
                            }}>{item}</li><FcEmptyTrash className='trash' size={30}
                                onClick={() => handleDelete(id)} />

                        </div>
                    ))
                }
            </ul>
        </div>
    )
}
export default Todo
