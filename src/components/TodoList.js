import React from 'react'
import Todo from './Todo'

function TodoList({todos, setTodos, filteredTodos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
            {filteredTodos.map(todo => {

            return <Todo text={todo.text} 
                         id={todo.id} 
                         key={todo.id} 
                         setTodos={setTodos}
                         todos={todos}
                         todo={todo}
                    />
            })}
               
            </ul>
        </div>
    )
}

export default TodoList
