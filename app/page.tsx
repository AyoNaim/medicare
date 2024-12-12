import Hero from "@/components/Hero";
import { CarouselDemo } from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import NewsBlock from "@/components/NewsBlock";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Blog />
    </main>
  );
}
