import React from 'react'
import JobList from './JobList'
import { Divider, Layout } from 'antd'

const Content: React.FC = () => {
  const { Content } = Layout;
  return (
    <Content>
      <div>some more content</div>
      <Divider />
      <JobList numberOfJobs={4} category='Featured' />
      <Divider />
      <JobList numberOfJobs={8} category='Recommended' />
      <Divider />
      <JobList numberOfJobs={8} category='Latest' />
    </Content>
  )
}

export default Content