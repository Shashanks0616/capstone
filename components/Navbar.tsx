import Link from "next/link";
import Image from "next/image";
import React from "react";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex justify-between p-3 px-10 border-b-[1px] shadow-sm">
      <div className="flex gap-10 items-center">
        <Image src="/logo.png" alt="logo" width={120} height={60} />
        <div className="hidden md:flex gap-6">
          <Link href="/components/Home">
            <span className="hover:bg-slate-600 p-2 rounded-md cursor-pointer transition-all">
              Home
            </span>
          </Link>
          <Link href="/components/ImageUpload">
            <span className="hover:bg-slate-600 p-2 rounded-md cursor-pointer transition-all">
              Image Upload
            </span>
          </Link>
          <Link href="/components/contactUs">
            <span className="hover:bg-slate-600 p-2 rounded-md cursor-pointer transition-all">
              Contact
            </span>
          </Link>
        </div>
      </div>
      {/* Assuming UserButton is another component */}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Navbar;
