import { useState } from 'react'

import { Layout, Input, Button } from 'antd';

const { TextArea } = Input;

export function CreateNotification() {
    const [notificationText, setNotificationText] = useState("")
  
    return (
      <>
        <TextArea
          placeholder="Write your Notification here . . ."
          autoSize={{ minRows: 5, maxRows: 30 }}
          value={notificationText}
          showCount
          maxLength={500}
          onChange={(e) => {setNotificationText(e.target.value)}}
        />
        <Button 
          type="primary"
          onClick={undefined}
          style={{
            margin: "10px"
          }}
          >
            Create Notification
        </Button>
      </>
    )
  }