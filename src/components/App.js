import axios from 'axios'
import { useState, useEffect } from 'react'
import ListCreate from './ListCreate'
import TodoList from './TodoList'

const App = () => {
    const [list, setList] = useState([])

    const getLists = async () => {
       const response = await axios.get("http://localhost:3001/lists")

       setList(response.data)
    }

    useEffect(() => {
        getLists()
    }, [])
    


    const handleCreate = async (title, description) => {
        const response = await axios.post("http://localhost:3001/lists", {
            title,
            description
        })
        
        const updatedList = [
            ...list,
            response.data
        ]
        setList(updatedList)

        // const updatedList = [
        //     ...list,
        //     {id: (list.length === 0 ? 1: list.length + 1) ,title, description}
        // ]
        // setList(updatedList)
    }

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3001/lists/${id}`)

        const deleteList = list.filter(li => {
            return id !== li.id
        })
        setList(deleteList)
    }

    const handleEdit = async (id, title, description) => {
        const response = await axios.put(`http://localhost:3001/lists/${id}`, {
            title,
            description
        })

        const updatedTodo = list.map(li => {
            if (li.id === id) {
                return {...li, ...response.data}
            }
            return li
        })

        setList(updatedTodo)
    }

    return (
        <div>
            <ListCreate onSubmit={handleCreate}/>
            
            <TodoList lists={list} 
            onDelete={handleDelete} 
            onEdit={handleEdit}/>
        </div>
    )
}

export default App
