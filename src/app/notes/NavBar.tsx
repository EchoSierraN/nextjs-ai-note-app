import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { UserButton } from "@clerk/nextjs";

export default function NavBar() {
  return (
    <div className="p-4 shadow">
      <div className="m-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
        <Link href="/notes" className="flex items-center gap-1">
          <Image src={logo} alt="Flowbrain logo" width={40} height={40} />
          <span className="font-bold">FlowBrain</span>
        </Link>
        <div className="flex items-center gap-2">
          <UserButton />
        </div>
      </div>
    </div>
  );
}
