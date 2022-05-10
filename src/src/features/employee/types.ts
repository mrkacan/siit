import {Action} from 'redux';

const GET_EMPLOYEES = 'GET_EMPLOYEES';
const GET_EMPLOYEES_SUCCESS = 'GET_EMPLOYEES_SUCCESS';
const GET_EMPLOYEES_FAILURE = 'GET_EMPLOYEES_FAILURE';

export interface GetEmployeesAction extends Action {
    type: typeof GET_EMPLOYEES;
    payload: number | undefined
}

interface GetEmployeesSuccessAction extends Action {
    type: typeof GET_EMPLOYEES_SUCCESS;
    payload: {
        data: EmployeeItem[];
    };
}

interface GetEmployeesErrorAction extends Action {
    type: typeof GET_EMPLOYEES_FAILURE;
    payload: {
        error: string;
    };
}

export type EmployeesActionTypes =
    | GetEmployeesAction
    | GetEmployeesSuccessAction
    | GetEmployeesErrorAction

export type EmployeesState = {
    data: EmployeeItem[];
    isLoading: boolean;
    error: string;
}

export interface EmployeeItem {
    avatar_url: string;
    id: number;
    name: string;
    position: string;
}

export {
    GET_EMPLOYEES,
    GET_EMPLOYEES_SUCCESS,
    GET_EMPLOYEES_FAILURE,
};
