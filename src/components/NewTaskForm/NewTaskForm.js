import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImBin } from 'react-icons/im';
import { updateTask } from '../../actions/singleTask.action';
import { addTask, fetchTasks } from '../../actions/task.action';
import { addZero, getCurrentTimezone, timeInFormat, timeInSecs } from '../config/taskLogic';
import './NewTaskForm.css';
import { deleteTask } from '../../api';

const NewTaskForm = ({ newTask, closeForm }) => {
    const dispatch = useDispatch();
    const { task_msg, task_date, task_time, id } = useSelector(state => state.singleTask);

    const [minTime, setMinTime] = useState();
    const [minDate, setMinDate] = useState();
    const [desc, setDesc] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    // const [person, setPerson] = useState('');

    useEffect(() => {
        const timeFormat = timeInFormat(task_time);
        // console.log(newTask);
        if (!newTask) {
            task_msg && setDesc(task_msg);
            task_date && setDate(task_date);
            timeFormat && setTime(timeFormat);
        }
    }, [newTask, task_time, task_date, task_msg])

    useEffect(() => {
        function getMinTime() {
            const d = new Date();
            let h = addZero(d.getHours());
            let m = addZero(d.getMinutes());
            let time = h + ":" + m;
            return time;
        }
        setMinTime(getMinTime());

        function getMinDate() {
            const d = new Date();
            let date = `${d.getFullYear()}-${addZero(d.getMonth())}-${addZero(d.getDate())}`;
            // console.log(date);
            return date;
        }
        setMinDate(getMinDate());
    }, [setMinTime, setMinDate])

    async function handleSubmit(e) {
        e.preventDefault();
        const taskData = {
            task_date: date,
            task_time: timeInSecs(time),
            time_zone: getCurrentTimezone(),
            task_msg: desc
        }
        if (newTask) {
            dispatch(addTask(taskData));
        } else {
            dispatch(updateTask(id, taskData));
        }
        
        const error = await dispatch(fetchTasks());
        if (error) console.log(error);
        closeForm(false);
    }

    async function handleDeleteTask(e) {
        try {
            await deleteTask(id);
            const error = await dispatch(fetchTasks());
            if (error) console.log(error);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form className='new-task' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor="desc">Task Description</label>
                <input id='desc' value={desc} onChange={(e) => { setDesc(e.target.value) }} type='text' required />
            </div>

            <div className='form-flex'>
                <div className='form-control'>
                    <label htmlFor="date">Date</label>
                    <input id='date' value={date} onChange={(e) => { setDate(e.target.value) }} type='date' min={minDate} required />
                </div>

                <div className='form-control'>
                    <label htmlFor="time" > Time</label >
                    <input id='time' value={time} onChange={(e) => { setTime(e.target.value) }} type='time' min={minTime} required />
                </div>
            </div>

            <div className='form-control'>
                <label htmlFor="person" > Assign User</label >
                <select name="person" id="person">
                    <option value="prem-kumar">Prem Kumar</option>
                </select>
            </div>

            <div className='form-flex'>
                {!newTask && <button type='submit' onClick={handleDeleteTask} className='delete_btn'><ImBin fontSize={'1rem'} /></button>}
                <button type='button' onClick={(e) => {
                    closeForm(false);
                    
                }}
                    className='form-btn ghost'>Cancel
                </button>
                <button type='submit' className='form-btn fill'>Save</button>
            </div>
        </form >
    )
}

export default NewTaskForm;