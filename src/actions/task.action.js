import * as api from '../api';

export const addTask = (taskData) => async (dispatch) => {
    try {
        const { data } = await api.addTask(taskData);

        dispatch({ type: 'tasks/ADD_TASK', payload: data.results });
    } catch (error) {
        console.log(error);
    }
}

export const fetchTasks = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTasks();

        dispatch({ type: 'tasks/FETCH_TASKS', payload: data.results });
    } catch (error) {
        return error;
    }
}