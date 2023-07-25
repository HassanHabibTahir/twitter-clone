"use client";
import Image from "next/image";

import logo from "../../assets/logo.png";
import Navbar from "@/components/navbar";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
import { useQueryClient } from "@tanstack/react-query";
import { useCurrentUser } from "@/hooks/user";
export default function Layout(props: any) {
  const { user } = useCurrentUser();
  const queryClient = useQueryClient();
  const handleLogin = useCallback(
    async (ctr: CredentialResponse) => {
      const googleToken = ctr.credential;
      console.log(`google token: ${googleToken}`);
      if (!googleToken) return toast.error(`Google token is not found!`);
      const { verifyGoogleToken }: { verifyGoogleToken: any } =
        await graphqlClient.request(verifyUserGoogleTokenQuery, {
          token: googleToken,
        });
      toast.success(`Verified Successfully`);
      if (verifyGoogleToken)
        window.localStorage.setItem("__twitter_token", verifyGoogleToken);
      await queryClient.invalidateQueries(["curent-user"]);
    },
    [queryClient]
  );

  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-[100%]">
        <div className="col-span-3 border-1">
          <Image
            src={logo}
            alt=""
            className="w-14 mx-auto hover:bg-gray-300 rounded-full p-1"
          />
          <Navbar />
        </div>
        <div className="col-span-10 sm:col-span-5 border-r-[1px] border-l-[1px] h-screen overflow-scroll border-gray-600">
          {props.children}
        </div>
        <div className="col-span-3 p-4">
          <div className="flex justify-center">
            {!user ? (
              <div className="border p-3 bg-slate-500 rounded-lg">
                <GoogleLogin
                  onSuccess={handleLogin}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
