"use client";
import Featured from "@/sections/featured";

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
    // <div className="w-full p-10">
    //   <div className="max-w-2xl mx-auto">
    //     <Card title="UI Component">
    //       <div className="grid grid-cols-4">
    //         <Button>Basic Button</Button>
    //         <Button>
    //           {" "}
    //           <FaHome />
    //           Basic Button
    //         </Button>

    //         <Button isIcon>
    //           <FaUser />
    //         </Button>

    //         <MagneticWrapper className="w-[350px]">
    //           <Button className="hover:bg-red-300">
    //             {" "}
    //             <FaUser />
    //             Magnetic Button
    //           </Button>
    //         </MagneticWrapper>
    //         <Button link="www.google.com">
    //           <IoIosSearch></IoIosSearch>
    //           Goole
    //         </Button>
    //       </div>
    //       <Input type="text" placeholder="Enter your name..." />
    //       <Input
    //         type="text"
    //         icon={<FaUser />}
    //         placeholder="Enter your Username..."
    //       />
    //       <TextAreaInput placeholder="home" />
    //       <LiveClock timeZone="India" />
    //     </Card>
    //     <MagneticWrapper className="w-[350px]">
    //       <ScrollDown />
    //     </MagneticWrapper>
    //   </div>
    // </div>
    <div>
      <Featured />
      {/* <Landing /> */}
    </div>
  );
}
