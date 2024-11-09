import BackgroundGradient from "@/components/BackgroundGradient";
import GitHubButton from "@/components/GitHubButton";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import GradientText from "@/components/GradientText";
import MovingBorderButton from "@/components/MovingBorderButton";
import StickyHeader from "@/components/StickyHeader";
import UnderlineAnimation from "@/components/UnderlineAnimation";

export default function Home() {
  return (
    <div className="min-h-screen bg-custom-gradient">
      <div className="container text-center py-14">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
          Just-Another-<span className="text-[#1E6AE1]">UI</span>-Library
        </h1>
        <p className="text-sm md:text-lg tracking-tighter pb-6">A collection of all my designed cards and components.</p>
        <GitHubButton />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center py-10">
          <StickyHeader />
        </div>
        <div className="flex items-center justify-center py-10">
          <GlassmorphicCard />
        </div>
        <div className="flex items-center justify-center py-10">
          <GradientText />
        </div>
        <div className="flex items-center justify-center py-10">
          <MovingBorderButton />
        </div>
        <div className="flex items-center justify-center py-10">
          <UnderlineAnimation />
        </div>
        <div className="flex items-center justify-center py-10">
          <div className="relative h-32 md:h-48 w-72 md:w-96 p-6 text-sm md:text-xl font-semibold flex items-center justify-center bg-black rounded-md shadow-gray-500 shadow-2xl overflow-hidden">
            {/* Background Gradient component as the background */}
            <BackgroundGradient
              color1="#06fff0"
              color2="#1700cd"
              id={5}
              position="bottom left"
              className="absolute inset-0 w-full h-full z-0" 
            />
            <div className="relative z-10 text-white">
              BackgroundGradient
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
