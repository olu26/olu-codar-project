import barber1 from "../assets/img/gallery/instra1.jpg";
import barber2 from "../assets/img/gallery/instra2.jpg";
import barber3 from "../assets/img/gallery/instra3.jpg";
import barber4 from "../assets/img/gallery/instra6.jpg";
import barber5 from "../assets/img/gallery/instra5.jpg";
import barber6 from "../assets/img/gallery/instra04.jpg";
import hero from "../assets/img/hero/hero3.jpg";

export default function Gallery() {
  // Sample gallery images - replace with your actual images
  const galleryImages = [
    {
      id: 1,
      src:barber1,
      alt: "",
    },
    {
      id: 2,
      src:barber2,
      alt: "Barber gallery image 2",
    },
    {
      id: 3,
      src:barber3,
      alt: "Barber gallery image 3",
    },
    {
      id: 4,
      src:barber4,
      alt: "Barber gallery image 4",
    },
    {
      id: 5,
      src:barber5,
      alt: "Barber gallery image 5",
    },
    {
      id: 6,
      src:barber6,
      alt: "Barber gallery image 6",
    },
  ];

  return (
    <main className="font-sans">
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
             GALLERY
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

      {/* Gallery Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 ">
          <div className="flex justify-center items-center w-full">
            <div className="space-y-4 py-10 flex flex-col justify-center items-center w-full">
              <div className="h-[5px] w-[50px] bg-[#FB0000]"></div>
              <h1 className="text-4xl font-bold text-center">Gallery</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="overflow-hidden  ">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-all"
          title="Go to Top"
        ></button>
      </div>
    </main>
  );
}
