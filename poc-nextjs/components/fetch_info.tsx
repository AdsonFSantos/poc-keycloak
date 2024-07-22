"use client";

import { SessionContextValue, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

// declare interface props
export interface FetchInfoProps {
  session: SessionContextValue;
  id_route: number;
}

export default function FetchInfo({ session, id_route }: FetchInfoProps) {
  const [response, setResponse] = useState<null | Response>(null);
  const [data, setData] = useState<any>();

  useEffect(() => {
    if (!session.data?.accessToken) return;
    console.log("fetching data");
    const fetchData = async () => {
      const res = await fetch(`http://host-dev:5000/api/check/${id_route}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.data?.accessToken}`,
        },
        cache: "no-cache",
      });
      setResponse(res);
      if (res.status === 200) setData((await res.json())["message"]);
    };
    fetchData();
  }, [session]);
  console.log("session", session) === null;

  return (
    <div>
      <h1>
        {`Dados Rota ${id_route}: `}
        {session.status !== "unauthenticated" && response === null && "Loading"}
        {response?.status === 200 && data}
        {session.status === "unauthenticated" && "Não logado"}
        {response?.status === 403 && "Logado mas sem acesso"}
      </h1>
    </div>
  );
}
