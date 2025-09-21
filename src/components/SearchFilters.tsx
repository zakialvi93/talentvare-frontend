import { Button, Divider, Input, Select } from 'antd'
import React from 'react'
import { SearchOutlined } from "@ant-design/icons";

const SearchFilters: React.FC = () => {
  return (
    <div className='w-[974px] h-[70px] bg-white flex flex-row items-center gap-2 p-2.5 mt-5 border-[1px] border-white rounded-[10px]'>
      <Input placeholder="Job Title, Company, or Keywords" className='custom-input !w-[48%] !border-0 !border-transparent !h-full' />
      <Divider type='vertical' className='!bg-divider !h-full' />
      <div className='w-[447x] h-full'>
        <Select placeholder="Select Location" className='!w-[150px] !h-full' />
        <Divider type='vertical' className='!bg-divider !h-full' />
        <Select placeholder="Job Type" className='!w-[120px] !h-full !border-0 !border-transparent' />
        <Button
          icon={<SearchOutlined />}
          className='!w-[140px] !h-full !ml-5 !rounded-[8px]'
        >
          Search
        </Button>
      </div>
    </div>
  )
}

export default SearchFilters