import { useState } from "react";
import hero from "../assets/img/hero/hero2.jpg";
import barberImage from "../assets/img/gallery/about2.jpg";
import { allimages } from "../../data";
import Marquee from "react-fast-marquee";
import sectionBg from '../assets/img/gallery/section-bg.jpg';
import testimonials from "../../src/../data"; // Adjust the path if necessary

export default function Service() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const services = [
    {
      title: "Stylish hair cut",
      desc: "Available be the majority have suffered alteration in some form...",
    },
    {
      title: "Cut & hair style",
      desc: "Available be the majority have suffered alteration in some form...",
    },
    {
      title: "Color & hair wash",
      desc: "Available be the majority have suffered alteration in some form...",
    },
  ];

  // Sample services data
  const service = [
    { name: "Trim your hair", price: "$50" },
    { name: "Hair Coloring", price: "$70" },
    { name: "Scalp Treatment", price: "$40" },
  ];

  return (
    <main className="font-sans">
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
          SERVICES
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
                {service.map((service, index) => (
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

          {/* For Beard Section */}
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
                {service.map((service, index) => (
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

      {/* Services Grid Section */}
      <section
        className="bg-cover bg-center py-12 md:py-24 text-white"
        style={{ backgroundImage: `url(${sectionBg})` }}
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-6 md:p-8 border border-gray-800 rounded-lg"
            >
              <div className="w-16 h-16 mx-auto mb-6 text-red-600">
                {/* SVG Icons */}
                {index === 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="63.527"
                    height="63.523"
                    viewBox="0 0 63.527 63.523"
                  >
                    {/* SVG Path for Icon 1 */}
                  </svg>
                )}
                {index === 1 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37.521"
                    height="63.15"
                    viewBox="0 0 37.521 63.15"
                  >
                    {/* SVG Path for Icon 2 */}
                  </svg>
                )}
                {index === 2 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="69.227"
                    height="63.529"
                    viewBox="0 0 69.227 63.529"
                  >
                    {/* SVG Path for Icon 3 */}
                  </svg>
                )}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee Section */}
      <section className="barbing-section">
        <div className="barbing-container">
          <Marquee autoFill={true} direction="left" speed={20}>
            {allimages.map((image) => {
              const { id, gallery } = image;
              return (
                <div key={id} className="w-[200px] h-[200px] md:w-[300px] md:h-[300px]">
                  <img src={gallery} alt="Gallery" className="w-full h-full object-cover" />
                </div>
              );
            })}
          </Marquee>
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
    </main>
  );
}