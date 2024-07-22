"use client";

import FetchInfo from "@/components/fetch_info";
import { Frown, FrownIcon } from "lucide-react";
import { useSession } from "next-auth/react";

export default function Unauthorized() {
  const session = useSession();
  return (
    <div>
      <h1>Sem Acesso !!!</h1>
      <FrownIcon className="mt-2" size={40} />
      <br />
    </div>
  );
}
