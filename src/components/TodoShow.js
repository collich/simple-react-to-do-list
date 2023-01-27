import { useState } from "react"
import TodoEdit from "./TodoEdit"

const TodoShow = ({ list, onDelete, onEdit }) => {
    const [editState, setEditState] = useState(false)

    const handleClickDelete = () => {
        onDelete(list.id)
    }

    // Just pass down this button instead of repeating yourself 4Head
    const handleClickEdit = (id, title, description) => {
        const letState = editState ? false: true;
        setEditState(letState)
        onEdit(id, title, description)
    }

    let content = editState ? <TodoEdit list={list} editState={handleClickEdit}/>:<div><div>{list.id}. {list.title}</div><p>{list.description}</p>
    

</div>

    return (
        <div  className="book-show">
            {content}
            <div className="actions">
                <button className="edit" onClick={handleClickEdit}>
                    Edit</button>

                <button className="delete" onClick={handleClickDelete}>
                    Delete</button>
            </div>
        </div>
    )
}

export default TodoShow