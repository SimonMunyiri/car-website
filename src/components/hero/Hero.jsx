import React from "react";
import car2 from "../../assets/car2.jpeg";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "../navbar/Navbar";
import { motion as Motion } from "framer-motion";

const Hero = () => {
  return (
    <main>
      <div className="bg-gradient-to-r from-blue-400 to-blue-900">
        <div className="container mx-auto px-4">
          {/* Navbar components here */}
          <Navbar />

          {/* Hero section */}
          <section className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[800px] text-white">
            {/* Text content */}
            <div className="text-center md:text-left space-y-8">
              <Motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                  duration: 1,
                }}
                className="text-5xl lg:text-7xl uppercase  font-bold leading-tight"
              >
                Honda <br />
                <span className="uppercase text-transparent text-outline">
                  Sports EV
                </span>
              </Motion.h1>
              <Motion.button
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                  duration: 0.5,
                }}
                className="outline-btn flex justify-center items-center gap-4 group"
              >
                Explore
                <FaArrowRight className="group-hover:translate-x-2 transition" />
              </Motion.button>

              {/* Features section here */}
              <div className="bg-black/40 space-y-2 p-6 lg-max-w-[350px] !mt-[60px]">
                <h1 className="uppercase text-xl">Vehicle Features</h1>
                <p className="text-xs leading-loose">
                  Electrified vehicles offer greater environmental efficiency by
                  reducing or eliminating driving emissions, while providing
                  instant torque for quick acceleration and a thrilling driving
                  experience. With a sporty design that emphasizes performance,
                  long-term battery warranties for peace of mind, and convenient
                  public charging options, EVs combine style, reliability, and
                  practicality. They also support environmental responsibility
                  and may lead to significant savings on fuel, maintenance, and
                  even potential tax incentives.
                </p>
              </div>
            </div>

            {/* Image section */}
            <div className="relative">
              <img
                src={car2}
                alt="Car Pic Hero"
                className="w-full max-w-md rounded h-[400px]"
              />

              {/* Glowing circle */}
              <div className="border-[20px] border-cyan-200 rounded-full h-[180px] w-[180px] absolute top-0 left-1/2 md:h-[300px] md:w-[300px] glowing-shadow"></div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Hero;
