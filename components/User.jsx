import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function User({ className }) {
  const { data: session } = useSession();
  const router = useRouter();
  if (session) {
    return (
      <>
        <img
          src={session?.user?.image}
          onClick={() => signOut()}
          alt="User"
          className={`h-10 w-10 rounded-full  hover:bg-gray-200 cursor-pointer p-1 ${className}`}
        />
      </>
    );
  }
  return (
    <>
      <button
        onClick={() => router.push("/auth/signin")}
        className={`bg-blue-500 text-white px-6 py-2 text-sm font-medium hover:brightness-105 rounded-md hover:shadow-md ${className}`}
      >
        Sign in
      </button>
    </>
  );
}
