import axios from 'axios';

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjIwMjQxNDMsIm5iZiI6MTY2MjAyNDE0MywianRpIjoiN2IxNzJhZjYtZDdhYi00N2Y2LTk3OGUtZWIzNWI3NWVlYWQzIiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.sTSphVsc6WzQhFMGl6x-_qb9m-pvh9aBJe5YbGATpv4";
const company_id = "company_413ef22b6237417fb1fba7917f0f69e7";
const user_id = "user_4ee4cf67ad474a27988bc0afb84cf472";

export const addTask = async ({ task_date, task_time, time_zone, task_msg }) => await axios({
    method: 'post',
    url: `https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${company_id}`,
    headers: {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    data: {
        assigned_user: user_id,
        task_date,
        task_time,
        is_completed: 0,
        time_zone,
        task_msg
    }
});

export const fetchTasks = async () => await axios.get(`https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${company_id}`, {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

// export const login = async () => await axios.post(`https://stage.api.sloovi.com/login`, {
//     'email': "smithwills1989@gmail.com",
//     'password': "12345678"
// });

export const fetchTask = async (task_id) => await axios.get(`https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${task_id}?company_id=${company_id}`, {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export const updateTask = async (task_id, { task_date, task_time, time_zone, task_msg }) => await axios({
    method : 'put',
    url : `https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${task_id}?company_id=${company_id}`,
    headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    data: {
        assigned_user: user_id,
        task_date,
        task_time,
        is_completed: 0,
        time_zone,
        task_msg
    }
});

export const deleteTask = async (task_id) => await axios({
    method : 'delete',
    url : `https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${task_id}?company_id=${company_id}`,
    headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export const fetchUser = async () => await axios.get(`https://stage.api.sloovi.com/team?product=outreach&company_id=${company_id}`);