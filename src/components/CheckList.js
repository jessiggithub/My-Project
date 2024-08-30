import react from 'react';
import '../stylesheets/CheckList.css';
import { FcDeleteRow } from "react-icons/fc";

function CheckList({ id, text, completed, completeTask, removeTask }) {
    return (
        <div className={completed ? 'list-container completed' : 'list-container'}>
          <div 
          className='list-text'
          onClick={() => completeTask(id)}>
            {text}
          </div>
          <div 
          className='list-container-icons'
          onClick={() => removeTask(id)}>
            <FcDeleteRow className='list-icon' />
          </div>
        </div>
    )
}

export default CheckList;