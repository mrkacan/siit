import * as types from './types';
import {ServiceItem} from "./types";

const getServices = (): types.ServicesActionTypes => {
    return {
        type: types.GET_SERVICES,
    };
};

const getServicesSuccess = (data: ServiceItem[]): types.ServicesActionTypes => {
    return {
        type: types.GET_SERVICES_SUCCESS,
        payload: {
            data,
        },
    };
};
const getServicesError = (error: string): types.ServicesActionTypes => {
    return {
        type: types.GET_SERVICES_FAILURE,
        payload: {
            error,
        },
    };
};

export {
    getServices,
    getServicesSuccess,
    getServicesError
};
