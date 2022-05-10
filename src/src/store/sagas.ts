import {all} from 'redux-saga/effects';
import {getEmployeesSaga} from '../features/employee/sagas';
import {servicesSaga} from '../features/services/sagas';

export default function* rootSaga() {
  yield all([
    ...getEmployeesSaga,
    ...servicesSaga,
  ]);
}
