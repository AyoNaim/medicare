import Hero from "@/components/Hero";
import { CarouselDemo } from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeroSlider from "@/components/Articles";
import NewsBlock from "@/components/NewsBlock";
import Articles from "@/components/Articles";
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Articles />
    </main>
  );
}
