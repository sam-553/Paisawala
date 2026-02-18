import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "How to Find IFSC Codes for Indian Banks",
    excerpt:
      "Learn how to search IFSC codes of bank branches across India quickly and accurately for NEFT, RTGS & IMPS transactions.",
    image: "assets/blog1.jpeg", // bank/finance
    date: "Feb 18, 2026",
    author: "Admin",
    category: "Banking Tips",
  },
  {
    id: 2,
    title: "Top EMI Calculator Tips for Smart Borrowers",
    excerpt:
      "Understand how EMI works, compare interest rates, and save money using smart EMI calculation techniques.",
    image:  "assets/blog2.jpeg",
    date: "Feb 16, 2026",
    author: "Admin",
    category: "Finance",
  },
  {
    id: 3,
    title: "White Label Finance Platforms: Launch Your Brand",
    excerpt:
      "A step-by-step guide to start your own finance brand with white-label platforms including mobile and web templates.",
    image:  "assets/blog3.jpeg",
    date: "Feb 14, 2026",
    author: "Admin",
    category: "Fintech",
  },
  {
    id: 4,
    title: "Top Banks in India and Their Services Overview",
    excerpt:
      "Compare popular banks in India, their loans, credit cards, investment options, and branch availability.",
    image:"assets/blog4.jpeg",
    date: "Feb 12, 2026",
    author: "Admin",
    category: "Banking",
  },
  {
    id: 5,
    title: "Investing in Mutual Funds: A Beginner's Guide",
    excerpt:
      "Discover how mutual funds work, how to pick the right fund, and tips for maximizing returns in 2026.",
    image:"assets/blog5.jpeg",
    date: "Feb 10, 2026",
    author: "Admin",
    category: "Investment",
  },
  {
    id: 6,
    title: "Digital Lending Platforms: Pros & Cons",
    excerpt:
      "Learn about modern digital lending platforms, their advantages over traditional systems, and what to watch out for.",
    image:"assets/blog6.png", // finance tech
    date: "Feb 8, 2026",
    author: "Admin",
    category: "Fintech",
  },
];

const categoryColors = {
  Banking: "bg-blue-500",
  "Banking Tips": "bg-indigo-500",
  Finance: "bg-green-500",
  Fintech: "bg-purple-600",
  Investment: "bg-yellow-500",
};

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 max-w-7xl mx-auto mt-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-3">Our Blog</h1>
      <p className="text-gray-600 mb-10">
        Explore the latest insights on banking, finance, and fintech solutions from our experts.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
              <span
                className={`absolute top-3 left-3 text-white px-3 py-1 text-xs rounded-full ${
                  categoryColors[post.category] || "bg-gray-400"
                }`}
              >
                {post.category}
              </span>
            </div>
            <div className="p-6 flex flex-col justify-between h-full">
              <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
              <div className="flex items-center justify-between text-gray-500 text-xs mb-4">
                <span>{post.date}</span>
                <span>By {post.author}</span>
              </div>
              <button className="mt-auto bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
