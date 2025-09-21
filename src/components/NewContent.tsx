import React from 'react'
import { Typography } from 'antd'
import SearchFilters from './SearchFilters';

const NewContent: React.FC = () => {
  const { Text, Title } = Typography;
  return (
    <div className='w-full mt-[39px] ml-[15px] flex flex-col items-start pl-[5px] bg-transparent'>

      <div className='w-full h-[48px] flex flex-col items-start'>
        <Title className='!font-default !font-[600] !text-[22px] !text-name'>
          Find Your Dream Job,
          <span className='font-default font-[600] text-[22px] text-primary'> Albert!</span>
        </Title>
        <Text className='!font-default !font-[500] !text-[14px] !text-light !mt-[-12px]'>
          Explore the latest job openings and apply for the best opportunities available today!
        </Text>
      </div>

      <SearchFilters />
    </div>
  )
}

export default NewContent