import React from 'react'
import { Divider, Typography } from 'antd'

const Statistics: React.FC = () => {
  const { Text } = Typography;
  return (
    <div className='w-full h-[137px] rounded-[10px] border-[1px] p-[20px] bg-white border-transparent'>
      <div className='w-full h-[97px] flex flex-col items-center'>

        <div className='w-full flex flex-row justify-between items-center'>
          <Text
            className='!text-[14px] !font-[500] !font-default !text-name'
          >
            Profile Visitors
          </Text>
          <Text
            className='!font-default !text-[16px] !text-primary !font-[500]'
          >
            140
          </Text>
        </div>
        <Divider className='!mt-[1px] !bg-divider !w-full !h-0' />

        <div className='w-full flex flex-row justify-between items-center mt-[-20px]'>
          <Text
            className='!text-[14px] !font-[500] !font-default !text-name'
          >
            Resume Viewers
          </Text>
          <Text
            className='!font-default !text-[16px] !text-primary !font-[500]'
          >
            20
          </Text>
        </div>
        <Divider className='!mt-[1px] !bg-divider !w-full !h-0' />

        <div className='w-full flex flex-row justify-between items-center mt-[-20px]'>
          <Text
            className='!text-[14px] !font-[500] !font-default !text-name'
          >
            My Jobs
          </Text>
          <Text
            className='!font-default !text-[16px] !text-primary !font-[500]'
          >
            88
          </Text>
        </div>

      </div>
    </div>
  )
}

export default Statistics