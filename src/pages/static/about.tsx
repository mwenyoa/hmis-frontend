import React from "react";

type Props = {};

const AboutUs: React.FC<Props> = () => {
  return (
    <section className="bg-white py-8">
      {/* Introduction Section */}
      <div className="about_intro w-[90%] mx-auto py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Image Section */}
        <div
          className="about_image bg-cover bg-no-repeat h-64 sm:h-72 lg:h-full rounded-lg"
          style={{ backgroundImage: "url('src/assets/doctor-2.jpg')" }}
          aria-label="Doctor Image"
        ></div>

        {/* Details Section */}
        <div className="about_details lg:col-span-2 flex flex-col gap-8">
          <div className="text-center bg-white shadow-md rounded-lg p-6">
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl">
              Who We Are
            </h2>
            <p className="text-sm sm:text-base md:text-lg mt-2">
              We are a team of professionals dedicated to providing excellent
              services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission Section */}
            <div className="mission bg-white shadow-md rounded-lg p-6">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base md:text-lg mt-2">
                To deliver high-quality, compassionate, and innovative services
                to improve lives.
              </p>
            </div>
            {/* Vision Section */}
            <div className="vision bg-white shadow-md rounded-lg p-6">
              <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base md:text-lg mt-2">
                To be a leader in providing exceptional care and creating a
                positive impact in the community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="about_services w-[90%] mx-auto py-8 text-center">
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl">
          Our Services
        </h2>
        <p className="text-sm sm:text-base mt-2">
          We offer a wide range of services tailored to meet your needs.
        </p>
      </div>

      {/* Team Section */}
      <div className="about_team w-[90%] mx-auto py-8 text-center">
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl">Our Team</h2>
        <p className="text-sm sm:text-base mt-2">
          Meet the professionals who make it all happen.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
