import Header from "@/components/navigation/Header/header";
import FancyButton from "@/components/ui/fancyButton";
import LiveClock from "@/components/ui/live-clock";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import React from "react";

function Landing() {
  return (
    <div className="relative h-screen p-8 overflow-hidden">
      {/* Header */}
      <Header />

      {/* show magnetic fancy button on small screen and hide on md screen */}
      <div className="absolute  bottom-36 left-10 z-20  md:hidden ">
        <MagneticWrapper className="w-[320px]">
          <FancyButton text="Let's talk" />
        </MagneticWrapper>
      </div>
      {/* LiveClock */}
      <div className="absolute right-10 bottom-10 ">
        <LiveClock timeZone="India" />
      </div>
    </div>
  );
}

export default Landing;
