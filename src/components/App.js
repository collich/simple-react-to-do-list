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

    return (
        <div>
            <ListCreate onSubmit={handleCreate}/>
            <TodoList lists={list}/>
        </div>
    )
}

export default App
