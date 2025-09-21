import React from 'react';
import { Typography } from 'antd';
import JobCard from './JobCard';
import type { JobsListPropsInterface } from '../utils/interfaces/JobsListPropsInterface';

const JobsList: React.FC<JobsListPropsInterface> = ({ numberOfJobs, category }) => {
  const { Text } = Typography;
  return (
    <div className='w-full h-full flex flex-col items-start gap-3'>

      <div className='flex flex-row w-full gap-4 items-center'>
        <Text className='!text-[18px] !font-default !font-[500] !text-name'>{category} Jobs</Text>
        <Text className='!text-[14px] !font-default !font-[500] !text-primary !underline'>See {category} Jobs</Text>
      </div>


      <div className="flex flex-wrap gap-10 w-full h-full">
        {Array.from({ length: numberOfJobs }).map((_, index) => (
          <JobCard key={index + 1} />
        ))}
      </div>
    </div>
  )
}

export default JobsList