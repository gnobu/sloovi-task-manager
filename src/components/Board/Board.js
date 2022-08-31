import React from 'react';
import './Board.css';
import { GrAdd } from 'react-icons/gr';
import BoardItem from '../BoardItem/BoardItem';

const Board = () => {
    return (
        <div className='board'>
            <header className='board_head'>
                <h1 className='board_title'>TASKS <span>0</span></h1>
                <button className='head_btn'><GrAdd fontSize={'1.5rem'}/></button>
            </header>
            <BoardItem/>
        </div>
    )
}

export default Board;