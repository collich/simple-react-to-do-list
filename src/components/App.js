import { useState } from 'react'
import ListCreate from './ListCreate'
import TodoList from './TodoList'

const App = () => {
    const [list, setList] = useState([])


    const handleCreate = (title, description) => {
        const updatedList = [
            ...list,
            {id: (list.length === 0 ? 1: list.length + 1) ,title, description}
        ]
        setList(updatedList)
    }

    const handleDelete = (id) => {
        const deleteList = list.filter(li => {
            return id !== li.id
        })
        setList(deleteList)
    }

    const handleEdit = (id, title, description) => {
        const updatedTodo = list.map(li => {
            if (li.id === id) {
                return {...li, title, description}
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
