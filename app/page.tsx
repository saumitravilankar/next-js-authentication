"use client";
import Appbar from "./component/Appbar";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <>
      <Appbar />
      {JSON.stringify(session.data?.user)}
    </>
  );
}
