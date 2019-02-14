import axios from 'axios';

export const getUserList = () => dispatch => {
    dispatch({
        type: 'GET_USER_LIST',
        payload: 'result_of_simple_action'
    });
    return axios.get(`/staticContents/client.json`)
        .then(res => {
            dispatch({
                type: 'GET_USER_LIST_SUCCESS',
                payload: res.data
            })
        })
        .catch(error => {
            dispatch({
                type: 'GET_USER_LIST_FAILURE',
                payload: error
            })
        })
};

export const filterUserList = (name) => {
    return {
        type: 'FILTER_USER_LIST',
        payload: name
    };
};


export const selectUser = (index) => {
    return {
        type: 'SELECT_USER',
        payload: index
    };
};