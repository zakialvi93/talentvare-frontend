import React from 'react'
import { Typography } from 'antd'
import coverPicture from "../assets/cover.jpg"
import profilePicture from "../assets/profile-picture.png"

const Profile: React.FC = () => {
  const { Text } = Typography;
  return (
    <div className='w-full h-[248px] bg-white flex flex-col gap-[15px] rounded-[10px] border-[1px] border-transparent items-center pb-[20px]'>

      <div className='w-full h-[228px] flex flex-col gap-12 p-0 items-center'>
        <img src={coverPicture} alt='Cover' className='rounded-[10px] h-[100px] w-full' />
        <div className='w-[158.84] h-[171px] flex flex-col items-center gap-[8px] mt-[-95px]'>
          <img src={profilePicture} alt='Profile' className='w-[86px] h-[86px] rounded-full border-[2px] border-white ' />
          <div className='w-[158.84px] h-[77px] flex flex-col items-center gap-[5px]'>
            <Text
              className='!font-default !font-[600] !text-[18px] !text-name'
            >
              Albert Flores
            </Text>
            <Text
              className='!font-default !font-[500] !text-[10px] !text-center !text-name !w-[236px] !h-[34px] !p-8 !mt-[-37px]'
            >
              Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web...
            </Text>
            <Text
              className='!font-default !font-[500] !text-[8px] !text-center !text-light !w-[236px] !h-[34px]'
            >
              Clinton, Maryland
            </Text>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Profile