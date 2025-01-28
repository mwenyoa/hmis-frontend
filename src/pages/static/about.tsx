import React from "react";

type Props = {};

const AboutUs: React.FC<Props> = () => {
  return (
    <section className="h-full w-full bg-white flex flex-col my-8 py-8">
      {/* Introduction Section */}
      {/* Introduction Section */}
      <div className="about_intro w-[90%] mx-auto py-4 my-8 grid grid-cols-1 lg:grid-cols-3  rounded-md px-4">
        {/* Image Section */}
        <div className="about_image col-span-1 bg-[url('src/assets/doctor-2.jpg')] bg-cover bg-no-repeat h-32 sm:h-48 md:h-64 lg:h-72 xl:h-96 rounded shadow-lg"  data-aos="fade-up"></div>

        {/* Details Section */}
        <div className="about_details col-span-2 flex flex-col justify-center items-center py-4 mx-10 h-auto"  data-aos="fade-up">
          <div className="w-full h-36  justify-center items-center  p-4">
          <h2 className="w-full font-bold text-center my-2 text-lg sm:text-xl md:text-2xl text-indigo-400">
            Who We Are
          </h2>
          <p className="text-center text-sm sm:text-base md:text-lg">
            We are a team of professionals dedicated to providing excellent
            services.
          </p>
          </div>
           <div className="w-full h-full  grid lg:grid-cols-2 grid md:grid-cols-2 sm:grid-cols-1 gap-8 py-4 mx-4 h-auto"  data-aos="fade-up">
                {/* Mission Section */}
          <div className="cols-span-1 mission sm:w-full mt-6 px-4 shadow-lg rounded-md  bg-white py-5">
            <h3 className="font-bold text-center text-lg sm:text-xl md:text-2xl my-2">
              Our Mission
            </h3>
            <p className="text-center text-sm sm:text-base md:text-lg">
              To deliver high-quality, compassionate, and innovative services to
              improve lives.
            </p>
          </div>

          {/* Vision Section */}
          <div className=" cols-span-1 vision sm:w-full mt-6 px-4 shadow-lg rounded-md  bg-white py-5"  data-aos="fade-up">
            <h3 className="font-bold text-center text-lg sm:text-xl md:text-2xl my-2"  data-aos="fade-up">
              Our Vision
            </h3>
            <p className="text-center text-sm sm:text-base md:text-lg">
              To be a leader in providing exceptional care and creating a
              positive impact in the community.
            </p>
          </div>
           </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="about_services w-[95%] mx-auto py-4 my-4"  data-aos="fade-up">
        <h2 className="w-full font-bold text-center my-2 text-lg sm:text-xl md:text-2xl text-indigo-400"   data-aos="fade-up">
          Our Services
        </h2>
        <p className="text-center text-sm sm:text-base">
          We offer a wide range of services tailored to meet your needs.
        </p>
      </div>

      {/* Team Section */}
      <div className="about_services w-[95%] mx-auto py-4 my-4"  data-aos="fade-up">
        <h2 className="w-full font-bold text-center my-2 text-lg sm:text-xl md:text-2xl text-indigo-400"  data-aos="fade-up">
          Our Team
        </h2>
        <p className="text-center text-sm sm:text-base">
          Meet the professionals who make it all happen.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
