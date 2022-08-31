import React from 'react';
import './BoardItem.css';
import { MdModeEditOutline, MdNotificationsPaused, MdDone } from 'react-icons/md';
import pic from '../../autogyro.jpg';

const BoardItem = () => {
    return (
        <div className='board_item'>
            <div className="container">
                <div className='user_img'><img src={pic} alt='user pic' /></div>
                <div className='item_txt'>
                    <p className='item_desc'>Follow up</p>
                    <p className='item_date'>12/09/2012</p>
                </div>
                <button className='primary_btn btn_border'><MdModeEditOutline fontSize={'1.5rem'}/></button>
                <div className='btn_border'>
                    <button className='primary_btn'><MdNotificationsPaused fontSize={'1.5rem'}/></button>
                    <button className='primary_btn'><MdDone fontSize={'1.5rem'}/></button>
                </div>
            </div>
        </div>
    )
}

export default BoardItem