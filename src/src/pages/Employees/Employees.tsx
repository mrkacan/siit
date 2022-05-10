import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Divider, Table} from 'antd';
import * as employeesAction from "../../features/employee/actions";
import {useParams} from "react-router-dom";
import {getEmployeesSelector} from "../../features/employee/selectors";

const Employees: React.FC = () => {
    const dispatch = useDispatch();
    const {
        data,
        isLoading,
    } = useSelector(getEmployeesSelector)
    const params = useParams();
    const columns = [
        {
            title: 'Avatar',
            dataIndex: 'avatar_url',
            key: 'name',
            render: link => <img src={link}/>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Position',
            dataIndex: 'position',
            key: 'position',
        }
    ]

    useEffect(() => {
        dispatch(employeesAction.getEmployees(Number(params.id) ?? undefined));
    }, [params])

    return (
        <>
            <Divider/>
            <Table dataSource={data} columns={columns} loading={isLoading}/>
        </>
    );
}

export default Employees;
