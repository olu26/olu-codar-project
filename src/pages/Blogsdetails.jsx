import hero from "../assets/img/hero/hero4.jpg";
import { useState } from "react";
import barber1 from "../assets/img/blog/single_blog_1.jpg";
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

const Blogsdetails = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    {
      name: "Emily Blunt",
      date: "December 4, 2017 at 3:12 pm",
      text: "Multiply sea night grass fourth day sea lesser rule open subdue female fill...",
    },
    {
      name: "Emily Blunt",
      date: "December 4, 2017 at 3:12 pm",
      text: "Multiply sea night grass fourth day sea lesser rule open subdue female fill...",
    },
  ]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([
        ...comments,
        { name: "Guest", date: "Just now", text: comment },
      ]);
      setComment("");
    }
  };
  const recentPosts = [
    {
      title: "From life was you fish...",
      date: "January 12, 2019",
      image: post1,
    },
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
            BLOG DETAILS
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
        {/* Main Blog Section */}
        <div className="w-full md:w-2/3">
          <img src={barber1} alt="Blog Post" className="w-full rounded-lg" />
          <h1 className="text-2xl font-bold my-4">
            Second divided from form fish beast made every of seas all gathered
            us saying he our
          </h1>
          <p className="text-gray-500">Travel, Lifestyle | 03 Comments</p>
          <p className="mt-4 text-gray-700">
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price...
          </p>

          {/* Comments Section */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold">
              {comments.length} Comments
            </h2>
            <div className="mt-4 space-y-4">
              {comments.map((c, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-lg">
                  <p className="text-sm font-semibold">
                    {c.name}{" "}
                    <span className="text-gray-500 text-xs">{c.date}</span>
                  </p>
                  <p className="text-gray-700">{c.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="mt-6">
            <textarea
              className="w-full p-2 border rounded-lg"
              rows="4"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button
              type="submit"
              className="mt-2 bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Post Comment
            </button>
          </form>
        </div>

        {/* Sidebar Section */}
        <div className="w-full md:w-1/3 space-y-6">
          {/* Search */}
          <div>
            <input
              type="text"
              placeholder="Search Keyword"
              className="w-full p-2 border rounded-lg"
            />
            <button className="mt-2 w-full bg-red-600 text-white p-2 rounded-lg">
              Search
            </button>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Category</h2>
            <ul className="text-gray-700 space-y-1">
              {[
                "Restaurant food (37)",
                "Travel news (10)",
                "Modern technology (03)",
                "Product (11)",
              ].map((category, index) => (
                <li key={index}>{category}</li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mb-3 border-b pb-2">
              Recent Post
            </h2>
            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <div key={index} className="flex space-x-3 items-center">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 truncate w-40">
                      {post.title}
                    </h3>
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
              {[
                "project",
                "love",
                "technology",
                "travel",
                "restaurant",
                "lifestyle",
                "design",
                "illustration",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 px-3 py-1 rounded-md text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Instagram Feeds */}
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-lg font-semibold mt-6 mb-3 border-b pb-2">
              Instagram Feeds
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {instagramFeeds.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Instagram feed ${index + 1}`}
                  className="w-full h-20 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Newsletter</h2>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-2 border rounded-lg"
            />
            <button className="mt-2 w-full bg-red-600 text-white p-2 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogsdetails;