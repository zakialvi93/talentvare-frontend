import { Divider, Layout, Menu } from 'antd'
import React from 'react'
import JobList from './components/JobList';
import Navbar from './components/Navbar';
import Content from './components/Content';

const App: React.FC = () => {
  const { Sider } = Layout;

  const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    justifyContent: "center",
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: 'red',
    display: "flex"
  };




  return (
    <Layout className='!min-h-[100vh]'>
      <Navbar />
      <Layout>
        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>
        <Content />
      </Layout>
      {/* <Footer style={footerStyle}>Footer</Footer> */}
    </Layout>
  )
}

export default App