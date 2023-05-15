"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export default function Account() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className=''>
        <button className=''>{session.user.name}</button>
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
