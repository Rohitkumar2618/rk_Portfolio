"use client";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import TextAreaInput from "@/components/ui/text-area";
// import WaterWaveWrapper from "@/components/visualEffects/water-wave-wrapper";
import { cn } from "@/lib/utils";
import { FaHome, FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

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
          <div className="grid grid-cols-4">
            <Button>Basic Button</Button>
            <Button>
              {" "}
              <FaHome />
              Basic Button
            </Button>

            <Button isIcon>
              <FaUser />
            </Button>
            <Button link="www.google.com">
              <IoIosSearch></IoIosSearch>
              Goole
            </Button>
          </div>
          <Input type="text" placeholder="Enter your name..." />
          <Input
            type="text"
            icon={<FaUser />}
            placeholder="Enter your Username..."
          />
          <TextAreaInput placeholder="home" />
        </Card>
      </div>
    </div>
  );
}
