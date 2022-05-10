import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import './App.css';
import Employees from "./pages/Employees/Employees";
import 'antd/dist/antd.min.css';
import Services from "./pages/Services/Services";
import Menu from "./component/Menu";

export const PAGES = {
    EMPLOYEES: {
        route: 'employees',
        component: <Employees/>,
        name: "Employees"
    },
    SERVICES: {
        route: 'services',
        component: <Services/>,
        name: "Services"
    },
}

function App() {
    return (
        <div className="w-screen h-full bg-gray-100">
            <div className="container px-4 mx-auto bg-white h-full">
                <div className="container h-screen text-center pt-8">
                    <Menu/>
                    <Routes>
                        <Route path="*" element={<Navigate to="/employees" />}/>
                        <Route path={PAGES.EMPLOYEES.route} element={PAGES.EMPLOYEES.component}>
                            <Route path=":id" element={PAGES.EMPLOYEES.component}/>
                        </Route>
                        <Route path={PAGES.SERVICES.route} element={PAGES.SERVICES.component}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
