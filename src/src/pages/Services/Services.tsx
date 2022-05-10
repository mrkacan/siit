import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Divider, Table} from 'antd';
import * as servicesAction from "../../features/services/actions";
import {useNavigate} from 'react-router-dom';
import {getServicesSelector} from "../../features/services/selectors";

const Services: React.FC = () => {
    const dispatch = useDispatch();
    const {
        data,
        isLoading,
    } = useSelector(getServicesSelector)
    const navigate = useNavigate();
    const columns = [
        {
            title: 'Avatar',
            dataIndex: 'logo_url',
            key: 'name',
            render: link => <img width={70} src={link}/>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Website URL',
            dataIndex: 'website_url',
            key: 'website_url',
        },
        {
            title: 'Monthly Cost',
            dataIndex: 'monthlyCost',
            key: 'monthlyCost',
            render: text => <div>{`$${text}`}</div>
        },
    ]

    useEffect(() => {
        dispatch(servicesAction.getServices());
    }, [])

    return (
        <>
            <Divider/>
            <Table dataSource={data} columns={columns} loading={isLoading}
                   onRow={(record, rowIndex) => {
                       return {
                           onClick: event => navigate(`/employees/${record.id}`),
                       };
                   }}/>
        </>
    );
}

export default Services;
