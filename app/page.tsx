import GitHubButton from "@/components/GitHubButton";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import GradientText from "@/components/GradientText";
import StickyHeader from "@/components/StickyHeader";


export default function Home() {
  return (
    <div className="min-h-screen bg-custom-gradient">
      <div className="text-center py-14">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          Just-Another-<span className="text-[#1E6AE1]">UI</span>-Library
        </h1>
        <p className="text-md md:text-lg tracking-tighter pb-6">A collection of all my designed cards and components.</p>
        <GitHubButton />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center p-10">
          <StickyHeader />
        </div>
        <div className="flex items-center justify-center p-10">
          <GlassmorphicCard />
        </div>
        <div className="flex items-center justify-center p-10">
          <GradientText />
        </div>
      </div>
    </div>
  );
}
