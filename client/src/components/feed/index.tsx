import Image from "next/image";
import React from "react";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
4;
import { Tweet } from "@/gql/graphql";
import Link from "next/link";
interface FeedCardProps {
  data: Tweet;
}
const Feed: React.FC<FeedCardProps> = (props) => {
  const { data } = props;

  return (
    <div>
      <div className="border-b border-gray-600 p-3 hover:bg-slate-300 translate-all cursor-pointer">
        <div className="grid grid-cols-12">
          <div className="col-span-1">
            {data?.author?.profileImageUrl && (
              <Image
                className="rounded-full"
                src={data?.author?.profileImageUrl}
                alt="user-image"
                height={50}
                width={50}
              />
            )}
          </div>
          <div className="col-span-11">
            <h5>
              <Link href={`/${data?.author?.id}`}>
                {data.author?.firstName} {data.author?.lastName}
              </Link>
            </h5>

            <p>{data.content}</p>
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
