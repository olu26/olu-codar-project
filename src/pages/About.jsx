import about1 from "../assets/img/gallery/about1.jpg";
import hero from "../assets/img/hero/hero1.jpg";
import barberImage from "../assets/img/gallery/about2.jpg";
import { useState } from "react";
import testimonials from "../../src/../data";


const About = () => {
  const aboutPoints = [
    "Be the majority have suffered alteration in some form, by injected humour.",
    "Psum available be the majority have suffered alteration in some form, by injected humour.",
    "Available be the majority have suffered alteration in some form, by injected humour.",
    "Humour available be the majority have suffered alteration in some form, by injected.",
  ];
  const [openSection, setOpenSection] = useState("hair");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const services = [
    { name: "Trim your Hair", price: "$40" },
    { name: "Special Beard Treatment", price: "$40" },
    { name: "Color your Beard", price: "$40" },
    { name: "Wax your Beard", price: "$40" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] bg-[#1f0101]">
  <div className="h-[60vh] flex flex-col md:flex-row items-center">
    {/* Left Section: Text Content */}
    <div className="w-full md:w-1/2 px-6 md:pl-20 py-10 md:py-20 text-center md:text-left">
      <div className="text-red-600 w-12 h-12 mb-8 mx-auto md:mx-0">
        <svg
          id="scissors"
          xmlns="http://www.w3.org/2000/svg"
          width="48.809"
          height="48.809"
          viewBox="0 0 48.809 48.809"
        >
          {/* Scissors SVG Path */}
        </svg>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
        ABOUT US
      </h1>
    </div>

    {/* Right Section: Image (Hidden on Mobile) */}
    <div className="hidden md:block w-full md:w-1/2 h-full relative">
      <img
        src={hero}
        alt="Barber hero"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
      {/* About Area */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <div className="space-y-8">
            {aboutPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                  >
                    <g id="right-arrow" transform="translate(-300 -1077)">
                      <circle
                        id="Ellipse_1"
                        data-name="Ellipse 1"
                        cx="30"
                        cy="30"
                        r="30"
                        transform="translate(300 1077)"
                        fill="#fb0000"
                        opacity="0.06"
                      />
                      <path
                        id="Icon_awesome-check"
                        data-name="Icon awesome-check"
                        d="M6.576,18.732.284,12.439a.968.968,0,0,1,0-1.369L1.653,9.7a.968.968,0,0,1,1.369,0L7.26,13.94,16.34,4.861a.968.968,0,0,1,1.369,0L19.078,6.23a.968.968,0,0,1,0,1.369L7.945,18.732A.968.968,0,0,1,6.576,18.732Z"
                        transform="translate(320.319 1095.204)"
                        fill="#fb0000"
                      />
                    </g>
                  </svg>
                </div>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
          <img
            src={about1}
            alt="Barber hero"
            className="w-full h-full object-cover"
          />
          <div className="space-y-8 py-10 flex justify-between flex-col">
            <div className="h-[5px] w-[50px] bg-[#FB0000]"></div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">ABOUT OUR STORY</h2>
            <p className="text-gray-700 mb-8">
              There are many variations of passages of Lorem Ipsum available be
              the majority have suffered alteration in some form, by injected
              humour or randomised words.
            </p>
            <button className="border-red-600 border-2 text-red-600 px-5 py-3 text-lg font-medium transition w-[180px]">
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-10 items-center">
        {/* Left: Services List */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">ALL WE DO FOR YOU</h1>

          {/* For Hair Section */}
          <div className="border">
            <button
              className={`w-full text-left px-6 py-4 font-bold text-white ${
                openSection === "hair" ? "bg-red-600" : "bg-black"
              }`}
              onClick={() => toggleSection("hair")}
            >
              For Hair
            </button>
            {openSection === "hair" && (
              <div className="bg-white">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex justify-between px-6 py-3 border-b"
                  >
                    <p>{service.name}</p>
                    <p className="text-red-600 font-bold">From {service.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* For Beard Section (Same Services) */}
          <div className="border mt-2">
            <button
              className={`w-full text-left px-6 py-4 font-bold text-white ${
                openSection === "beard" ? "bg-red-600" : "bg-black"
              }`}
              onClick={() => toggleSection("beard")}
            >
              For Beard
            </button>
            {openSection === "beard" && (
              <div className="bg-white">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex justify-between px-6 py-3 border-b"
                  >
                    <p>{service.name}</p>
                    <p className="text-red-600 font-bold">From {service.price}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={barberImage}
            alt="Barber"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16">
            CUSTOMERS SAY ABOUT US
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                {/* Star Ratings */}
                <div className="flex mb-4 text-red-600">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="mb-6 text-gray-700">{testimonial.text}</p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-300"
                  />
                  <p className="font-medium">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;