import GlassmorphicCard from "@/components/GlassmorphicCard";
import GradientText from "@/components/GradientText";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 items-center bg-custom-gradient">
      <div className="flex items-center justify-center p-4">
        <Header />
      </div>
      <div className="flex items-center justify-center p-4">
        <GlassmorphicCard />
      </div>
      <div className="flex items-center justify-center p-4">
        <GradientText />
      </div>
    </div>
  );
}
