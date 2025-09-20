import React from 'react'
import { Layout } from 'antd'
import Profile from './Profile';
import Statistics from './Statistics';
import Calendar from './Calendar';

const LeftPanel: React.FC = () => {
  const { Sider } = Layout;
  return (
    <Sider className='!w-[346px] !h-[461] !ml-[50px] !mt-[25px] !bg-transparent'>
      <Profile />
      <Statistics />
      <Calendar />
    </Sider>
  )
}

export default LeftPanel