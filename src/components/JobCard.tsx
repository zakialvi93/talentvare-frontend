import { Card, Button } from "antd";
import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  BookOutlined,
} from "@ant-design/icons";

import teamsLogo from "../assets/teams-logo.svg";
import type React from "react";

const JobCard: React.FC = () => {
  return (
    <Card className="w-60 rounded-xl shadow-md border border-gray-200">

      <div className="text-xs font-medium text-black mb-2">Promoted</div>


      <div className="flex items-center space-x-3 mb-3">
        <div className="bg-indigo-100 rounded-lg p-2">
          <img src={teamsLogo} className="w-10 h-10" />
        </div>
        <div>
          <h2 className="text-base font-semibold">UI/UX Designer</h2>
          <p className="text-gray-500 text-sm">Teams</p>
        </div>
      </div>


      <div className="flex items-center text-sm text-gray-500 mb-1">
        <EnvironmentOutlined className="mr-1 text-gray-400" />
        Seattle, USA (Remote)
      </div>


      <div className="flex items-center text-sm text-gray-500 mb-3">
        <ClockCircleOutlined className="mr-1 text-gray-400" />
        1 day ago ·{" "}
        <span className="ml-1 text-blue-600 cursor-pointer">
          22 applicants
        </span>
      </div>


      <div className="flex items-center justify-between">
        <Button>
          Apply Now
        </Button>
        <BookOutlined className="text-gray-500 cursor-pointer text-lg" />
      </div>
    </Card>
  );
};

export default JobCard;
