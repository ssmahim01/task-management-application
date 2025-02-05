import Image from "next/image";
import Link from "next/link";
import { IoIosReturnLeft } from "react-icons/io";

export default function NotFound() {
    return (
        <div className="pt-10 pb-16">
            <figure className="flex justify-center items-center">
                <Image
                    src="/404.gif"
                    alt="GIF of error page"
                    width={550}
                    height={550}
                />
            </figure>

           <div className="space-y-3 -mt-8 flex flex-col justify-center items-center">
           <h2 className="md:text-4xl text-3xl text-gray-900 font-extrabold">Not Found Page: 404</h2>
            <p className="text-xl text-gray-600 font-semibold">Could not find requested resource</p>

            <Link href="/"><button className="mt-3 btn btn-outline rounded-full px-10 border border-gray-300 bg-white/60 shadow-sm font-bold flex gap-2 items-center"><IoIosReturnLeft className="text-2xl" /> <span className="text-lg">Return Home</span> </button></Link>
           </div>
        </div>
    )
}
