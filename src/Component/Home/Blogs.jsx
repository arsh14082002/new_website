import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import blogData from '../../blogs.json';
import { CommonBtn } from '../CallToAction/CommonBtn';
import BlogCardCommon from '../CallToAction/BlogCardCommon';

const Blogs = () => {
  const truncateContent = (content, maxLength) => {
    if (content.length <= maxLength) {
      return content;
    }
    const truncatedContent = content.substring(0, maxLength).trimEnd();
    return truncatedContent + '...';
  };

  // Sort the blog posts by date in descending order (most recent first)
  const sortedPosts = blogData.posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  const renderBlogs = (numOfBlogs) => {
    return sortedPosts.slice(0, numOfBlogs).map((post, i) => (
      <BlogCardCommon
        key={i}
        title={post.title}
        description={truncateContent(post.main, 50)} // Adjust the number of characters you want to display
        route={post.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
      />
    ));
  };

  return (
    <section className="blogs">
      <div className="blogs_head">
        <h2>Recent Blogs</h2>
        <h4>Blogs and articles about us.</h4>
      </div>

      <div className="blogs_boxes">
        {/* Display 4 blogs when screen size is less than 1024px and greater than 669px */}
        {window.innerWidth <= 1024 ? renderBlogs(4) : renderBlogs(3)}
      </div>

      <CommonBtn link={'blogs'} btnText={'See more Blogs'} />
    </section>
  );
};

export default Blogs;
