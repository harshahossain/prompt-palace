"use client";
//using browser capabilites so made it use Client
import { SessionProvider } from "next-auth/react";

export default function Provider({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
