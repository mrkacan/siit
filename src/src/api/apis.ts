import { REQUEST_URL } from "./constants";

export const GET_EMPLOYEES_API = (serviceId: number | undefined) => {
    const parameters = serviceId ? `?service_id=${serviceId}` : ''

    return fetch(`${REQUEST_URL}/users.json${parameters}`).then((response) => response.json());
};

export const GET_SERVICES_API = () => {
    return fetch(`${REQUEST_URL}/services.json`).then((response) => response.json());
};
