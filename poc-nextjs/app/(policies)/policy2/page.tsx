"use client";

import FetchInfo from "@/components/fetch_info";
import { useSession } from "next-auth/react";

export default function Policy2() {
  const session = useSession();
  return (
    <div>
      <h1>Policy 2</h1>
    </div>
  );
}
