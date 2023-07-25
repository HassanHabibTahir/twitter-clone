import React, { useMemo } from "react";
import { BiHash, BiHomeCircle, BiMoney, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { SlOptions } from "react-icons/sl";
import Link from "next/link";
import { useCurrentUser } from "@/hooks/user";
import Image from "next/image";
const Navbar = () => {
  const { user } = useCurrentUser();
  interface TwitterSidebarButton {
    title: string;
    icon: React.ReactNode;
    link: string;
  }

  const sidebarMenuItems: TwitterSidebarButton[] = useMemo(
    () => [
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
        link: `/${user?.id}`,
      },
      {
        title: "More Options",
        icon: <SlOptions className="" />,
        link: "/",
      },
    ],
    [user]
  );

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
          {user && (
            <div>
              <div className="items-center flex   rounded-full">
                {user.profileImageUrl && (
                  <Image
                    className="rounded-full"
                    src={user.profileImageUrl}
                    alt="user-image"
                    height={50}
                    width={50}
                  />
                )}
                <h3 className="text-xl">
                  {user?.firstName}
                  {user?.lastName}
                </h3>
              </div>
              <div className="hidden sm:block"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
