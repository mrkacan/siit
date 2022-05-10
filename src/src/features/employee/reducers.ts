import * as types from './types';

const initialState: types.EmployeesState = {
    data: [],
    isLoading: false,
    error: ''
};

const reducer = (state = initialState, action: types.EmployeesActionTypes) => {
    switch (action.type) {
    case types.GET_EMPLOYEES: {
        return {
            ...state,
            isLoading: true
        };
    }
    case types.GET_EMPLOYEES_SUCCESS: {
        return {
            ...state,
            isLoading: false,
            data: action.payload.data,
        };
    }
    case types.GET_EMPLOYEES_FAILURE: {
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
