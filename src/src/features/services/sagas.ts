import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from './types';
import {GET_EMPLOYEES} from './types';
import * as actions from './actions';
import {GET_EMPLOYEES_API} from '../../api/apis';

function* handler() {
    yield takeEvery(GET_EMPLOYEES, getEmployees);
}

function* getEmployees() {
    try {
        const response: types.EmployeeItem[] = yield call(GET_EMPLOYEES_API);

        yield put(actions.getEmployeesSuccess(response));

    } catch (error) {
        yield put(actions.getEmployeesError("Error"));
        console.error(error);
    }
}

export {handler};
