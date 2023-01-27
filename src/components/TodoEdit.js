import { useState } from "react"

const TodoEdit = ({ list, editState }) => {
    const [title, setTitle] = useState(list.title)
    const [description, setDescription] = useState(list.description)

    const handleSubmit = (e) => {
        e.preventDefault()
        editState(list.id, title, description)
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleTitleChange} value={title}></input>
                <input onChange={handleDescriptionChange} value={description}></input>
                <button>Save</button>
            </form>
        </div>
    )
}

export default TodoEdit