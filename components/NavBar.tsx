import Link from "next/link";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav>
      <div className="flex mb-5 px-5 py-3 bg-gray-200 gap-6 items-center">
        <Link href={"/"}>
          <AiFillBug className="hover:text-rose-400" />
        </Link>
        <Link href={"/dashboard"}>
          <p className="hover:text-rose-600">Dashboard</p>
        </Link>
        <Link href={"/issues"}>
          <p className="hover:text-rose-600">Isuues</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
