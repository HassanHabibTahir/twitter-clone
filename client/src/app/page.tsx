import Image from "next/image";
import logo from "../assets/logo.png";
import Navbar from "@/components/navbar";
import Feed from "@/components/feed";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen">
        <div className="col-span-3 border-1">
          <Image
            src={logo}
            alt=""
            className="w-14 mx-auto hover:bg-gray-300 rounded-full p-1"
          />
          <Navbar />
        </div>
        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400">
          <Feed />
          <Feed />
          <Feed />
          <Feed />
        </div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
