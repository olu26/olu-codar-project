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
    { title: "From life was you fish...", date: "January 12, 2019", image:post1 },
    { title: "The Amazing Hubble", date: "02 Hours ago", image: post2 },
    { title: "Astronomy Or Astrology", date: "03 Hours ago", image: post3 },
    { title: "Asteroids telescope", date: "01 Hours ago", image: post4 },
  ];
  const instagramFeeds = [feed1, feed2, feed3, feed4, feed5, feed6];

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="flex h-[65vh] bg-[#1f0101]">
        <div className="w-full flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Blog</h1>
        </div>
        <div className="w-full h-full relative">
          <img src={hero} alt="Gallery Hero" className="h-full w-full object-cover" />
        </div>
      </div>

      {/* Blog Layout */}
      <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Blog Posts */}
        <div className="md:col-span-2">
          {posts.map((post) => (
            <div key={post.id} className="mb-10 bg-white shadow-md rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
              <div className="p-6">
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
          <div className="p-4 bg-white shadow-lg rounded-lg w-72">
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
              {/* insta feed */}

              <div className="bg-white p-4 shadow-md rounded-lg">

              <h2 className="text-lg font-semibold mt-6 mb-3 border-b pb-2">Instagram Feeds</h2>
      <div className="grid grid-cols-3 gap-2">
        {instagramFeeds.map((image, index) => (
          <img key={index} src={image} alt={`Instagram feed ${index + 1}`} className="w-20 h-20 object-cover rounded-lg" />
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