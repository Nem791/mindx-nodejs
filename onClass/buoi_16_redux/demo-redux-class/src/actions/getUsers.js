import callApi from "../api/callApi";

export const fetchUsers = () => (
    async (dispatch) => {
        const res = await callApi('users');
        dispatch({
            type: 'FETCH_USERS',
            payload: res.data
            
        });
    }
)