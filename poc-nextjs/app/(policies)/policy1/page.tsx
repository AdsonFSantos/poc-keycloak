"use client";

import FetchInfo from "@/components/fetch_info";
import { useSession } from "next-auth/react";

export default function Policy1() {
  const session = useSession();
  return (
    <div>
      <h1>Policy 1</h1>
    </div>
  );
}
