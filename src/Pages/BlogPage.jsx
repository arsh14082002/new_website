import React from 'react';
import './Styles/BlogPage.scss';
import { NavLink, useParams } from 'react-router-dom';
import blogsData from '../blogs.json';
import g1 from '../assets/blog-gallery/digital-marketing.jpg';

const BlogPage = () => {
  const { slug } = useParams();

  // Check if slug exists before trying to manipulate it
  const formattedSlug = slug ? slug.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and') : '';

  // Find the blog post whose title matches the formattedSlug
  const matchedPost = blogsData.posts.find((post) => {
    const postSlug = post.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
    return postSlug === formattedSlug;
  });

  const truncateContent = (content) => {
    const words = content.split(' ');
    const truncatedWords = words.slice(0, 20);
    return truncatedWords.join(' ');
  };

  // Shuffle blog posts to get random order
  const shuffledPosts = blogsData.posts.sort(() => Math.random() - 0.5);

  // Select first three random blog posts
  const randomPosts = shuffledPosts.slice(0, 3);

  // Render the blog post content if found
  return (
    <div className="blog_page">
      {matchedPost ? (
        <>
          <h1>{matchedPost.title}</h1>
          <div className="blog_img">
            <img src={g1} alt={matchedPost.title} />
          </div>

          {matchedPost.content && <p>{matchedPost.content}</p>}
          {matchedPost.content1 && <p>{matchedPost.content1}</p>}
          {matchedPost.content2 && <p>{matchedPost.content2}</p>}
          {matchedPost.content3 && <p>{matchedPost.content3}</p>}
          {matchedPost.content4 && <p>{matchedPost.content4}</p>}
          {matchedPost.content5 && <p>{matchedPost.content5}</p>}
          {matchedPost.content6 && <p>{matchedPost.content6}</p>}
          {matchedPost.content7 && <p>{matchedPost.content7}</p>}
        </>
      ) : (
        <h1>Blog post not found</h1>
      )}

      <div className="xtra_blogs">
        <div className="blogs_head">
          <h2>More Blogs</h2>
          <h4>What We Provide You?</h4>
        </div>
        <div className="blogs_boxes">
          {randomPosts.map((post, i) => (
            <div className="box" key={i}>
              <h3>{post.title}</h3>

              <div className="box_para">
                <box-icon name="quote-alt-left" type="solid" color="#726d6d"></box-icon>{' '}
                <p>{truncateContent(post.content)}...</p>
                <box-icon name="quote-alt-right" type="solid" color="#726d6d"></box-icon>{' '}
              </div>
              <NavLink
                className="blog_direct_link"
                to={`/blogs/${post.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
              >
                Read Blog
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
