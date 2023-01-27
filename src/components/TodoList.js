import TodoShow from "./TodoShow"

const TodoList = ({lists}) => {
    const renderTodo = lists.map(list => {
        return <TodoShow key={list.id} list={list}/>
    })

    return (
        <div>
            {renderTodo}
        </div>
    )
}

export default TodoList