import { geistMono, geistSans } from "@/customfonts";
import { CarouselDemo } from "./Carousel";

export default function Hero () {
    return (
    <section className="w-screen flex justify-center items-center h-72 bg-green-400">
        <div className="w-11/12 flex flex-col justify-between items-center gap-5">
            <div>
                <p className={`${geistSans.className} text-7xl font-semibold text-animate`}>
                    NEWS & VIEWS
                </p>
            </div>
            <div>
                <p className={`${geistSans.className}`}>
                    Your one stop app for the latest developments in healthcare
                </p>
            </div>
            {/* <div className="flex justify-center items-center w-full h-full">
                <CarouselDemo />
            </div> */}
        </div>
    </section> 
)
}