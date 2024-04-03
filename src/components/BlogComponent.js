import React from 'react';

const BlogPost = ({ posts }) => {
  return (
    <div className="blog-container mx-auto p-8">
        <div className="flex flex-wrap justify-center">
      {posts.map((post, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <img className="w-full" src={post.picture} alt="Blog Post" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{post.name}</div>
                <p className="text-gray-700 text-base">{post.date}</p>
                <p className="text-gray-700 text-base">"{post.description}"</p>
                </div>
            </div>
      ))}
      </div>
    </div>
  );
};

export default BlogPost;