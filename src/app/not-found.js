import Image from "next/image";
import Link from "next/link";
import { IoIosReturnLeft } from "react-icons/io";

export default function NotFound() {
    return (
        <div className="py-20 flex flex-col justify-center items-center">
            <figure className="w-full h-full pb-5">
                <Image
                    src="/404.gif"
                    alt="GIF of error page"
                    width={320}
                    height={280}
                />
            </figure>

            <h2 className="md:text-4xl text-3xl text-gray-900 font-extrabold pb-4">Not Found Page: 404</h2>
            <p className="text-xl text-gray-600 font-semibold pb-4">Could not find requested resource</p>

            <Link href="/"><button className="btn btn-outline rounded-full px-10 border border-gray-300 bg-white/60 shadow-sm font-bold flex gap-2 items-center"><IoIosReturnLeft className="text-2xl" /> <span className="text-lg">Return Home</span> </button></Link>
        </div>
    )
}
