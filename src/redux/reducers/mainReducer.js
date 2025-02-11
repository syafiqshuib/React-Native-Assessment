import mainTypes from '../types/mainType';

const initialState = {
    offSet: 1,
    hasMoreList: false,
    data: [],
    dataFiltered: [],
    loading: false,
    loadingFiltered: false,
    error: null,
    filterItem: {
        language: "",
        sort: ""
    }
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case mainTypes.FETCH_DATA_REQUEST:
            return fetchDataRequest(state);
        case mainTypes.FETCH_DATA_SUCCESS:
            return fetchDataSuccess(state, action)
        case mainTypes.FETCH_DATA_CLEAR:
            return fetchDataClear(state)
        case mainTypes.FETCH_DATA_FAILURE:
            return fetchDataFailure(state, action)
        case mainTypes.FETCH_DATA_SEARCH_REQUEST:
            return fetchDataSearchRequest(state);
        case mainTypes.FETCH_DATA_SEARCH_SUCCESS:
            return fetchDataSearchSuccess(state, action)
        case mainTypes.FETCH_DATA_SEARCH_CLEAR:
            return fetchDataSearchClear(state)
        case mainTypes.FETCH_DATA_SEARCH_FAILURE:
            return fetchDataSearchFailure(state, action)
        case mainTypes.SAVE_FILTER_ITEM:
            return saveFilterItem(state, action)
        case mainTypes.SAVE_FILTER_ITEM:
            return clearFilterItem(state)
        default:
            return state;
    }
};

const fetchDataRequest = (state) => {
    const boolean = state.offSet === 1 ? true : false;
    return {
        ...state,
        loading: boolean,
        error: null
    };
}
const fetchDataSuccess = (state, action) => {
    if (!action.payload || action.payload.length === 0) {
        return {
            ...state,
            loading: false,
            hasMoreList: false,
        };
    }
    return {
        ...state,
        loading: false,
        data: state.data.concat(action.payload),
        offSet: state.offSet + 1,
        hasMoreList: action.payload.length <= 9 ? false : Boolean(action.payload.length),
    };
}
const fetchDataClear = (state) => {
    return {
        ...state,
        offSet: 1,
        data: [],
        dataFiltered: []
    };
}
const fetchDataFailure = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.payload
    };
}


const fetchDataSearchRequest = (state) => {
    return {
        ...state,
        loadingFiltered: true,
        error: null
    };
}
const fetchDataSearchSuccess = (state, action) => {
    return {
        ...state,
        loadingFiltered: false,
        dataFiltered: action.payload.items,
    };
}
const fetchDataSearchClear = (state) => {
    return {
        ...state,
        dataFiltered: []
    };
}
const fetchDataSearchFailure = (state, action) => {
    return {
        ...state,
        loadingFiltered: false,
        error: action.payload
    };
}


const saveFilterItem = (state, action) => {
    return {
        ...state,
        filterItem: action.payload
    };
}
const clearFilterItem = (state) => {
    return {
        ...state,
        filterItem: {
            language: "",
            sort: ""
        }
    };
}


export default mainReducer;
