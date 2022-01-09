import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import Todo from '../Todo';
import todosActions from '../../redux/todos/todos-actions';
import { getVisibleTodos } from '../../redux/todos/todos-selectors';
import './TodoList.scss';




const TodoList = () => {
  const todos = useSelector(getVisibleTodos);
  const dispatch = useDispatch();

  const onDeleteTodo = (id) => dispatch(todosActions.deleteTodo(id));
  const onToggleCompleted = (id) => dispatch(todosActions.toggleCompleted(id));

  return (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={()=>onToggleCompleted(id)}
          onDelete={()=>onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
)
};



// const mapStateToProps = ({ todos: { items, filter } }) => ({
//   todos: getVisibleTodos(items, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteTodo: id => dispatch(todosActions.deleteTodo(id)),
//   onToggleCompleted: id => dispatch(todosActions.toggleCompleted(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoList;
