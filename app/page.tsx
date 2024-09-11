import { Merriweather } from "next/font/google";
import Image from "next/image";
import { SketchButton } from "./components/SketchButton";
import { SketchImage } from "./components/SketchImage";
import { VerticalImageSlider } from "./components/VerticalImageSlider";
import { BrandNameBackground } from "./components/BrandNameBackground";

const merriweather = Merriweather({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-merriweather',
});

const trendingFashionImages = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=96&h=96&fit=crop",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=96&h=96&fit=crop",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=96&h=96&fit=crop",
  "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=96&h=96&fit=crop",
];

const othersWearingImages = [
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=96&h=96&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=96&h=96&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=96&h=96&fit=crop",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=96&h=96&fit=crop",
];

export default function Home() {
  return (
    <div className="sketchbook-page min-h-screen p-8 font-handwritten relative overflow-hidden flex">
      <BrandNameBackground />
      
      <div className="fixed left-0 top-0 h-full z-10">
        <VerticalImageSlider images={trendingFashionImages} title="Trending Fashion" side="left" direction="up" />
      </div>
      
      <main className="flex-1 flex flex-col gap-8 items-center relative z-10 mx-auto px-32">
        <h1 className="text-5xl font-bold sketch-title">Sketchbook</h1>
        <p className="text-xl text-center max-w-2xl sketch-text">
          Welcome to your digital fashion sketchbook. Unleash your creativity and bring your designs to life!
        </p>
        <div className="sketch-image-frame">
          <SketchImage
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=400&fit=crop&crop=focalpoint"
            alt="Fashion sketch"
            width={300}
            height={400}
          />
        </div>
        <SketchButton href="/start-designing">Start Designing</SketchButton>
        <div className="mt-8 text-center">
          <p className="text-sm sketch-text">Flip through the pages to explore more</p>
          <span className="text-2xl animate-bounce">↓</span>
        </div>
      </main>

      <div className="fixed right-0 top-0 h-full z-10">
        <VerticalImageSlider images={othersWearingImages} title="What Others Are Wearing" side="right" direction="down" />
      </div>
      
      <div className="watercolor-splash"></div>
      <div className="watercolor-splash" style={{top: 'auto', bottom: '-50px', right: '-50px', left: 'auto', transform: 'rotate(15deg)', backgroundImage: 'radial-gradient(circle, rgba(78, 205, 196, 0.1) 0%, rgba(78, 205, 196, 0) 70%)'}}></div>
    </div>
  );
}
