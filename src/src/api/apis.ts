import { REQUEST_URL } from "./constants";

export const GET_SEARCH_DATA_API = () => {
    return fetch(`${REQUEST_URL}/users.json`).then((response) => response.json());
};
