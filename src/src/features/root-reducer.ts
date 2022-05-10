import {combineReducers} from 'redux';
import {reducer as employeeReducer} from './employee/reducers';
import {reducer as servicesReducer} from './services/reducers';

const reducer = combineReducers({
    employee: employeeReducer,
    services: servicesReducer,
});

export {reducer};
