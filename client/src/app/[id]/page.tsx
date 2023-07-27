import { graphqlClient } from "@/clients/api";
import Button from "@/components/btn";
import Feed from "@/components/feed";
import Layout from "@/components/layout";
import { Tweet } from "@/gql/graphql";
import { getUserByIdQuery } from "@/graphql/query/user";

import Image from "next/image";
// import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
// export const dynamic = "force-dynamic";
export default async function UserProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  let uniqueUser;
  if (id) {
    uniqueUser = await graphqlClient.request(getUserByIdQuery, { id });
  }
  const { getUserById } = uniqueUser;

  console.log(getUserById);
  // console.log(uniqueUser?.getUserById.id, "uniqueUser");

  return (
    <Layout>
      {" "}
      {getUserById ? (
        <div>
          <nav className="flex items-center gap-3 py-3 px-3">
            <Button />
            <div>
              <h1 className="text-2xl font-bold">
                {getUserById?.firstName} {getUserById?.lastName}
              </h1>
              <h1 className="text-md font-bold text-slate-500">
                {getUserById?.tweets?.length} Tweets
              </h1>
            </div>
          </nav>
          <div className="p-4 border-b border-slate-800">
            <Image
              src={getUserById.profileImageUrl}
              alt="user-image"
              className="rounded-full"
              width={100}
              height={100}
            />
          </div>
          <h1 className="text-2xl font-bold mt-5">
            {getUserById.firstName + getUserById.lastName}
          </h1>
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
          <div>
            {getUserById?.tweets?.map((tweet: Tweet) => (
              <Feed data={tweet as Tweet} key={tweet?.id} />
            ))}
          </div>
        </div>
      ) : (
        "loading....."
      )}
    </Layout>
  );
}
