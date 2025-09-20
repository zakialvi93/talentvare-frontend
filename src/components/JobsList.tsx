import React from 'react';
import JobCard from './JobCard';
import { Typography } from 'antd';
import type { JobsListPropsInterface } from '../utils/interfaces/JobsListPropsInterface';

const JobsList: React.FC<JobsListPropsInterface> = ({ numberOfJobs, category }) => {
  const { Text } = Typography;
  return (
    <div className='w-full flex flex-col'>

      <div className='flex flex-row gap-4 p-2 items-center'>
        <Text className='!text-xl'>{category} Jobs</Text>
        <Text className='text-sm !text-blue-700 underline'>See {category} Jobs</Text>
      </div>


      <div className="flex flex-wrap gap-3 p-2 justify-start">
        {Array.from({ length: numberOfJobs }).map((_, index) => (
          <JobCard key={index + 1} />
        ))}
      </div>
    </div>
  )
}

export default JobsList