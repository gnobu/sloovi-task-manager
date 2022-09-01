import React from 'react';
import './BoardItem.css';
import { useDispatch } from 'react-redux';
import { MdModeEditOutline, MdNotificationsPaused, MdDone } from 'react-icons/md';
import pic from '../../autogyro.jpg';
import { fetchTask } from '../../actions/singleTask.action';

const BoardItem = ({ closeForm, setNewTask, itemInfo}) => {

    const dispatch = useDispatch();
    const { task_id, task_msg, task_date } = itemInfo;

    async function editTask(e) {
        const error = await dispatch(fetchTask(task_id));
        if (error) console.log(error);
        setNewTask(false);
        closeForm(true);
    }

    return (
        <div className='board_item'>
            <div className="container">
                <div className='user_img'><img src={pic} alt='user pic' /></div>
                <div className='item_txt'>
                    <p className='item_desc'>
                        {task_msg.length > 13
                            ? task_msg.substring(0, 14) + "..."
                            : task_msg}
                    </p>
                    <p className='item_date'>{task_date}</p>
                </div>
                <button onClick={editTask} className='primary_btn btn_border'><MdModeEditOutline fontSize={'1.5rem'} /></button>
                <div className='btn_border'>
                    <button className='primary_btn'><MdNotificationsPaused fontSize={'1.5rem'} /></button>
                    <button className='primary_btn'><MdDone fontSize={'1.5rem'} /></button>
                </div>
            </div>
        </div>
    )
}

export default BoardItem