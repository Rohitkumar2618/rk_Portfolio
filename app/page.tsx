"use client";
import Card from "@/components/ui/card";
// import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    // <WaterWaveWrapper
    //   imageUrl=""
    //   dropRadius={3} // Passed as a number
    //   perturbance={3} // Passed as a number
    //   resolution={2048} // Passed as a number
    // >
    //   {() => <div className="h-screen"></div>}
    // </WaterWaveWrapper>
    <div className="w-full p-10">
      <div className="max-w-2xl mx-auto">
        <Card title="UI Component">
          <p>This is a child content inside the Card component</p>{" "}
          {/* Added sample child content */}
        </Card>
      </div>
    </div>
  );
}
