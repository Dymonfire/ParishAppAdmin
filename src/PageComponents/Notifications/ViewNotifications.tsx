import { useState } from 'react'

import { Space, Input, Button, Table } from 'antd';

import type { ColumnsType } from 'antd/es/table';

const { TextArea } = Input;


export interface DataType {
  key: string;
  dateCreated: string;
  notification: string;
  author: string;
  status: string;
}
  
const columns: ColumnsType<DataType> = [
  {
    title: 'Date Created',
    dataIndex: 'dateCreated',
    key: 'dateCreated',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Notification',
    dataIndex: 'notification',
    key: 'notification',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
  //   render: (_: any, { tags }) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? 'geekblue' : 'green';
  //         if (tag === 'loser') {
  //           color = 'volcano';
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_: any, record: any) => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    dateCreated: '27 March 2023',
    notification: 'Time to pray',
    author: 'Dom Yuen',
    status: 'Active',
  },
  {
    key: '2',
    dateCreated: '27 March 2023',
    notification: 'Time to pray',
    author: 'Dom Yuen',
    status: 'Active',
  },
  {
    key: '3',
    dateCreated: '27 March 2023',
    notification: 'Time to pray',
    author: 'Dom Yuen',
    status: 'Active',
  },
];

interface TableData {
  tableData: DataType[];
}
export function ViewNotifications(props:TableData) {
    // const [notificationText, setNotificationText] = useState("")
  
    return (
      <>
        <Table columns={columns} dataSource={props.tableData} size={"small"}/>
      </>
    )
  }