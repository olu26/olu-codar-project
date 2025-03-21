import hero from "../assets/img/hero/hero4.jpg";
import barber1 from "../assets/img/blog/single_blog_5.jpg";
import barber2 from "../assets/img/blog/single_blog_5.jpg";
import barber3 from "../assets/img/blog/single_blog_5.jpg";
import barber4 from "../assets/img/blog/single_blog_5.jpg";
import barber5 from "../assets/img/blog/single_blog_5.jpg";
import post1 from "../assets/img/post/post_1.jpg";
import post2 from "../assets/img/post/post_2.jpg";
import post3 from "../assets/img/post/post_3.jpg";
import post4 from "../assets/img/post/post_4.jpg";
import feed1 from "../assets/img/post/post_1.jpg";
import feed2 from "../assets/img/post/post_2.jpg";
import feed3 from "../assets/img/post/post_3.jpg";
import feed4 from "../assets/img/post/post_4.jpg";
import feed5 from "../assets/img/post/post_4.jpg";
import feed6 from "../assets/img/post/post_4.jpg";

const Blog = () => {
  const posts = [
    { id: 1, image: barber1, title: "Google inks pact for new 35-storey office", description: "That dominion stars lights...", date: "15 Jan" },
    { id: 2, image: barber2, title: "Google inks pact for new 35-storey office", description: "That dominion stars lights...", date: "15 Jan" },
    { id: 3, image: barber3, title: "Google inks pact for new 35-storey office", description: "That dominion stars lights...", date: "15 Jan" },
    { id: 4, image: barber4, title: "Google inks pact for new 35-storey office", description: "That dominion stars lights...", date: "15 Jan" },
    { id: 5, image: barber5, title: "Google inks pact for new 35-storey office", description: "That dominion stars lights...", date: "15 Jan" },
  ];
  const recentPosts = [
    { title: "From life was you fish...", date: "January 12, 2019", image: post1 },
    { title: "The Amazing Hubble", date: "02 Hours ago", image: post2 },
    { title: "Astronomy Or Astrology", date: "03 Hours ago", image: post3 },
    { title: "Asteroids telescope", date: "01 Hours ago", image: post4 },
  ];
  const instagramFeeds = [feed1, feed2, feed3, feed4, feed5, feed6];

  return (
    <div className="font-sans">
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
             BLOG
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

      {/* Blog Layout */}
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog Posts */}
        <div className="md:col-span-2">
          {posts.map((post) => (
            <div key={post.id} className="mb-10 bg-white shadow-md rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 md:h-64 object-cover" />
              <div className="p-4 md:p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-md text-sm font-bold">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
                <p className="text-gray-600 mt-2">{post.description}</p>
                <div className="mt-4 text-gray-500 text-sm">📍 Travel, Lifestyle | 💬 03 Comments</div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Search Box */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <input type="text" placeholder="Search Keyword" className="w-full p-2 border border-gray-300 rounded-md" />
            <button className="w-full mt-2 bg-red-600 text-white py-2 rounded-md">Search</button>
          </div>

          {/* Categories */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-lg font-bold mb-2">Category</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Restaurant Food (37)</li>
              <li>Travel News (10)</li>
              <li>Modern Technology (03)</li>
              <li>Product (11)</li>
              <li>Inspiration (21)</li>
              <li>Health Care (109)</li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-3 border-b pb-2">Recent Post</h2>
            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <div key={index} className="flex space-x-3 items-center">
                  <img src={post.image} alt={post.title} className="w-14 h-14 rounded-lg object-cover" />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 truncate w-40">{post.title}</h3>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tag Cloud */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-lg font-bold mb-2">Tag Cloud</h3>
            <div className="flex flex-wrap gap-2">
              {['project', 'love', 'technology', 'travel', 'restaurant', 'lifestyle', 'design', 'illustration'].map(tag => (
                <span key={tag} className="bg-gray-200 px-3 py-1 rounded-md text-sm">{tag}</span>
              ))}
            </div>
          </div>

          {/* Instagram Feeds */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mt-6 mb-3 border-b pb-2">Instagram Feeds</h2>
            <div className="grid grid-cols-3 gap-2">
              {instagramFeeds.map((image, index) => (
                <img key={index} src={image} alt={`Instagram feed ${index + 1}`} className="w-full h-20 object-cover rounded-lg" />
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-lg font-bold mb-2">Newsletter</h3>
            <input type="email" placeholder="Enter email" className="w-full p-2 border border-gray-300 rounded-md" />
            <button className="w-full mt-2 bg-red-600 text-white py-2 rounded-md">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;