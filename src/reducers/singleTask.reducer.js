const initialState = {};
    // assigned_user: "user_4ee4cf67ad474a27988bc0afb84cf472",
    // task_date: "2022-10-08",
    // task_time: 9900,
    // is_completed: 0,
    // time_zone: 5280,
    // task_msg: "watching tv",
    // inbox_type: "future",
    // task_date_time_in_utc: "2022-10-08T04:13:00",
    // inbox_display_date: "2022-10-08",
    // est_closed: "2022-10-08T04:13:00",
    // task_date_time_in_utc_string: "2022-10-08 04:13:00",
    // task_date_time_offset: 15180,
    // type_3: "pull",
    // lead_id: "lead_465c14d0e99e4972b6b21ffecf3dd691",
    // modified_by: "user_4ee4cf67ad474a27988bc0afb84cf472",
    // modified: "2022-09-01T06:46:51.856915",
    // status: 1,
    // is_delete: 0,
    // is_archived: 0,
    // is_shared: 1,
    // created: "2022-09-01T06:46:51.856915",
    // company_id: "company_413ef22b6237417fb1fba7917f0f69e7",
    // user_id: "user_4ee4cf67ad474a27988bc0afb84cf472",
    // id: "task_d207d1c0faef45be99be9290d0d192e1"


const singleTask = (singleTask = initialState, action) => {
    switch (action.type) {
        case "singleTask/FETCH_TASK":
            return action.payload;
        case "singleTask/REMOVE_TASK":
            return initialState;
        default:
            return singleTask;
    }
}

export default singleTask;