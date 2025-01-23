import React from "react";
import { Link } from "react-router";
type Props = {};

export const Home: React.FC<Props> = () => {
  return (
    <section className="w-full h-screen">
      <div className="flex flex-col-reverse md:flex-row bg-white">
        {/* Text Section */}
        <div className="flex items-center justify-center text-center md:text-left px-6 md:px-12 py-8  md:py-16  gap-8 w-full md:w-1/2">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
              Your health matters to <span className="text-indigo-600">us</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-500">
              Effortless Doctor-Patient Connections: Schedule Appointments,
              Manage Consultations, and Streamline Healthcare Access with Ease
              and Efficiency!
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start mt-6 gap-4">
              <Link
                className="px-4 py-3 bg-indigo-500 text-white text-xs sm:text-sm font-semibold rounded hover:bg-indigo-600"
                to="/register"
              >
                Get Started
              </Link>
              <Link
                className="px-4 py-3 bg-gray-300 text-gray-900 text-xs sm:text-sm font-semibold rounded hover:bg-gray-400"
                to="/about"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="md:w-1/2 w-full sm:rounded-md px-6">
          <div
            className="h-64 md:h-full  w-full bg-[url('src/assets/doctor-1.jpg')] bg-contain bg-no-repeat bg-center"
          />
        </div>
      </div>
    </section>
  );
};
