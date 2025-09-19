import { Layout, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import viteSvg from "../../public/vite.svg"
import avatar from "../assets/avatar.jpg"

const { Header } = Layout;

const Navbar: React.FC = () => {
  const items: string[] = [
    "Top Companies",
    "Job Tracker",
    "My Calendar",
    "Documents",
    "Messages",
    "Notifications",

  ];
  return (
    <Header className="!bg-white shadow-sm px-6 flex items-center !justify-between">
      {/* Left: Logo + Menu */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="flex items-center space-x-10">

          <img src={viteSvg} className="w-12 h-12" alt="Logo" />

          <span className="text-blue-700 font-bold text-base">
            Find Jobs
          </span>
        </div>

        {/* Menu Links */}
        <div className="flex items-center space-x-6 text-gray-600 text-sm font-medium">

          {items.map((item: string, index: number) => (
            <a
              key={index + 1}
              href="#"
              className="!text-gray-700 hover:!text-blue-600 no-underline"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Right: Search + Button + Avatar */}
      <div className="flex items-center space-x-4">
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search"
          className="rounded-lg !w-48"
        />
        <Button type="primary" className="!bg-blue-600 rounded-lg">
          Resume Builder
        </Button>

        <img src={avatar} className="w-12 h-12 rounded-full" alt="Logo" />
      </div>
    </Header>
  );
};

export default Navbar;
