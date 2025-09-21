import { Layout, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import logoPng from "/logo.png"
import avatar from "../assets/avatar.png"
import type { NavbarItemsType } from "../utils/types/NavabarItemsType";

const Navbar: React.FC = () => {
  const { Header } = Layout;
  const items: NavbarItemsType[] = [
    {
      content: "Find Jobs",
      styling: "!text-[16px] !font-default !font-[600] !text-primary"
    },
    {
      content: "Top Companies",
      styling: "!text-[16px] !font-default !font-[500] !text-secondary hover:!text-primary"
    },
    {
      content: "Job Tracker",
      styling: "!text-[16px] !font-default !font-[500] !text-secondary hover:!text-primary"
    },
    {
      content: "My Calendar",
      styling: "!text-[16px] !font-default !font-[500] !text-secondary hover:!text-primary"
    },
    {
      content: "Documents",
      styling: "!text-[16px] !font-default !font-[500] !text-secondary hover:!text-primary"
    },
    {
      content: "Messages",
      styling: "!text-[16px] !font-default !font-[500] !text-secondary hover:!text-primary"
    },
    {
      content: "Notifications",
      styling: "!text-[16px] !font-default !font-[500] !text-secondary hover:!text-primary"
    }
  ];
  return (
    <Header className="!bg-white !flex !flex-row !items-center !w-full !h-[70px] !p-0">

      <img
        src={logoPng}
        className="w-[41.09px] h-[38.45px] ml-[50.1px]"
        alt="Logo"
      />

      <div className="flex flex-row gap-[25px] ml-[30px] items-center">
        {items.map((item: NavbarItemsType, index: number) => (
          <a
            key={index + 1}
            className={item.styling}
          >
            {item.content}
          </a>
        ))}
      </div>

      <div className="w-[423px] h-[39px] flex flex-row gap-[15px] ml-10">

        <Input
          prefix={<SearchOutlined />}
          placeholder="Search"
          className="rounded-[8px] !w-[261px] !h-full !shadow-none"
        />
        <Button
          className="!w-[147px] !h-full"
        >
          Resume Builder
        </Button>
      </div>

      <img src={avatar} alt="Avatar" className="ml-[15px]" />
    </Header>
  );
};

export default Navbar;
