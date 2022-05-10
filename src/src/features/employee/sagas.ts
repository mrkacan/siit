import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from './types';
import {GET_EMPLOYEES, GetEmployeesAction} from './types';
import * as actions from './actions';
import {GET_EMPLOYEES_API} from '../../api/apis';

const getEmployeesSaga = [
    takeEvery(GET_EMPLOYEES, getEmployees)
]

function* getEmployees(action: GetEmployeesAction) {
    try {
        const response: types.EmployeeItem[] = yield call(GET_EMPLOYEES_API, action.payload);

        yield put(actions.getEmployeesSuccess(response));

    } catch (error) {
        yield put(actions.getEmployeesError("Error"));
        console.error(error);
    }
}

export {getEmployeesSaga};
