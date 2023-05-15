"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Account() {
  const { data, status } = useSession();
  if (status === "loading") {
    return <div className=''>Loading...</div>;
  }

  if (data && data.user) {
    return (
      <div className=''>
        <button className='' onClick={() => signOut()}>
          {data.user.email}
        </button>
      </div>
    );
  }

  return (
    <div className=''>
      <button className='' onClick={() => signIn()}>
        Sign in
      </button>
    </div>
  );
}
