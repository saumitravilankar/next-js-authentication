"use client";
import { signIn, signOut } from "next-auth/react";

const Appbar = () => {
  return (
    <div>
      <button onClick={() => signIn()}>Sign In</button>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default Appbar;
