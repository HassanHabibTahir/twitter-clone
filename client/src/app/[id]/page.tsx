import Button from "@/components/btn";
import Layout from "@/components/layout";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";

const UserProfilePage = () => {
  // const router = useRouter();
  return (
    <Layout>
      {" "}
      <nav className="flex items-center gap-3 py-3 px-3">
        {/* <BsArrowLeftShort
          className="text-4xl"
          // onClick={() => router.back()}
        /> */}
        <Button />
        <div>
          <h1 className="text-2xl font-bold">hhh hh ttt</h1>
          <h1 className="text-md font-bold text-slate-500">2 Tweets</h1>
        </div>
      </nav>
      <div className="p-4 border-b border-slate-800">
        <Image
          src="https://miro.medium.com/v2/resize:fill:176:176/0*xrTDoQeL4WgQL6mE."
          alt="user-image"
          className="rounded-full"
          width={100}
          height={100}
        />
      </div>
      <h1 className="text-2xl font-bold mt-5">hassan habib tahir</h1>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 mt-2 text-sm text-gray-400">
          <span>12 followers</span>
          <span>12 following</span>
        </div>
        {/* {currentUser?.id !== props.userInfo?.id && ( */}
        <>
          {/* {amIFollowing ? (
                    <button
                      // onClick={handleUnfollowUser}
                      className="bg-white text-black px-3 py-1 rounded-full text-sm"
                    >
                      Unfollow
                    </button>
                  ) : ( */}
          <button
            // onClick={handleFollowUser}
            className="bg-white text-black px-3 py-1 rounded-full text-sm"
          >
            Follow
          </button>
          {/* )} */}
        </>
        {/* )} */}
      </div>
    </Layout>
  );
};
export default UserProfilePage;
