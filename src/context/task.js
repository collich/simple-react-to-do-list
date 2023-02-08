import { createContext } from "react";

const TaskTodo = createContext

const Provider = ({ children }) => {

    return (
        <TaskTodo.Provider>
            {children}
        </TaskTodo.Provider>
    )
}

export { Provider }
export default TaskTodo