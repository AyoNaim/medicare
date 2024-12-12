import { geistMono } from "@/customfonts";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

export default function Navbar () {
    return (
        <section className="w-screen flex justify-center items-center h-24 bg-green-400">
            <div className="flex justify-between items-center w-11/12">
                <div className='w-1/3'>
                    <Image src={'/logo.svg'} alt="logo" width={120} height={80} />
                </div>
                <div className='w-2/3 md:flex md:justify-between md:items-center gap-3 hidden'>
                    <Link href={'./about'}><p className={`${geistMono.className} font-semibold hover:text-purple-400`}>ABOUT US</p></Link>
                    <Link href={'./work'}><p className={`${geistMono.className} font-semibold hover:text-purple-400`}>WORK</p></Link>
                    <Link href={'./services'}><p className={`${geistMono.className} font-semibold hover:text-purple-400`}>SERVICES</p></Link>
                    <Link href={'./news'}><p className={`${geistMono.className} font-semibold hover:text-purple-400`}>NEWS</p></Link>
                    <Link href={'./contact'}><p className={`${geistMono.className} font-semibold hover:text-purple-400`}>CONTACT US</p></Link>
                </div>
                <div className="md:hidden">
                    <MobileNav />
                </div>
            </div>
        </section>
    )
}