import React, {useState} from 'react';
import {Table,notification,Button,Popconfirm} from 'antd';
import {data} from '../../data/data';


const ProblemList = () => {
    let columns = [
        {
            title: 'Problem Id',
            dataIndex: 'pid',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Date',
            dataIndex: 'date',
        },
        {
            title: 'Type',
            dataIndex: 'type',
        },
        {
            title: 'Site',
            dataIndex: 'site',
        },
        {
            title: '',
            dataIndex: '',
            render: (text, record) =>
                 (
                     <Button type="link" block
                     onClick={seeDetails}
                     >
                         See Details
                     </Button>
                ),
        },
    ];

    const seeDetails = item => {
        notification.open({
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };

    return (
        <div>
            <Table columns={columns} dataSource={data}  />
        </div>
    );
};

export default ProblemList;
