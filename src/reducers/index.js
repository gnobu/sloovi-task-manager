import { combineReducers } from "redux";

import tasks from './tasks.reducer';
import singleTask from './singleTask.reducer';

export default combineReducers({
    tasks,
    singleTask,
})