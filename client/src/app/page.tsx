"use client";
import Image from "next/image";
import Feed from "@/components/feed";
import { useCallback, useState } from "react";
import { useCurrentUser } from "@/hooks/user";
import { BiImageAlt } from "react-icons/bi";
import { useCreateTweet, useGetAllTweets } from "@/hooks/tweet";
import { Tweet } from "@/gql/graphql";
import Layout from "@/components/layout";
import toast from "react-hot-toast";

export default function Home() {
  const { user } = useCurrentUser();
  const { tweets }: any = useGetAllTweets();
  const [content, setContent] = useState("");
  const { mutateAsync } = useCreateTweet();

  const handleInputChangeFile = useCallback((input: HTMLInputElement) => {
    return async (event: Event) => {
      event.preventDefault();
      const file: File | null | undefined = input.files?.item(0);
      if (!file) return;

      console.log(file, "file");

      // const { getSignedURLForTweet } = await graphqlClient.request(
      //   getSignedURLForTweetQuery,
      //   {
      //     imageName: file.name,
      //     imageType: file.type,
      //   }
      // );

      // if (getSignedURLForTweet) {
      // toast.loading("Uploading...", { id: "2" });
      // await axios.put(getSignedURLForTweet, file, {
      //   headers: {
      //     "Content-Type": file.type,
      //   },
      // });
      // toast.success("Upload Completed", { id: "2" });
      // const url = new URL(getSignedURLForTweet);
      // const myFilePath = `${url.origin}${url.pathname}`;
      // setImageURL(myFilePath);
      // }
    };
  }, []);

  const handleSelectImage = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");

    const handlerFn = handleInputChangeFile(input);

    input.addEventListener("change", handlerFn);

    input.click();
  }, [handleInputChangeFile]);

  const handleCreateTweet = useCallback(async () => {
    await mutateAsync({
      content,
      // imageURL,
    });
    setContent("");
    // setImageURL("");
  }, [mutateAsync, content]);

  return (
    <Layout>
      <div>
        <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-5  transition-all cursor-pointer">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-1"></div>
            <div className="col-span-11">
              {user && user.profileImageUrl && (
                <Image
                  className="rounded-full"
                  src={user.profileImageUrl}
                  alt="user-image"
                  height={50}
                  width={50}
                />
              )}
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full bg-transparent text-xl px-3 border-b border-slate-700"
                placeholder="What's happening?"
                rows={3}
              ></textarea>

              <div className="mt-2 flex justify-between items-center">
                <BiImageAlt onClick={handleSelectImage} className="text-xl" />
                <button
                  onClick={() => handleCreateTweet()}
                  className="bg-[#1d9bf0] font-semibold text-sm py-2 px-4 rounded-full"
                >
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {tweets &&
        tweets.map((tweet: Tweet) => <Feed key={tweet.id} data={tweet} />)}
    </Layout>
  );
}
