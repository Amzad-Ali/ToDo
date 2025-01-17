import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { deleteTodo, clearTodos } from '../todosSlice';
import { deleteTodo,clearTodos } from '../statemanagment/todosSlice';

export default function ShowTask({ setTask }) {
  const taskList = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    const selectedTask = taskList.find(todo => todo.id === id);
    setTask(selectedTask);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleClearAll = () => {
    dispatch(clearTodos());
  };

  return (
    <section className='showTask'>
      <div className="head">
        <div>
          <span className='title'>Todo</span>
          <span className='count'>{taskList.length}</span>
        </div>
        <button onClick={handleClearAll} className='clearAll'>Clear All</button>
      </div>
      <ul>
        {taskList.map((todo) => {
          return (
            <li key={todo.id}>
              <p>
                <span className='name'>{todo.name}</span>
                <span className='time'>{todo.time}</span>
              </p>
              <i onClick={() => handleEdit(todo.id)} className='bi bi-pencil-square'></i>
              <i onClick={() => handleDelete(todo.id)} className='bi bi-trash'></i>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
