import React from "react";
import Event from "./Event";
function Events() {
  return (
    <>
      <div className="flex h-screen w-full items-center flex-col justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute right-0 bottom-0 -z-10 top-0 md:top-auto md:h-auto h-full object-cover"
        >
          <source src="bg_events.mp4" type="video/mp4" />
        </video>
        <img src="Events.png" />
        {/* <img src="Events.png" /> */}
      </div>
      {/* A little about */}
      <div className="md:h-screen min-h-[500px] flex flex-col w-[100%] items-center justify-evenly px-4 md:flex-row ">
        <div className="md:w-1/2 md:px-3">
          <div className="bg-[url('/Event-Page/imagebg.gif')] bg-cover bg-no-repeat">
            <img
              className=""
              src="https://www.fathom.events/wp-content/uploads/2019/08/white-cover6.png"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:px-3 text-slate-700  ">
          <h1 className="text-2xl py-2 font-bold">
            TechFestivals, TechFest, TechSummit.
          </h1>
          <p className="mb-3">
            Festival Haus, our Flagship Music and Entertainment brand, is where
            some of our biggest moments happen.
          </p>

          <h1 className="text-2xl py-2 font-bold">Something Something</h1>
          <p className="mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
            cupiditate sapiente esse incidunt? Perferendis rerum tenetur
            architecto illo inventore accusantium alias quia enim nesciunt cum,
            est impedit? Asperiores, porro aliquid!
          </p>

          <h1 className="text-2xl py-2 font-bold">Something Something</h1>
          <p className="mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
            cupiditate sapiente esse incidunt? Perferendis rerum tenetur
            architecto illo inventore accusantium alias quia enim nesciunt cum,
            est impedit? Asperiores, porro aliquid!
          </p>
        </div>
      </div>
      {/* Event Cards */}
      <Event />
    </>
  );
}

export default Events;
