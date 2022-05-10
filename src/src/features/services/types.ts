import {Action} from 'redux';

const GET_SERVICES = 'GET_SERVICES';
const GET_SERVICES_SUCCESS = 'GET_SERVICES_SUCCESS';
const GET_SERVICES_FAILURE = 'GET_SERVICES_FAILURE';

export interface GetServicesAction extends Action {
    type: typeof GET_SERVICES;
}

interface GetServicesSuccessAction extends Action {
    type: typeof GET_SERVICES_SUCCESS;
    payload: {
        data: ServiceItem[];
    };
}

interface GetServicesErrorAction extends Action {
    type: typeof GET_SERVICES_FAILURE;
    payload: {
        error: string;
    };
}

export type ServicesActionTypes =
    | GetServicesAction
    | GetServicesSuccessAction
    | GetServicesErrorAction

export type ServicesState = {
    data: ServiceItem[];
    isLoading: boolean;
    error: string;
}

export interface ServiceItemResponse {
    id: number;
    logo_url: string;
    name: string;
    price: {
        cost_per_user: number;
        flat_cost: number;
        nb_users_included: number;
    };
    website_url: string;
}
export interface ServiceItem extends ServiceItemResponse {
    monthlyCost: number;
}

export {
    GET_SERVICES,
    GET_SERVICES_SUCCESS,
    GET_SERVICES_FAILURE,
};
