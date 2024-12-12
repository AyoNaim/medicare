import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import Link from 'next/link'
  import NavLinks from "./NavLinks"
  import { geistMono } from "@/customfonts"
import Image from "next/image"
  
  export function MobileNav() {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Link href={'./'}>
              <Image src='/hamburger.svg' alt='hamburger' width={60}  height={60}/>
          </Link>
        </SheetTrigger>
        <SheetContent className="flex justify-end items-center">
          <SheetTitle className="hidden">modal</SheetTitle>
          <div className="h-full w-11/12 flex flex-col justify-start items-center">
            <div className="h-1/3 w-full flex justify-end">
              <NavLinks text="Get in touch" type="contact" icon="arrow.svg" className="hover:bg-red-500"/>
            </div>
            <div className={`h-2/3 w-full flex flex-col justify-evenly text-4xl ${geistMono.className}`}>
              <Link href={'./'}><p className="text-green-600">Home</p></Link>
              <Link href={'./'} className="transition-all duration-500 hover:text-green-500"><p>Services</p></Link>
              <Link href={'./'} className="hover:text-green-500"><p>News</p></Link>
              <Link href={'./'} className="hover:text-green-500"><p>Contact Us</p></Link>
            </div>
            <div className="h-1/3 w-full flex justify-start items-end">
              <div className="w-full h-2/3">
                <p className={`text-sm ${geistMono.className}`}>121, san francisco, california, united states</p>
                <p className={`text-sm ${geistMono.className}`}>ayonaim101@gmail.com</p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    )
  }