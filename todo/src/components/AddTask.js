import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo ,editTodo} from '../statemanagment/todosSlice';

export default function AddTask({ task, setTask }) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();

    if (task.id) {
      const updatedTask = {
        id: task.id,
        name: task.name,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      };
      dispatch(editTodo(updatedTask));
    } else {
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      };
      dispatch(addTodo(newTask));
    }
    setTask({ id: '', name: '', time: '' });
  };

  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name='task'
          value={task.name || ""}
          autoComplete='off'
          placeholder='Add Task'
          maxLength='25'
          onChange={e => setTask({ ...task, name: e.target.value })}
        />
        <button type='submit'>{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
}
