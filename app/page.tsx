"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import PageName from "./components/pagename";

export default function Home() {

  return (
    <div>
      <PageName PageName="Home" />
    </div>
  );

}
