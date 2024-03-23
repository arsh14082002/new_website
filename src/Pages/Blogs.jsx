import React from 'react';
import BlogsC from '../Component/Home/Blogs';
import blogsData from '../blogs.json';
import { Link, NavLink } from 'react-router-dom';

const Blogs = () => {
  const truncateContent = (content) => {
    const words = content.split(' ');
    const truncatedWords = words.slice(0, 20);
    return truncatedWords.join(' ');
  };

  return (
    <section className="blogs">
      <div className="blogs_head">
        <h2>Blogs</h2>
        <h4>What We Provide You?</h4>
      </div>
      <div className="blogs_boxes">
        {blogsData.posts.map((post, i) => (
          <div className="box" key={i}>
            <h3>{post.title}</h3>
            <div className="tags flex gap-2">
              {post.tags.map((tag, i) => (
                <div className="tag" key={i}>
                  <NavLink
                    key={tag}
                    to={`/blogs/tags/${tag
                      .toLowerCase()
                      .replace(/\s+/g, '-')
                      .replace(/&/g, 'and')}`}
                  >
                    {tag}
                  </NavLink>
                </div>
              ))}
            </div>
            <div className="box_para">
              <box-icon name="quote-alt-left" type="solid" color="#726d6d"></box-icon>{' '}
              <p>{truncateContent(post.content)}...</p>
              <box-icon name="quote-alt-right" type="solid" color="#726d6d"></box-icon>{' '}
            </div>
            <NavLink
              className="blog_direct_link"
              to={`/${post.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
            >
              Read Blog{' '}
            </NavLink>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
