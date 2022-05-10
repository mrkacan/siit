import * as employeesTypes from "./types";

export const getEmployeesSelector = ({employee}: {
    employee: employeesTypes.EmployeesState,
}) => {
    return {
        data: employee.data,
        isLoading: employee.isLoading,
        error: employee.error
    }
}
