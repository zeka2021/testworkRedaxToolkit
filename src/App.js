import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {addTodo} from './store/todoSlice';

import TodoList from './component/TodoList';
import InputField from './component/InputField';

function App() {
 
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }))
    setText('');
  };
  
    return (
      <div className="container App">
        <InputField text={text} handleInput={setText} handleSubmit={addTask}/>
        <TodoList  />
      </div>
    );
  }

export default App;
