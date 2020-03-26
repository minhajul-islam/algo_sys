import React, {useState} from 'react';
import {Table} from 'antd';

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
        }
    ];
    let data = [
        {
            pid: '100',
            date: '22/12/2019',
            name: 'The 3n + 1 problem',
            type:'Data structure - array',
            site:'uva'
        },
        {
            pid: '100',
            date: '22/12/2019',
            name: 'The 3n + 1 problem',
            type:'Data structure - array',
            site:'uva'
        },
        {
            pid: '100',
            date: '22/12/2019',
            name: 'The 3n + 1 problem',
            type:'Data structure - array',
            site:'uva'
        }
    ];
    const onChange = () => {

    };
    return (
        <div>
            <Table columns={columns} dataSource={data} onChange={onChange}/>
        </div>
    );
};

export default ProblemList;
