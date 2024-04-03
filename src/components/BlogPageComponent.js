// BlogPageComponent.js
import React, { useState, useEffect } from 'react';
import Blog from './BlogComponent';

const BlogPageComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching posts from an API by using static data
    const dummyPosts = [
      {
        name: 'Coffee Shop 1',
        picture: 'https://offloadmedia.feverup.com/secretsanfrancisco.com/wp-content/uploads/2021/06/25053729/Webp.net-resizeimage-2021-06-24T192453.794-1-1024x683.jpg', 
        date: '2024-04-02',
        description: 'Nestled in the heart of the bustling city lies a quaint cafe, a hidden gem that offers a serene escape with its charming upper area. The cafe, bathed in warm, inviting light, is a sanctuary for those seeking a quiet moment amidst the days haste. Its upper level, accessible by a narrow, spiraling staircase, provides a vantage point that overlooks the lively space below. Patrons on the mezzanine can enjoy their aromatic coffee and delicate pastries while enveloped in the gentle hum of soft music and distant chatter. Large windows flank the walls, allowing the gentle play of sunlight to dance across rustic wooden tables. This cozy loft space, with its intimate nooks and crannies, is perfect for lost thoughts, leisurely afternoons, or a peaceful respite with a book in hand. Each visit promises a momentary retreat, a chance to breathe in the rich scents of brewed espresso and homemade treats, offering a tranquil reprieve from the outside world.'
      },
      {
        name: 'Coffee Shop 2',
        picture: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/2e/ef/78/nice-atmosphere.jpg?w=600&h=400&s=1', 
        date: '2024-05-16',
        description: 'Tucked away in the vibrant tapestry of the citys streets, theres a café that feels like a whisper of old-world charm blended with modern flair. Upon entering, visitors are greeted with the rich, deep scent of freshly ground coffee beans. The cafés real allure, though, is its upper area: a cozy loft space where the clink of cups and the murmur of conversations create a soothing symphony. This elevated alcove is a haven for artists sketching the day away, writers typing their next chapter, and friends sharing secrets over steamy lattes. Sunlight spills through the open windows, casting a golden glow over the mismatched, cushioned chairs that invite patrons to settle in. Here in this snug upper room, with its gallery of quirky art and potted plants, time seems to stand still, offering a peaceful bubble away from the citys pulse.'
      },
    ];

    setPosts(dummyPosts);
  }, []);

  return (
    <div className="container mx-auto my-8">
      <Blog posts={posts} />
    </div>
  );
};

export default BlogPageComponent;
