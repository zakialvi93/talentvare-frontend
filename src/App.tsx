import { Layout } from 'antd'
import React from 'react'
import Navbar from './components/Navbar';
import Content from './components/Content';
import LeftPanel from './components/LeftPanel';
import NewContent from './components/NewContent';

const App: React.FC = () => {
  return (
    <Layout className='!h-[1391px] !w-[1443px] flex flex-col'>
      <Navbar />
      <Layout className='!w-full !h-[1321px] !bg-main'>
        <LeftPanel />
        {/* <Content /> */}
        <NewContent />
      </Layout>
    </Layout>
  )
}

export default App