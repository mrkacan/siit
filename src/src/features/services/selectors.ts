import * as servicesTypes from "./types";

export const getServicesSelector = ({services}: {
    services: servicesTypes.ServicesState,
}) => {
    return {
        data: services.data,
        isLoading: services.isLoading,
        error: services.error
    }
}
