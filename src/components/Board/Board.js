import React, { useEffect, useState } from 'react';
import './Board.css';
import { useDispatch, useSelector } from 'react-redux';
import { GrAdd } from 'react-icons/gr';
import BoardItem from '../BoardItem/BoardItem';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import { fetchTasks } from '../../actions/task.action';
// import { fetchUser } from '../../api';

const Board = () => {
    const [taskModal, setTaskModal] = useState(false)
    const [newTask, setNewTask] = useState(false);
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);

    useEffect(() => {
        const getAllTasks = async () => {
            const error = await dispatch(fetchTasks());
            if (error) console.log(error);
        }
        getAllTasks();
    }, [dispatch]);
    // console.log(tasks);

    return (
        <div className='board'>
            <header className='board_head'>
                <h1 className='board_title'>TASKS <span>{tasks.length}</span></h1>
                <button onClick={(e) => {
                    setTaskModal(true);
                    setNewTask(true);
                }} className='head_btn'><GrAdd fontSize={'1.5rem'} /></button>
            </header>
            {taskModal && <NewTaskForm closeForm={setTaskModal} newTask={newTask} />}
            {!taskModal && tasks.map(task => {
                const itemInfo = {
                    task_id: task.id,
                    // user: task.assigned_user,
                    task_msg: task.task_msg,
                    task_date: task.task_date
                };
                return < BoardItem key={task.id} setNewTask={setNewTask} closeForm={setTaskModal} itemInfo={itemInfo} />
            })}
        </div>
    )
}

export default Board;