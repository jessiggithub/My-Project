import React, { useState } from 'react';
import CheckListForm from './CheckListForm';
import CheckList from './CheckList';
import '../stylesheets/ToDoList.css'; 

function ToDoList() {
  
  const [checkList, setCheckList] = useState([]);

  const addTask = newTask => {
    if (newTask.text.trim()) {
      newTask.text = newTask.text.trim();
      
      const updatedTasks = [newTask, ...checkList];
      setCheckList(updatedTasks);
    }
  }

  const removeTask = id => {
    const updatedTasks = checkList.filter(task => task.id !== id);
    setCheckList(updatedTasks);
  }

  const completeTask = id => {
    const updatedTasks = checkList.map(task => {
      if (task.id === id) {
       task.completed = !task.completed;
      }
      return task;
    });
    setCheckList(updatedTasks);
  }


  return (
    <>
    <CheckListForm  onSubmit={addTask}/>
    <div className='to-do-list-container'>
     {
      checkList.map((task) => (
        <CheckList
          key={task.id}
          id={task.id}
          text={task.text}
          completed={task.completed}
          completeTask={completeTask}
          removeTask={removeTask}
        />
      ))
     }
    </div>
    </>
  );
}

export default ToDoList;