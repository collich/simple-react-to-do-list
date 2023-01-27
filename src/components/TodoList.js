import TodoShow from "./TodoShow"

const TodoList = ({lists, onDelete}) => {
    const renderTodo = lists.map(list => {
        return <TodoShow key={list.id} list={list} onDelete={onDelete}/>
    })

    return (
        <div className="book-list">
            {renderTodo}
        </div>
    )
}

export default TodoList