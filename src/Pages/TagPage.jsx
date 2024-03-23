import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import blogsData from '../blogs.json';
import './Styles/TagPage.scss';
import { Helmet } from 'react-helmet';

const TagPage = () => {
  const { tag } = useParams(); // Use destructuring to access the tag parameter

  console.log('Tag Parameter:', tag); // Log the tag parameter

  // Extract the array of blog posts from the JSON data
  // const posts = blogsData.posts;

  // Filter blog posts based on whether any one of the tags matches the tag parameter
  const filteredPosts = blogsData.posts.filter((post) => post.tags.includes(tag));

  // Function to trim the content to 10-20 words
  const trimContent = (content) => {
    const words = content.split(' ');
    const trimmedContent = words.slice(0, 20).join(' ');
    return trimmedContent;
  };

  // Concatenate titles into a single string or choose a specific title
  const title = filteredPosts.map((blogTitle) => blogTitle.title).join(', ');

  return (
    <div className="tag_page">
      <Helmet>
        <title>{title} - Blogs</title>
      </Helmet>
      {filteredPosts.length > 0 ? (
        <div className="tag_page_boxes">
          {filteredPosts.map((post) => (
            <div key={post.id} className="box">
              <h4>{post.title}</h4>
              <p>{trimContent(post.content)}...</p>
              <NavLink
                className="blog_direct_link"
                to={`tags/${post.title
                  .toLowerCase()
                  .replace(/\s+/g, '-')
                  .replace(/&/g, 'and')}/${tag}`}
              >
                Read Blog{' '}
              </NavLink>
              <p>Tags: {post.tags.join(', ')}</p>
            </div>
          ))}
        </div>
      ) : (
        <h2>No posts found for tag: {tag}</h2>
      )}
    </div>
  );
};

export default TagPage;
