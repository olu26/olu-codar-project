import about1 from "../assets/img/gallery/about1.jpg";
import hero from "../assets/img/hero/hero1.jpg";
import barberImage from "../assets/img/gallery/about2.jpg";
import { useState } from "react";




const About= () => {
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
      <div className="flex h-[65vh] bg-[#1f0101]">
              {/* Left Section: Gallery Text */}
              <div className="w-full flex items-center justify-center">
                <h1 className="text-5xl font-bold text-white">Gallery</h1>
              </div>
      
              {/* Right Section: Image */}
              <div className="w-full h-full relative">
                <img
                  src={hero} // Make sure the path is correct
                  alt="Gallery Hero"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

      {/* About Area */}
        <section className="py-24">
              <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8 px-7">
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
                  <h2 className="text-4xl font-bold mb-6">ABOUT OUR STORY</h2>
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
        <h1 className="text-4xl font-bold mb-6">ALL WE DO FOR YOU</h1>

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
                <div key={index} className="flex justify-between px-6 py-3 border-b">
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
                <div key={index} className="flex justify-between px-6 py-3 border-b">
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
        <img src={barberImage} alt="Barber" className="w-full h-auto object-cover rounded-lg shadow-md" />
      </div>
    </section>
      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Customers Say About Us</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Wilma Mumduya', quote: 'Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.' },
            { name: 'Jimmy Changa', quote: 'Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.' },
            { name: 'Jane Doe', quote: 'Consectetur adipiscing elit, sed do eiusmod tempor dunt ulter labore et dolore magna.' }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              <p className="italic text-gray-600 mb-4">{testimonial.quote}</p>
              <div className="font-semibold text-gray-800">{testimonial.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;