import hero from "../assets/img/hero/hero4.jpg";




const Contact = () => {
    return (
      <div className="font-sans">
        {/* Hero Section */}
              <div className="flex h-[65vh] bg-[#1f0101]">
                {/* Left Section: Gallery Text */}
                <div className="w-full flex items-center justify-center">
                  <h1 className="text-5xl font-bold text-white">Contact</h1>
                </div>
        
                {/* Right Section: Image */}
                <div className="w-full h-full relative">
                  <img
                    src={hero}
                    alt="Gallery Hero"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Map Section */}
            <div className="hidden sm:block mb-12 h-96 bg-gray-200 rounded-lg overflow-hidden">
              <div id="map" className="h-full w-full"></div>
            </div>
  
            <div className="flex flex-wrap -mx-4">
              {/* Contact Form */}
              <div className="w-full lg:w-8/12 px-4">
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <form className="space-y-6">
                  <div>
                    <textarea
                      className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="6"
                      placeholder="Enter Message"
                    ></textarea>
                  </div>
                  
                  <div className="flex flex-wrap -mx-2">
                    <div className="w-full sm:w-1/2 px-2 mb-4">
                      <input
                        type="text"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="w-full sm:w-1/2 px-2 mb-4">
                      <input
                        type="email"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email"
                      />
                    </div>
                  </div>
  
                  <div>
                    <input
                      type="text"
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter Subject"
                    />
                  </div>
  
                  <button className="bg-red-600 text-white px-8 py-3 rounded hover:bg-red-700 transition">
              Book Now
            </button>
                </form>
              </div>
  
              {/* Contact Info */}
              <div className="w-full lg:w-3/12 lg:offset-lg-1 px-4 mt-8 lg:mt-0">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🏠</span>
                    <div>
                      <h3 className="font-bold text-lg">Buttonwood, California.</h3>
                      <p className="text-gray-600">Rosemead, CA 91770</p>
                    </div>
                  </div>
  
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">📱</span>
                    <div>
                      <h3 className="font-bold text-lg">+1 253 565 2365</h3>
                      <p className="text-gray-600">Mon to Fri 9am to 6pm</p>
                    </div>
                  </div>
  
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">✉️</span>
                    <div>
                      <h3 className="font-bold text-lg">support@example.com</h3>
                      <p className="text-gray-600">Send us your query anytime!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Contact;