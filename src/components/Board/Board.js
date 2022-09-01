import React, { useState } from 'react';
import './Board.css';
import { GrAdd } from 'react-icons/gr';
import BoardItem from '../BoardItem/BoardItem';
import NewTaskForm from '../NewTaskForm/NewTaskForm';

const Board = () => {
    const [newTask, setNewTask] = useState(false);

    return (
        <div className='board'>
            <header className='board_head'>
                <h1 className='board_title'>TASKS <span>0</span></h1>
                <button onClick={(e) => {setNewTask(true)}} className='head_btn'><GrAdd fontSize={'1.5rem'}/></button>
            </header>
            {newTask && <NewTaskForm closeForm={setNewTask}/>}
            {!newTask && <BoardItem/>}
        </div>
    )
}

export default Board;