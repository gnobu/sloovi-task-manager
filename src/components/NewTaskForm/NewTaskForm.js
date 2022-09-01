import React, { useEffect, useRef, useState } from 'react';
import './NewTaskForm.css';

const NewTaskForm = ({ closeForm }) => {
    const [minTime, setMinTime] = useState()
    const form = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(form.current.desc.value);
        console.log(form.current.date.value);
        console.log(form.current.time.value);
        console.log(form.current.person.value);
    }

    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }
    
    useEffect(() => {
        function getMinTime() {
            const d = new Date();
            let h = addZero(d.getHours());
            let m = addZero(d.getMinutes());
            let time = h + ":" + m;
            return time;
        }
        setMinTime(getMinTime());
    }, [setMinTime])

    return (
        <form className='new-task' onSubmit={handleSubmit} ref={form}>
            <div className='form-control'>
                <label htmlFor="desc">Task Description</label>
                <input id='desc' type='text' required />
            </div>

            <div className='form-flex'>
                <div className='form-control'>
                    <label htmlFor="date">Date</label>
                    <input id='date' type='date' required />
                </div>

                <div className='form-control'>
                    <label htmlFor="time" > Time</label >
                    <input id='time' type='time' min={minTime} required />
                </div>
            </div>

            <div className='form-control'>
                <label htmlFor="person" > Assign User</label >
                <select name="person" id="person">
                    <option value="prem-kumar">Prem Kumar</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>

            <div className='form-flex'>
                <button type='button' onClick={(e) => { closeForm(false) }} className='form-btn ghost'>Cancel</button>
                <button type='submit' className='form-btn fill'>Save</button>
            </div>
        </form >
    )
}

export default NewTaskForm;