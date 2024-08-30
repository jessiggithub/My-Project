import React, { useState } from "react";
import '../stylesheets/CheckListForm.css';
import { v4 as uuidv4 } from 'uuid';

function CheckListForm(props) {

  const [input, setInput] = useState('');

  const handleOnChange = (event) => {
    setInput(event.target.value);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    };

    props.onSubmit(newTask);
    }
  

  return (
    <form className="checklist-form"
    onSubmit={handleOnSubmit}>
        <input
            type="text"
            className="checklist-input"
            placeholder="Add a task"
            name="text"
            onChange={handleOnChange}
        />
        <button type="submit" className="checklist-button">
            Add 
        </button>
    </form>
  );
}

export default CheckListForm;