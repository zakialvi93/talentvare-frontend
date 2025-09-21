import { Layout } from 'antd'
import React from 'react'
import Navbar from './components/Navbar';
import LeftPanel from './components/LeftPanel';
import Content from './components/Content';

const App: React.FC = () => {
  return (
    <Layout className='!h-[1391px] !w-[1443px] flex flex-col'>
      <Navbar />
      <Layout className='!w-full !h-[1321px] !bg-main'>
        <LeftPanel />
        <Content />
      </Layout>
    </Layout>
  )
}

export default App