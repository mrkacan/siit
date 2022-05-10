import {call, put, takeEvery} from 'redux-saga/effects';
import * as types from './types';
import {GET_SERVICES} from './types';
import * as actions from './actions';
import {GET_SERVICES_API} from '../../api/apis';

const servicesSaga = [
    takeEvery(GET_SERVICES, getServices)
]

function* getServices() {
    try {
        const response: types.ServiceItemResponse[] = yield call(GET_SERVICES_API);

        if (response?.length) {
            const services: types.ServiceItem[] = response.map((item: types.ServiceItem) => {
                const monthlyCost = item.price.flat_cost + item.price.cost_per_user * (response.length - item.price.nb_users_included);

                return {
                    ...item,
                    monthlyCost
                }
            })

            yield put(actions.getServicesSuccess(services));

        } else {
            throw Error("Error")
        }


    } catch (error) {
        yield put(actions.getServicesError("Error"));
        console.error(error);
    }
}

export {servicesSaga};
