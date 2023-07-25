"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";

const Button = () => {
  const router = useRouter();
  return (
    <div>
      <BsArrowLeftShort
        className="text-4xl cursor-pointer"
        onClick={() => router.back()}
      />
    </div>
  );
};

export default Button;
