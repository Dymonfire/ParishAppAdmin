import { useState } from 'react'

import { Layout, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { ViewNotifications, DataType } from './ViewNotifications';

const { TextArea } = Input;

export function CreateNotification() {
    const [notificationText, setNotificationText] = useState("")
    const [author, setAuthor] = useState("")

    const [ tableData, setTableData ] = useState<DataType[]>([])

    function addNewRecord() {
      setTableData([...tableData, {
        key: new Date(Date.now()).toLocaleString(),
        dateCreated: new Date(Date.now()).toLocaleString(),
        notification: notificationText,
        author: author,
        status: 'Active',
      }])
      setAuthor("")
      setNotificationText("")
    }

    return (
      <>
        <div style={{marginBottom: "20px"}}>
          <TextArea
            placeholder="Write your Notification here . . ."
            autoSize={{ minRows: 5, maxRows: 30 }}
            value={notificationText}
            showCount
            maxLength={500}
            onChange={(e) => {setNotificationText(e.target.value)}}
          />
          <div>
            <div style={{
              display: "inline-block",
              width: "60px",
              paddingLeft: 0,
              paddingRight: 10,
              paddingTop: 20,
              fontWeight: 'bold'              
              }}>
                Author:
            </div>
              <Input 
                placeholder="default size" 
                prefix={<UserOutlined />} 
                style={{ width: "250px"}}
                onChange={(e) => {setAuthor(e.target.value)}}
                value={author}
              />
            <div>
            </div>

          </div>

          <Button 
          type="primary"
          onClick={() => addNewRecord()}
          style={{
              margin: "10px"
          }}
          >
              Create Notification
          </Button>
        </div>


        <ViewNotifications tableData={tableData}/>
      </>
    )
  }