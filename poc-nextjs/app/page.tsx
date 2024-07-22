"use client"
import FetchInfo from "@/components/fetch_info";
import Profile from "@/components/profile";
import { decodeJWT } from "@/lib/session";
import { useSession } from "next-auth/react";

export default function Home() {
  // const user = await getCurrentUser();
  const session = useSession();

  return (
    <div className="flex flex-row items-start">
      <h1>Home</h1>
      {/* <h1>Profile: {JSON.stringify(session)}</h1> */}
      {/* {session && <h1>Profile: {JSON.stringify(decodeJWT(session.data!))}</h1>} */}
      <br />
      <div>
        <FetchInfo session={session} id_route={0} />
        <FetchInfo session={session} id_route={1} />
        <FetchInfo session={session} id_route={2} />
        <FetchInfo session={session} id_route={3} />
      </div>
    </div>
  );
}
