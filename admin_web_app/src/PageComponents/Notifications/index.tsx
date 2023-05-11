import { useState } from 'react'
import { Divider, Tabs, Input } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';
import { NotificationOutlined } from '@ant-design/icons';

import { CreateNotification } from './CreateNotifications'


export function Notifications() {

    return (
        <div
          style={{
            margin: 20
          }}>
            <PageHeader
              avatar={{
                icon: <NotificationOutlined />,
                style: { backgroundColor: "#1890ff" }
              }}
              title="Notifications"
            />
            <Divider/>
            <Tabs 
                defaultActiveKey="1" 
                items={[
                {
                    key: '1',
                    label: `Create Notification`,
                    children: <CreateNotification/>,
                },
                {
                    key: '2',
                    label: `View all Notifications`,
                    children: `Content of Tab Pane 2`,
                },
                ]}
            />
        </div>
    )
}