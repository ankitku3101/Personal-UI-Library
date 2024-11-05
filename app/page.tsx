import GlassmorphicCard from "@/components/GlassmorphicCard";
import GradientText from "@/components/GradientText";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen grid grid-cols-2 items-center p-20 bg-custom-gradient">
      <div className="flex items-center justify-center">
        <GradientText />
      </div>
      <div className="flex items-center justify-center">
        <GlassmorphicCard />
      </div>
    </div>
  );
}
