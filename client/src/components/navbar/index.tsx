import React from "react";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import Link from "next/link";

const Navbar = () => {
  interface TwitterSidebarButton {
    title: string;
    icon: React.ReactNode;
    link: string;
  }

  const sidebarMenuItems: TwitterSidebarButton[] = [
    {
      title: "Home",
      icon: <BiHomeCircle />,
      link: "/",
    },
    {
      title: "Explore",
      icon: <BiHash />,
      link: "/",
    },
    {
      title: "Notifications",
      icon: <BsBell />,
      link: "/",
    },
    {
      title: "Messages",
      icon: <BsEnvelope />,
      link: "/",
    },
    {
      title: "Bookmarks",
      icon: <BsBookmark />,
      link: "/",
    },
    {
      title: "Twitter Blue",
      icon: <BiMoney />,
      link: "/",
    },
    {
      title: "Profile",
      icon: <BiUser />,
      link: `/`,
    },
    {
      title: "More Options",
      icon: <SlOptions className="" />,
      link: "/",
    },
  ];
  return (
    <div>
      {" "}
      <div className="mt-0 flex justify-center">
        <div className="mt-1 text-xl pr-5 mx-auto ">
          <ul>
            {sidebarMenuItems.map((item, index) => (
              <div key={index + Math.random()}>
                <Link
                  className="flex justify-start items-center gap-4 hover:bg-gray-300 rounded-full px-3 w-fit cursor-pointer"
                  href={item.link}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="hidden sm:inline">{item.title}</span>
                </Link>
              </div>
            ))}
          </ul>
          <div className="mt-3 p-4">
            <button className="bg-[#1B90EE] text-white w-full rounded-full p-1">
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
