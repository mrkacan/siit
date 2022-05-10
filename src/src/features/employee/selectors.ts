import * as moviesTypes from "./types";

export const getEmployeesSelector = ({employee}: {
    employee: moviesTypes.EmployeesState,
}) => {
    return {
        data: employee.data,
        isLoading: employee.isLoading,
        error: employee.error
    }
}
