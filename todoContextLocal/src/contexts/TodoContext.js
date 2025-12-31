import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            text: "Todo msg",
            completed: false,
        }
        
    ],
    addTodo: (todo) => {},
    updateTodo: (id, text) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {},
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;
