// Blog.js
import React from 'react';

const Blog = ({ posts }) => {
  return (
    <div className="blog-container mx-auto p-8">
      {posts.map((post, index) => (
        <div key={index} className="blog-post mb-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">{post.name}</h2>
          <img src={post.picture} alt={post.name} className="w-full h-auto mb-4 rounded" />
          <p className="text-sm text-gray-600">{post.date}</p>
          <p className="text-gray-700 mt-4">{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;