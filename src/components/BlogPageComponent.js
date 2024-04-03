import React, { useState, useEffect } from 'react';
import BlogPost from './BlogComponent';


const BlogPageComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching posts from an API by using static data
    const dummyPosts = [
      {
        name: 'FlyWheel Coffee Roasters',
        picture: require("../images/flywheel.jpg"),
        date: '04/02/2024',
        description: 'I just had a wonderful experience at Flywheel. The place is very open and spacious, which made it a really nice environment to get some work done. The coffee is really great too! I had a capuccino and it came out perfect. I also recommend the chocolate croissant as it was warm and flaky. '
      },
      {
        name: 'Royal Ground Coffee',
        picture: require('../images/royalGround.jpg'),
        date: '03/16/2024',
        description: 'Royal Ground is a great local spot on Geary. The coffee is cheap but good, and they have a nice selection of pastries as well as breakfast sandwiches. For those who want to get work done, there is a quiet room in the back with couches and tables where you can sit at.'
      },
    ];

    setPosts(dummyPosts);
  }, []);

  return (
    <div className="container mx-auto my-8">
       <a href="/" className="text-blue-500">← Back</a>
      <BlogPost posts={posts} />
    </div>
  );
};

export default BlogPageComponent;