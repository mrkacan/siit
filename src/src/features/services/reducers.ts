import * as types from './types';

const initialState: types.ServicesState = {
    data: [],
    isLoading: false,
    error: ''
};

const reducer = (state = initialState, action: types.ServicesActionTypes) => {
    switch (action.type) {
    case types.GET_SERVICES: {
        return {
            ...state,
            isLoading: true
        };
    }
    case types.GET_SERVICES_SUCCESS: {
        return {
            ...state,
            isLoading: false,
            data: action.payload.data,
        };
    }
    case types.GET_SERVICES_FAILURE: {
        return {
            ...state,
            isLoading: false,
            error: action.payload.error
        };
    }
    default:
        return state;
    }
};

export {reducer};
