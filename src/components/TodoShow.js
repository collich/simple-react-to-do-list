import { useState } from "react"

const TodoShow = ({ list, onDelete }) => {

    const handleClickDelete = () => {
        onDelete(list.id)
    }

    return (
        <div  className="book-show">
            <h2>{list.id}. {list.title}</h2>
            <p>{list.description}</p>
            <div className="actions">
                <button className="edit">
                    Edit</button>

                <button className="delete" onClick={handleClickDelete}>
                    Delete</button>
            </div>
        </div>
    )
}

export default TodoShow