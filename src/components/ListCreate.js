import { useState } from "react"

const ListCreate = ({ onSubmit }) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(title, description)
        setTitle('')
        setDescription('')
    }

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)

    }
    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    return (
        <div className="book-create">
            <form onSubmit={handleSubmit}>
                <h3>Title</h3>
                <input className="input" placeholder="What is the title of the list?" onChange={handleChangeTitle} value={title}></input>
                <h3>Description</h3>
                <input className="input" placeholder="What is the description of the task?" onChange={handleChangeDescription} value={description}></input>
                <button className="button">Submit</button>
            </form>
        </div>
    )
}

export default ListCreate