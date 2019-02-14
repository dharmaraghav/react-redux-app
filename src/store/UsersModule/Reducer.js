const initialSTate = {
    usersList: [],
    filteredUsersList: [],
    selectedUser: {}
};
export default (state = initialSTate, action) => {
    switch (action.type) {
        case 'SELECT_USER':
            const selectedUser = {...state.filteredUsersList[action.payload]};
            return {
                ...state, selectedUser
            };
        case 'GET_USER_LIST':
            return {
                ...state
            };
        case 'GET_USER_LIST_SUCCESS':
            return {
                ...state, usersList: action.payload, filteredUsersList: action.payload
            };
        case 'GET_USER_LIST_FAILURE':
            return {
                ...state
            };
        case 'FILTER_USER_LIST':
            let {usersList} = state;
            let filteredUsersList = [];
            usersList.forEach((value, index) => {
                const fullName = value.general.firstName + ' ' + value.general.lastName;
                if (fullName.toLowerCase().includes(action.payload.toLowerCase())) {
                    filteredUsersList.push(value)
                }
            });
            return {
                ...state, filteredUsersList, selectedUser: {}
            };
        default:
            return state
    }
}