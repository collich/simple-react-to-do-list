import { useState } from 'react'
import ListCreate from './ListCreate'

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
        </div>
    )
}

export default App
