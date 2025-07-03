import { NAVBAR_HEIGHT } from "@/lib/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function NavBar() {
  const appName = process.env.NEXT_PUBLIC_APP_NAME;
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full z-50 shadow-xl"
        style={{ height: `${NAVBAR_HEIGHT}px` }}
      >
        <div className="flex justify-between items-center w-full py-3 px-8 bg-primary text-white">
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              href="/"
              className="cursor-pointer hover:!text-primary-300"
              scroll={false}
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <div className="text-xl font-bold">{appName || "app.name"}</div>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/signin">
              <button className="px-4 py-2 rounded-md bg-white text-primary hover:bg-gray-100">
                Sign In
              </button>
            </Link>
            <Link href="/signup">
              <button className="px-4 py-2 rounded-md bg-white text-primary hover:bg-gray-100">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
