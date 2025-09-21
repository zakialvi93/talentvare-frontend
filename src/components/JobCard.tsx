import { Card, Button, Typography } from "antd";
import {
  EnvironmentOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import bookMarkIcon from "../assets/bookmark.png"
import teamsLogo from "../assets/teams-logo.svg";
import type React from "react";

const JobCard: React.FC = () => {
  const { Text } = Typography;
  return (
    <Card
      className="!w-[182px] !h-[164px] !rounded-[10px] !border-[1px] !border-job-card-border !flex !flex-col !items-start !bg-white !pl-5 !pr-5 !pt-2.5 !pb-2.5"
    >
      <div className="flex flex-col w-full">

        <Text className="!font-default !font-[600] !text-[10px] !text-name">Promoted</Text>

        <div className="flex flex-row w-full gap-2 mt-1">
          <div
            className="w-[40px] h-[40px] rounded-[9.11px] border-[0.76px] border-white bg-main flex justify-center items-center"
          >
            <img src={teamsLogo} alt="Teams Logo" />
          </div>
          <div className="flex flex-col">
            <Text className="!font-default !font-[500] !text-[12px] !text-name">UI/UX Designer</Text>
            <Text className="!font-default !font-[500] !text-[10px] !text-name">Teams</Text>
          </div>
        </div>

        <div className="flex flex-row w-full gap-2 mt-1">

          <div className="flex flex-col gap-1.5 mt-[2.5px]">
            <EnvironmentOutlined className="!w-[9.6px] !h-[12px] !text-light" />
            <ClockCircleOutlined className="!w-[9.6px] !h-[12px] !text-light" />
          </div>

          <div className="flex flex-col gap-1">
            <Text className="!font-default !font-[500] !text-[10px] !text-light">Seattle, USA (Remote)</Text>
            <Text className="!font-default !font-[500] !text-[10px] !text-light">1 day ago  |  <span className="text-primary">22 applicants</span></Text>
          </div>

        </div>

        <div className="w-full flex flex-row justify-between mt-3 items-center">
          <Button className="!w-[115px] !h[34px]">Apply</Button>
          <img src={bookMarkIcon} alt="Bookmark Icon" className="ml-2.5 w-[15px] h-[16px]" />
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
