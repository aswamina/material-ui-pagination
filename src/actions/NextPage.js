/*
 src/actions/NextPage.js
*/
import PageApi from '../api/mockPageApi';

export function pageDataSuccess(data, page) {
    return {
        type: 'NEXT_PAGE',
        data,
        page
    };
}

export const getNextPage = (page) => {
    return function(dispatch) {
        return PageApi.getPageData(page).then(data => {
            dispatch(pageDataSuccess(data, page));
        }).catch(error => {
            throw(error);
        });
    };
};