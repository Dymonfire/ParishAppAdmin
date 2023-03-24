import { useState } from 'react'
import './App.css'
import { Layout, Menu} from 'antd';
import { Notifications } from './PageComponents/Notifications';

const { Header, Content } = Layout;


function App() {

  return (
    <Layout>
      <Header>
        <div>
          <div className="logo"  >Admin Console</div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: "1",
                label: "Notifications"
              }
            ]}
            />
        </div>
      </Header>
      <Content
        style={{
          padding: 24,
          margin: 20,
          minHeight: 900,
          backgroundColor: "#ffff"
        }}> 
        <Notifications/>
      </Content>
    </Layout>
    
  )
}



export default App
