import React, { useEffect } from "react";
import { assestsUrl } from "../urlSheet";
import Aos from "aos";
import "aos/dist/aos.css";

const Events = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="events text-white md:py-10 py-20 px-10 bg-zinc-800">
      <div className="container mx-auto">
        <h1 className="md:text-6xl text-5xl md:mb-7 mb-10 ">
          <span className="font-serif">"</span>The{" "}
          <span className="font-caesar">smell</span> of{" "}
          <span className="font-caesar">Success</span>...
          <span className="font-serif">"</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-10">
          {assestsUrl.events.map((event) => (
            <div
              data-aos="flip-down"
              key={event.id}
              className="eventCard p-6 bg-slate-700 rounded-lg shadow-lg bg-[url('bgCard.png')] bg-cover bg-no-repeat"
            >
              <div className=" rounded-xl">
                <img
                  src={event.banner}
                  alt={event.title}
                  className="mb-4 w-full h-56 overflow-hidden object-cover rounded-lg hover:scale-105 transition-all duration-100 "
                />

                <h3 className="text-3xl font-caesar text-yellow-600  mb-2">
                  {event.title}
                </h3>
                <p className="text-lg">{event.organizer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
