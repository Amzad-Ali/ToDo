import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './statemanagment/Store';
import './components/style.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';

const App = () => {
  const [task, setTask] = useState({ id: '', name: '', time: '' });

  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <AddTask task={task} setTask={setTask} />
        <ShowTask setTask={setTask} />
      </div>
    </Provider>
  );
};

export default App;
