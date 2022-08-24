// Write your code here

import './index.css'

const TodoItem = props => {
  const {onDeleteTodo, todoDetails} = props
  const {id, title} = todoDetails

  const deleteTodo = () => {
    onDeleteTodo(id)
  }

  return (
    <li className="item-container">
      <p className="todo-name">{title}</p>
      <button type="button" className="delete-button" onClick={deleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
