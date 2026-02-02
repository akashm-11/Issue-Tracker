"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const pathName = usePathname();
  const [isThere, setIsThere] = useState(false);
  return (
    <nav>
      <div className="flex mb-5 px-5 py-3 bg-gray-200 gap-6 items-center">
        <Link href={"/"}>
          <AiFillBug className="hover:text-rose-400" />
        </Link>
        <Link href={"/"}>
          {pathName === "/" ? (
            <p className="text-rose-600">Dashboard</p>
          ) : (
            <p className="hover:text-rose-600">Dashboard</p>
          )}
        </Link>

        <Link href={"/issues"}>
          {pathName === "/issues" ? (
            <p className="text-rose-600">Isuues</p>
          ) : (
            <p className="hover:text-rose-600">Isuues</p>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
