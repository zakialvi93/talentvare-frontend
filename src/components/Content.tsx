import React from 'react'
import JobsList from './JobsList'
import { Divider, Layout, Typography } from 'antd'

const Content: React.FC = () => {
  const { Content } = Layout;
  const { Title, Text } = Typography;
  return (
    <Content>
      <div className='w-full ml-2'>
        <Title className='!font-bold !text-[25px]'>
          Find your Dream Job,
          <span className='text-blue-600'> Albert!</span>
        </Title>
        <Text className='!mt-0'>Explore the latest job openings and apply for the best opportunitites available today!</Text>
      </div>
      <Divider className='!ml-2' />
      <JobsList numberOfJobs={4} category='Featured' />
      <Divider className='!ml-2' />
      <JobsList numberOfJobs={8} category='Recommended' />
      <Divider className='!ml-2' />
      <JobsList numberOfJobs={8} category='Latest' />
    </Content>
  )
}

export default Content