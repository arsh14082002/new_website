import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import blogData from '../../blogs.json';

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

  return (
    <section className="blogs">
      <div className="blogs_head">
        <h2>Recent Blogs</h2>
        <h4>Blogs and articles about us.</h4>
      </div>

      <div className="blogs_boxes">
        {sortedPosts.slice(0, 3).map((blog, i) => {
          const truncatedContent = truncateContent(blog.main, 50); // Adjust the number of words you want to display
          return (
            <div className="box" key={i}>
              <h3>{blog.title}</h3>
              <div className="box_para">
                <box-icon name="quote-alt-left" type="solid" color="#726d6d"></box-icon>{' '}
                <p>{truncatedContent}</p>
                <box-icon name="quote-alt-right" type="solid" color="#726d6d"></box-icon>{' '}
              </div>

              <Link
                to={`blogs/${blog.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
              >
                Read Blog{' '}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blogs;
