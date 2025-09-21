import { Button, Divider, Input, Select, Typography } from 'antd'
import React from 'react'
import { SearchOutlined } from "@ant-design/icons";

const SearchFilters: React.FC = () => {
  const { Text } = Typography;
  const locationOptions: string[] = [
    "USA",
    "UK",
    "Netherlands"
  ];

  const jobTypeOptions: string[] = [
    "On-Site",
    "Remote",
    "Hybrid"
  ];

  const similarRecommendations: string[] = [
    "Frontend",
    "Backend",
    "Graphic Designer"
  ];
  return (
    <div className='w-full flex flex-col items-start gap-4'>

      <div className='w-full h-[70px] bg-white flex flex-row items-center gap-2 p-2.5 mt-5 border-[1px] border-white rounded-[10px]'>
        <Input placeholder="Job Title, Company, or Keywords"
          className='custom-input !w-[56%] !border-0 !border-transparent !h-full'
        />
        <Divider type='vertical' className='!bg-divider !h-full' />
        <div className='w-[447x] h-full'>
          <Select
            placeholder="Select Location"
            className='!w-[150px] !h-full'
            options={locationOptions.map((location: string, index: number) => ({
              label: location,
              value: index + 1
            }))}
          />
          <Divider type='vertical' className='!bg-divider !h-full' />
          <Select
            placeholder="Job Type"
            className='!w-[120px] !h-full !border-0 !border-transparent'
            options={jobTypeOptions.map((job: string, index: number) => ({
              label: job,
              value: index + 1
            }))}
          />
          <Button
            icon={<SearchOutlined />}
            className='!w-[140px] !h-full !ml-5 !rounded-[8px]'
          >
            Search
          </Button>
        </div>
      </div>

      <div className='flex flex-row w-full gap-4 items-center'>
        <Text className='!text-[14px] !font-[500] !font-default !text-secondary'>Similar: </Text>
        <div className='flex felx-row gap-3'>
          {similarRecommendations.map((recommendation: string, index: number) => (
            <Button key={index + 1} className='custom-button'>{recommendation}</Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchFilters