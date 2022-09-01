import * as api from '../api';

export const fetchTask = (taskId) => async (dispatch) => {
    try {
        const { data } = await api.fetchTask(taskId);

        dispatch({ type: 'singleTask/FETCH_TASK', payload: data.results });
    } catch (error) {
        console.log(error);
        return (error);
    }
}
export const updateTask = (taskId, taskData) => async (dispatch) => {
    try {
        const { data } = await api.updateTask(taskId, taskData);
        // console.log(data.results);

        dispatch({ type: 'singleTask/update_TASK', payload: data.results });
    } catch (error) {
        console.log(error);
        return (error);
    }
}

export const removeTask = () => async (dispatch) => {
    dispatch({ type: 'singleTask/REMOVE_TASK' });
}