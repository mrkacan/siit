import * as types from './types';
import {EmployeeItem} from "./types";

const getEmployees = (): types.EmployeesActionTypes => {
    return {
        type: types.GET_EMPLOYEES,
    };
};

const getEmployeesSuccess = (data: EmployeeItem[]): types.EmployeesActionTypes => {
    return {
        type: types.GET_EMPLOYEES_SUCCESS,
        payload: {
            data,
        },
    };
};
const getEmployeesError = (error: string): types.EmployeesActionTypes => {
    return {
        type: types.GET_EMPLOYEES_FAILURE,
        payload: {
            error,
        },
    };
};

export {
    getEmployees,
    getEmployeesSuccess,
    getEmployeesError
};
