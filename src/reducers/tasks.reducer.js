const initialState = [];


const tasks = (tasks = initialState, action) => {
    switch (action.type) {
        case "tasks/FETCH_TASKS":
            return action.payload;
        case "tasks/ADD_TASK":
            return [...tasks, action.payload];
        default:
            return tasks;
    }
}

export default tasks;