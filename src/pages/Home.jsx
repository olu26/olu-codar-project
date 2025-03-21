import heroimage from "../assets/img/hero/h1_hero1.jpg";
import about1 from "../assets/img/gallery/about1.jpg";
import bab1 from "../assets/img/gallery/barber1.jpg";
import bab2 from "../assets/img/gallery/barber2.jpg";
import bab3 from "../assets/img/gallery/barber3.jpg";
import bab4 from "../assets/img/gallery/barber4.jpg";
import bab5 from "../assets/img/gallery/barber5.jpg";
import bab6 from "../assets/img/gallery/barber6.jpg";
import Marquee from "react-fast-marquee";
import barberImage from "../assets/img/gallery/about2.jpg";
import { useState } from "react";
import sectionBg from '../assets/img/gallery/section-bg.jpg';
import "swiper/css";
import "swiper/css/pagination";
import { allimages } from "../../data";
import testimonials from "../../src/../data";

const Home = () => {
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

  const priceItems = [
    "Special Beard Treatment",
    "Special Beard Treatment",
    "Color your Beard",
    "Wax your Beard",
    "Wax your Beard",
  ];
  const service = [
    { name: "Trim your Hair", price: "$40" },
    { name: "Special Beard Treatment", price: "$40" },
    { name: "Color your Beard", price: "$40" },
    { name: "Wax your Beard", price: "$40" },
  ];

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

  

  return (
    <main className="bg-white">
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
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
        WE&apos;RE THE
        <br />
        LAST OF
        <br />
        BREED.
      </h1>
      <p className="text-lg md:text-xl text-white mb-8">Achieve your Dream Style</p>
      <button className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition">
        Book Now
      </button>
    </div>

    {/* Right Section: Image (Hidden on Mobile) */}
    <div className="hidden md:block w-full md:w-1/2 h-full relative">
      <img
        src={heroimage}
        alt="Barber hero"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>
      {/* About Section */}
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
                    {/* Checkmark SVG Path */}
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

      {/* Pricing Gallery */}
      <section className="bg-white py-12 md:py-24">
        <div className="w-full flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-[50%] grid grid-cols-2 md:grid-cols-3 grid-rows-2">
            {/* First row */}
            <div className="overflow-hidden">
              <img
                src={bab1}
                alt="Beard trimming closeup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={bab2}
                alt="Beard scissors closeup"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={bab3}
                alt="Side profile haircut"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Second row */}
            <div className="overflow-hidden">
              <img
                src={bab4}
                alt="Black and white beard portrait"
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={bab5}
                alt="Hair trimming side view"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={bab6}
                alt="Beard styling closeup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-[45%] px-6 md:px-12 flex flex-col gap-5 py-3">
            <div className="h-[5px] w-[50px] bg-[#FB0000]"></div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">OUR TOP PRICES</h2>
              <hr />
            </div>
            {priceItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b border-gray-200 py-4"
              >
                <h4 className="font-medium">{item}</h4>
                <p>
                  From <span className="font-bold text-red-600">$40</span>
                </p>
              </div>
            ))}
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
                {service.map((service, index) => (
                  <div
                    key={index}
                    className="flex justify-between px-6 py-3 border-b"
                  >
                    <p>{service.name}</p>
                    <p className="text-red-600 font-bold">
                      From {service.price}
                    </p>
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
                {service.map((service, index) => (
                  <div
                    key={index}
                    className="flex justify-between px-6 py-3 border-b"
                  >
                    <p>{service.name}</p>
                    <p className="text-red-600 font-bold">
                      From {service.price}
                    </p>
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

      {/* Services */}
      <section
        className="bg-cover bg-center py-12 md:py-24 text-white"
        style={{ backgroundImage: `url(${sectionBg})` }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-8 border border-gray-800 rounded-lg"
            >
              <div className="w-16 h-16 mx-auto mb-6 text-red-600">
                {/* Service Icons */}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
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
                  <img src={gallery} className="w-full h-full object-cover" />
                </div>
              );
            })}
          </Marquee>
        </div>
      </section>

      {/* Testimonials */}
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
};

export default Home;