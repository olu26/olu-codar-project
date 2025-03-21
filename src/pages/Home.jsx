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

  const testimonials = [
    {
      name: "Wilma Mumduya",
      text: "Consectetur adipiscing elit, sed do eiusmod tempor...",
    },
    {
      name: "Jimmy Changa",
      text: "Consectetur adipiscing elit, sed do eiusmod tempor...",
    },
    {
      name: "Wilma Mumduya",
      text: "Consectetur adipiscing elit, sed do eiusmod tempor...",
    },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] bg-[#1f0101]">
        <div className="h-[80vh] flex items-center">
          <div className="w-1/2 pl-20 py-20">
            <div className="text-red-600 w-12 h-12 mb-8">
              <svg
                id="scissors"
                xmlns="http://www.w3.org/2000/svg"
                width="48.809"
                height="48.809"
                viewBox="0 0 48.809 48.809"
              >
                <g id="Group_69" data-name="Group 69" transform="translate(0)">
                  <g id="Group_68" data-name="Group 68">
                    <path
                      id="Path_302"
                      data-name="Path 302"
                      d="M32.047,23.387,48.579,6.855a.787.787,0,0,0,.231-.557V.787A.787.787,0,0,0,48.022,0H44.873a.787.787,0,0,0-.557.231L25.535,19.012a5.47,5.47,0,0,0-2.261,0L4.493.231A.787.787,0,0,0,3.936,0H.787A.787.787,0,0,0,0,.787V6.3a.787.787,0,0,0,.231.557L16.763,23.387a.787.787,0,0,0,.557.231h1.637a5.246,5.246,0,0,0,.055,1.918l-8.132,8.131a7.759,7.759,0,0,0-3.008-.6,7.872,7.872,0,1,0,7.872,7.872,7.759,7.759,0,0,0-.6-3.008L23.274,29.8a5.469,5.469,0,0,0,1.13.118,5.525,5.525,0,0,0,1.131-.117l8.131,8.131a7.759,7.759,0,0,0-.6,3.008,7.872,7.872,0,1,0,7.872-7.872,7.759,7.759,0,0,0-3.008.6L29.8,25.536a5.269,5.269,0,0,0,.054-1.919H31.49A.787.787,0,0,0,32.047,23.387Zm-14.4-1.344L1.574,5.972v-4.4H3.61L4.791,2.755,3.38,4.167,4.493,5.28,5.9,3.869,7.153,5.117,5.741,6.529,6.855,7.642,8.266,6.23,9.515,7.479,8.1,8.89,9.216,10l1.412-1.412,1.249,1.249-1.412,1.412,1.113,1.113,1.412-1.412L14.238,12.2l-1.412,1.412,1.113,1.113,1.412-1.412L16.6,14.564l-1.412,1.412L16.3,17.089l1.412-1.412,1.249,1.249L17.55,18.337l1.113,1.113,1.412-1.412,1.591,1.591a5.538,5.538,0,0,0-2.233,2.413Zm-4,15.16a.787.787,0,0,0-.146.911,6.231,6.231,0,0,1,.675,2.823,6.3,6.3,0,1,1-6.3-6.3,6.231,6.231,0,0,1,2.823.675.787.787,0,0,0,.911-.146l8.024-8.024a5.538,5.538,0,0,0,2.036,2.036ZM37.2,35.167a.787.787,0,0,0,.911.146,6.231,6.231,0,0,1,2.823-.675,6.3,6.3,0,1,1-6.3,6.3,6.231,6.231,0,0,1,.675-2.823.787.787,0,0,0-.146-.911l-8.835-8.835a.787.787,0,0,0-.787-.2,3.936,3.936,0,1,1,2.624-2.624.787.787,0,0,0,.2.787ZM29.376,22.043a5.538,5.538,0,0,0-2.233-2.413L45.2,1.574h2.036v4.4L31.164,22.043Z"
                      transform="translate(0 0)"
                      fill="#fb0000"
                    />
                    <path
                      id="Path_303"
                      data-name="Path 303"
                      d="M372.724,377.447A4.723,4.723,0,1,0,368,372.724,4.723,4.723,0,0,0,372.724,377.447Zm0-7.872a3.149,3.149,0,1,1-3.149,3.149A3.149,3.149,0,0,1,372.724,369.575Z"
                      transform="translate(-331.787 -331.787)"
                      fill="#fb0000"
                    />
                    <path
                      id="Path_304"
                      data-name="Path 304"
                      d="M36.723,368a4.723,4.723,0,1,0,4.723,4.724A4.723,4.723,0,0,0,36.723,368Zm0,7.872a3.149,3.149,0,1,1,3.149-3.149A3.149,3.149,0,0,1,36.723,375.872Z"
                      transform="translate(-28.851 -331.787)"
                      fill="#fb0000"
                    />
                    <path
                      id="Path_305"
                      data-name="Path 305"
                      d="M226.362,224a2.362,2.362,0,1,0,2.362,2.362A2.362,2.362,0,0,0,226.362,224Zm0,3.149a.787.787,0,1,1,.787-.787A.787.787,0,0,1,226.362,227.149Z"
                      transform="translate(-201.957 -201.957)"
                      fill="#fb0000"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6">
              WE&apos;RE THE
              <br />
              LAST OF
              <br />
              BREED.
            </h1>
            <p className="text-xl text-white mb-8">Achieve your Dream Style</p>
            <button className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition">
              Book Now
            </button>
          </div>
          <div className="w-1/2 h-full relative">
            <img
              src={heroimage}
              alt="Barber hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
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

      {/* Pricing Gallery */}
      <section className="bg-white py-24">
        <div className="w-full flex gap-5">
          <div className="w-[50%] grid grid-cols-3 grid-rows-2">
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
          <div className="w-[45%] px-12 flex flex-col gap-5 py-3">
            <div className="h-[5px] w-[50px] bg-[#FB0000]"></div>
            <div>
              <h2 className="text-4xl font-bold mb-5">OUR TOP PRICES</h2>
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
        className="bg-cover bg-center py-24 text-white"
        style={{ backgroundImage: `url(${sectionBg})` }}
      >
        {" "}
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-8 border border-gray-800 rounded-lg"
            >
              <div className="w-16 h-16 mx-auto mb-6 text-red-600">
                {index === 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="63.527"
                    height="63.523"
                    viewBox="0 0 63.527 63.523"
                  >
                    <g id="services1" transform="translate(0.503 0.5)">
                      <g
                        id="Group_10"
                        data-name="Group 10"
                        transform="translate(0 0)"
                      >
                        <g id="Group_9" data-name="Group 9">
                          <path
                            id="Path_14"
                            data-name="Path 14"
                            d="M61.157,17.773l-.846-.847-.009-.01L46.611,3.226h0l-.855-.855a4.678,4.678,0,0,0-6.608,0L28.879,12.639a4.678,4.678,0,0,0,0,6.608l.12.12-3.617,3.609c-1.563,1.563-2.944,2.983-4.217,4.333q-.9.948-1.8,1.911c-2.048,2.194-4.061,4.439-6.011,6.706q-.382.444-.763.889c-3.738,4.373-7.372,8.937-10.8,13.56l-.222.3A8.12,8.12,0,0,0,2.348,61.18a8.115,8.115,0,0,0,10.512.772l.285-.214c4.587-3.386,9.1-6.981,13.42-10.683.014-.011.028-.021.041-.032,3.3-2.8,6.574-5.749,9.718-8.755l.02-.021c1.413-1.345,2.828-2.725,4.208-4.1l3.608-3.616.122.122a4.679,4.679,0,0,0,6.608,0L61.158,24.381A4.678,4.678,0,0,0,61.157,17.773Zm-3.066-.119-5.252,5.253a.175.175,0,0,1-.239,0L40.621,10.927a.175.175,0,0,1-.049-.119.168.168,0,0,1,.049-.119l5.253-5.253,6.133,6.133ZM11.9,60.069l-.287.215a5.984,5.984,0,0,1-8.375-8.366l.222-.3c3.071-4.144,6.308-8.234,9.637-12.182a22.926,22.926,0,0,0,4.685,6.5,23.366,23.366,0,0,0,6.228,4.559C20.1,53.8,16.033,57.021,11.9,60.069Zm27.175-23.4c-1.374,1.375-2.783,2.749-4.193,4.09h0l0,0c-2.716,2.589-5.517,5.131-8.344,7.573l-.252.217-.535.458a21.348,21.348,0,0,1-6.492-4.555,20.948,20.948,0,0,1-4.668-6.774l.236-.275.563-.653q.3-.351.61-.7l.348-.4q.4-.46.81-.918l.187-.212q.468-.526.939-1.049l.094-.1q.485-.538.974-1.072l.092-.1q.43-.47.864-.937l.233-.252c.172-.186.346-.37.519-.555q.8-.859,1.613-1.708l.018-.021c1.26-1.335,2.622-2.735,4.164-4.277l3.619-3.609L42.687,33.055ZM59.685,22.907,49.416,33.176a2.59,2.59,0,0,1-3.66,0l-.828-.828c-.01-.011-.02-.023-.031-.034L31.212,18.629c-.014-.014-.029-.026-.044-.04l-.815-.815a2.592,2.592,0,0,1,0-3.66L40.621,3.845a2.592,2.592,0,0,1,3.66,0l.119.119L39.148,9.216a2.252,2.252,0,0,0,0,3.185l11.979,11.98a2.252,2.252,0,0,0,3.186,0l5.252-5.253.12.12A2.592,2.592,0,0,1,59.685,22.907Z"
                            transform="translate(0 -1.004)"
                            fill="#fb0000"
                            stroke="#fb0000"
                            strokeWidth="1"
                          />
                          <path
                            id="Path_15"
                            data-name="Path 15"
                            d="M291.822,136.127a1.042,1.042,0,1,0-1.474,1.474l4.278,4.279a1.042,1.042,0,1,0,1.474-1.474Z"
                            transform="translate(-254.623 -119.358)"
                            fill="#fb0000"
                            stroke="#fb0000"
                            strokeWidth="1"
                          />
                          <path
                            id="Path_16"
                            data-name="Path 16"
                            d="M354.879,199.186a1.043,1.043,0,0,0-1.474,1.475l.856.856a1.042,1.042,0,0,0,1.474-1.475Z"
                            transform="translate(-309.98 -174.717)"
                            fill="#fb0000"
                            stroke="#fb0000"
                            strokeWidth="1"
                          />
                          <path
                            id="Path_17"
                            data-name="Path 17"
                            d="M193.088,228.254a10.17,10.17,0,0,0-6.808,6.808,4.113,4.113,0,0,0,.836,4.059,3.662,3.662,0,0,0,2.662,1.015,8.448,8.448,0,0,0,5.656-2.727c2.813-2.813,3.564-6.467,1.711-8.319A4.112,4.112,0,0,0,193.088,228.254Zm.872,7.682c-2.087,2.087-4.506,2.575-5.372,1.711a2.187,2.187,0,0,1-.288-2.078,8.109,8.109,0,0,1,5.293-5.292,3.66,3.66,0,0,1,.885-.118,1.649,1.649,0,0,1,1.193.4C196.537,231.429,196.047,233.848,193.96,235.935Z"
                            transform="translate(-163.371 -200.342)"
                            fill="#fb0000"
                            stroke="#fb0000"
                            strokeWidth="1"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                )}
                {index === 1 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="37.521"
                    height="63.15"
                    viewBox="0 0 37.521 63.15"
                  >
                    <path
                      id="services2"
                      d="M36.559,6.951a.922.922,0,1,0-1.755.568,6.8,6.8,0,0,1,.052,4.032L30.278,27.119H28.685Q30.3,18.774,31.918,10.43a13.367,13.367,0,0,0-.458-6.87,6.715,6.715,0,0,1,1.918,1.482.922.922,0,1,0,1.372-1.234,8.527,8.527,0,0,0-4.693-2.675,57.107,57.107,0,0,0-22.634,0A8.659,8.659,0,0,0,.851,12.072l1.407,4.786L5.276,27.12a3.138,3.138,0,0,0-1.352,5.944c-.035.7-.053,1.4-.053,2.114A39.078,39.078,0,0,0,5.652,47.031a.922.922,0,1,0,1.756-.567A37.223,37.223,0,0,1,5.716,35.177c0-.6.014-1.192.04-1.781H31.72c.026.588.04,1.184.04,1.781a36.527,36.527,0,0,1-2.03,12.274,20.617,20.617,0,0,1-4.932,8.04H12.675a19.03,19.03,0,0,1-4.047-5.883.923.923,0,0,0-1.676.772,22.216,22.216,0,0,0,3.212,5.143,3.326,3.326,0,0,0,.451,6.622H26.861a3.326,3.326,0,0,0,.449-6.623c3.922-4.6,6.3-12.149,6.3-20.345,0-.709-.018-1.417-.053-2.114A3.138,3.138,0,0,0,32.2,27.12q2.212-7.524,4.424-15.048a8.641,8.641,0,0,0-.066-5.121ZM28.342,58.818A1.483,1.483,0,0,1,26.861,60.3H10.615a1.482,1.482,0,0,1,0-2.964H26.861A1.483,1.483,0,0,1,28.342,58.818Zm1.764-48.739q-1.651,8.519-3.3,17.04H23.59l1.417-16.787a27.165,27.165,0,0,0-.5-8.181q2.31.243,4.612.681a11.149,11.149,0,0,1,.985,7.247Zm-7.552-8.1a24.251,24.251,0,0,1,.615,8.2l-1.43,16.942h-6l-1.43-16.942a24.236,24.236,0,0,1,.615-8.2,54.939,54.939,0,0,1,7.631,0ZM10.671,27.119l-3.3-17.04a11.144,11.144,0,0,1,.985-7.247q2.3-.438,4.612-.681a27.147,27.147,0,0,0-.5,8.181l1.418,16.787ZM2.621,11.551a6.861,6.861,0,0,1,.707-5.468,6.719,6.719,0,0,1,2.69-2.524,13.363,13.363,0,0,0-.458,6.87L8.792,27.119H7.2L4.028,16.337ZM33.442,30.258a1.3,1.3,0,0,1-1.294,1.294H5.328a1.294,1.294,0,1,1,0-2.588h26.82a1.3,1.3,0,0,1,1.294,1.294Zm0,0"
                      transform="translate(0.032 0.504)"
                      fill="#fb0000"
                      stroke="#fb0000"
                      strokeWidth="1"
                    />
                  </svg>
                )}
                {index === 2 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="69.227"
                    height="63.529"
                    viewBox="0 0 69.227 63.529"
                  >
                    <g id="services3" transform="translate(0.615 0.506)">
                      <g
                        id="Group_12"
                        data-name="Group 12"
                        transform="translate(0 0)"
                      >
                        <g id="Group_11" data-name="Group 11">
                          <path
                            id="Path_18"
                            data-name="Path 18"
                            d="M67.539,26.467l-2.994-1.843a1.163,1.163,0,0,0-1.412.148L61.494,26.33a6.365,6.365,0,0,1-5.643,1.636,7.3,7.3,0,0,0-14.4-1.374q-.775,3.281-1.771,6.5h-.461A9.413,9.413,0,0,0,32.6,35.781a7.1,7.1,0,0,1-4.985,2.03H3.491a11.337,11.337,0,0,1,0-9.994H37.25a1.164,1.164,0,0,0,0-2.328H2.786a1.164,1.164,0,0,0-1.015.594,13.666,13.666,0,0,0-.1,13.269l.1.178a1.164,1.164,0,0,0,1.024.61H27.62a9.413,9.413,0,0,0,6.611-2.692,7.093,7.093,0,0,1,4.692-2.023A100.91,100.91,0,0,1,17.531,71.566,5.471,5.471,0,0,0,17.508,79l2.434,2.667a5.521,5.521,0,0,0,4.047,1.795h.02a5.493,5.493,0,0,0,4.019-1.753A115.417,115.417,0,0,0,54.214,35.417h3.833a10.387,10.387,0,0,0,10.006-7.654A1.164,1.164,0,0,0,67.539,26.467ZM53.507,28.692c0,.015,0,.029,0,.044a5.077,5.077,0,0,1-.1.612,112.96,112.96,0,0,1-27.078,50.78,3.116,3.116,0,0,1-2.311,1.007H24A3.145,3.145,0,0,1,21.662,80.1l-2.434-2.667a3.156,3.156,0,0,1,.016-4.289,103.06,103.06,0,0,0,24.47-46.018,4.973,4.973,0,0,1,8.942-1.7A4.866,4.866,0,0,1,53.507,28.692Zm4.539,4.4H54.859q.372-1.4.709-2.808a8.685,8.685,0,0,0,7.53-2.264l.989-.94,1.449.892A8.058,8.058,0,0,1,58.047,33.089Z"
                            transform="translate(0 -20.94)"
                            fill="#fb0000"
                            stroke="#fb0000"
                            strokeWidth="1"
                          />
                        </g>
                      </g>
                      <g
                        id="Group_14"
                        data-name="Group 14"
                        transform="translate(20.643 53.034)"
                      >
                        <g id="Group_13" data-name="Group 13">
                          <ellipse
                            id="Ellipse_3"
                            data-name="Ellipse 3"
                            cx="1.295"
                            cy="1.295"
                            rx="1.295"
                            ry="1.295"
                            fill="#fb0000"
                            stroke="#fb0000"
                            strokeWidth="1"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="barbing-section">
        <div className="barbing-container">
          <Marquee autoFill={true} direction="left" speed={20}>
            {allimages.map((image) => {
              const { id, gallery } = image;
              return (
                <div key={id} className="w-[300px] h-[300px] ">
                  <img src={gallery} />
                </div>
              );
            })}
          </Marquee>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            CUSTOMERS SAY ABOUT US
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonials, index) => (
              <div key={index} className="p-8 bg-white shadow-lg rounded-lg">
                {/* Star Ratings */}
                <div className="flex mb-4 text-red-600">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="mb-8 text-gray-700">{testimonials.text}</p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials.image}
                    alt={testimonials.name}
                    className="w-12 h-12 rounded-full object-cover border border-gray-300"
                  />
                  <p className="font-medium">{testimonials.name}</p>
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
