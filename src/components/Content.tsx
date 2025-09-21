import React from 'react'
import { Divider, Typography } from 'antd'
import SearchFilters from './SearchFilters';
import JobsList from './JobsList';

const Content: React.FC = () => {
  const { Text, Title } = Typography;
  return (
    <div className='w-full h-full mt-[20px] ml-[15px] flex flex-col items-start pl-[5px] bg-transparent p-[20px]'>

      <div className='w-full h-[48px] flex flex-col items-start'>
        <Title className='!font-default !font-[600] !text-[22px] !text-name'>
          Find Your Dream Job,
          <span className='text-primary'> Albert!</span>
        </Title>
        <Text className='!font-default !font-[500] !text-[14px] !text-light !mt-[-12px]'>
          Explore the latest job openings and apply for the best opportunities available today!
        </Text>
      </div>

      <SearchFilters />

      <Divider className='custom-horizontal-divider' />

      <JobsList
        numberOfJobs={5}
        category='Featured'
      />

      <Divider className='custom-horizontal-divider' />

      <JobsList
        numberOfJobs={10}
        category='Recommended'
      />

      <Divider className='custom-horizontal-divider' />

      <JobsList
        numberOfJobs={10}
        category='Latest'
      />


    </div>
  )
}

export default Content