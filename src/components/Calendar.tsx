import React from 'react'
import { DatePicker, Typography } from 'antd'
import { DownOutlined } from "@ant-design/icons"

const Calendar: React.FC = () => {
  const { Text } = Typography;
  return (
    <div className='w-full h-[56px] rounded-[10px] border-[1px] p-2.5 border-transparent bg-white'>
      <div className='w-full h-[36px] flex flex-row justify-between items-center'>
        <div className='w-[110px] h-[36px] flex flex-col items-start gap-0 p-0'>
          <Text className='!font-default !font-[600] !text-[12px] !text-name'>My calendar</Text>
          <Text className='!font-default !font-[500] !text-[10px] !text-secondary'>Upcoming Interviews</Text>
        </div>
        <DatePicker
          allowClear={false}
          placeholder=""
          suffixIcon={<DownOutlined className='!text-name' />}
          className='!w-10 !border-0 !border-transparent'
        />
      </div>
    </div>
  )
}

export default Calendar