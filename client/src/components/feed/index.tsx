import Image from "next/image";
import React from "react";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
const Feed = () => {
  return (
    <div>
      <div className="border-b border-gray-600 p-3 hover:bg-slate-300 translate-all cursor-pointer">
        <div className="grid grid-cols-12">
          <div className="col-span-1">
            <Image
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/47211929?v=4"
              alt="user-image"
              height={50}
              width={50}
            />
          </div>
          <div className="col-span-11">
            <h1>hassan habib tahir</h1>
            <p>
              We’ve made an upgrade to comments on daily.dev. Comments now show
              up in line with the post and not in a separate box. You can also
              tag people and add image URL’s much faster thanks to this update.
            </p>
            <div className="flex justify-between mt-5 text-xl items-center p-2 w-[70%]">
              <div>
                <BiMessageRounded />
              </div>
              <div>
                <FaRetweet />
              </div>
              <div>
                <AiOutlineHeart />
              </div>
              <div>
                <BiUpload />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
