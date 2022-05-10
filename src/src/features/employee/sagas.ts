import {all, call, put, takeEvery} from 'redux-saga/effects';
import * as types from './types';
import * as actions from './actions';
import {GET_EMPLOYEES} from './types';
import {GET_SEARCH_DATA_API} from '../../api/api';

function* handler() {
    yield takeEvery(GET_EMPLOYEES, getEmployees);
}

function* getEmployees(action: types.GetEmployeesAction) {
    try {
        const response: types.EmployeeItem[] = yield call(GET_SEARCH_DATA_API);

        console.log('response',response)


        // if (response) {
        //     const mediaData: types.EmployeeItem[] = yield all(
        //         response?.collection?.items?.map(function* (media) {
        //             const images = yield call(() => fetch(media?.href).then((response) => response.json()))
        //             return {
        //                 ...media?.data?.[0],
        //                 images
        //             };
        //         }),
        //     );
        //
        //     yield put(actions.getEmployeesSuccess(mediaData));
        // }

    } catch (error) {
        console.error(error);
    }
}

export {handler};
