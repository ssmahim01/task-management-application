import Link from "next/link";
import { FaHome, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { SiFacebook } from "react-icons/si";
import { IoMdAddCircle } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="footer footer-center gap-y-8 bg-base-200 rounded p-8 text-gray-800">
        <h2 className="md:text-3xl text-2xl font-bold">
          Task Management
        </h2>

      <nav className="md:grid md:grid-flow-col flex flex-wrap justify-center items-center gap-6 *:font-semibold">
        <Link href="/">
          <p className="border border-gray-300 hover:bg-neutral hover:text-white rounded-md px-3 py-1 flex gap-2 items-center">
            <FaHome className="text-lg" /> <span className="font-bold">Home</span>
          </p>
        </Link>

        <Link href="/add-tasks">
          <p className="border border-gray-300 hover:bg-neutral hover:text-white rounded-md px-3 py-1 flex gap-2 items-center">
            <IoMdAddCircle className="text-lg" /> <span className="font-bold">Add Tasks</span>
          </p>
        </Link>

        <Link href="/manage-tasks">
        <p className="border border-gray-300 hover:bg-neutral hover:text-white rounded-md px-3 py-1 flex gap-2 items-center">
            <MdMenuBook className="text-lg" /> <span className="font-bold">Manage Tasks</span>
        </p>
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 *:hover:cursor-pointer">
          <Link
            href="https://www.facebook.com/ssmahim"
            target="_blank"
            className="text-cyan-600 bg-gray-300 p-1 text-2xl rounded-full"
          >
            <SiFacebook />
          </Link>

          <Link
            href="https://www.instagram.com/iammz01"
            target="_blank"
            className="text-rose-500 bg-gray-300 p-1 text-2xl rounded-full"
          >
            <FaInstagram />
          </Link>

          <Link
            href="https://www.youtube.com/@MahimZayN"
            target="_blank"
            className="text-rose-500 bg-gray-300 p-1 text-2xl rounded-full"
          >
            <FaYoutube />
          </Link>

          <Link
            href="https://github.com/ssmahim01"
            target="_blank"
            className="text-gray-800 bg-gray-300 p-1 text-2xl rounded-full"
          >
            <FaGithub />
          </Link>
        </div>
      </nav>
      <aside>
        <p className="text-gray-700 font-semibold">
          Copyright © {new Date().getFullYear()} - All right reserved by
          Task Management
        </p>
      </aside>
    </footer>
  );
}
