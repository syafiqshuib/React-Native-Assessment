import mainTypes from '../types/mainType';

export const fetchDataRequest = (payload) => ({
    type: mainTypes.FETCH_DATA_REQUEST,
    payload
});
export const fetchDataSuccess = (payload) => ({
    type: mainTypes.FETCH_DATA_SUCCESS,
    payload
});
export const fetchDataClear = () => ({
    type: mainTypes.FETCH_DATA_CLEAR
});
export const fetchDataFailure = (error) => ({
    type: mainTypes.FETCH_DATA_FAILURE,
    payload: error
});


export const fetchDataSearchRequest = (payload) => ({
    type: mainTypes.FETCH_DATA_SEARCH_REQUEST,
    payload
});
export const fetchDataSearchSuccess = (payload) => ({
    type: mainTypes.FETCH_DATA_SEARCH_SUCCESS,
    payload
});
export const fetchDataSearchClear = () => ({
    type: mainTypes.FETCH_DATA_SEARCH_CLEAR
});
export const fetchDataSearchFailure = (error) => ({
    type: mainTypes.FETCH_DATA_SEARCH_FAILURE,
    payload: error
});


export const saveFilterItem = (payload) => ({
    type: mainTypes.SAVE_FILTER_ITEM,
    payload
});
export const clearFilterItem = (payload) => ({
    type: mainTypes.CLEAR_FILTER_ITEM,
    payload
});