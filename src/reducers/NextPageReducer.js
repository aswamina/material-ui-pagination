/*
 src/reducers/NextPageReducer.js
*/
const tableData = (state = {}, action) => {
    switch (action.type) {
        case 'NEXT_PAGE':
            return { ...state, data: action.data, page: action.page };
        default:
            return state
    }
};

export default tableData;