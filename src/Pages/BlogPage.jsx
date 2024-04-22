import './Styles/BlogPage.scss';
import { NavLink, matchPath, useNavigate, useParams } from 'react-router-dom';
import blogsData from '../blogs.json';
import g1 from '../assets/blog-gallery/ip-vs-hd-cctv-camera.jpg';
import { Helmet } from 'react-helmet';

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

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
          <Helmet>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href={`https://www.secureyourself.in/blogs/${slug}`} />{' '}
            <title>{matchedPost.title} - Secure Yourself</title>
            <meta name="description" content={matchedPost.metaKeywords} />
            <meta name="keywords" content={matchedPost.metaDescription} />
            <meta name="author" content="Secure Yourself" />
          </Helmet>

          

          <h1>{matchedPost.title}</h1>
          <div className="blog_img">
            <img src={g1} alt={matchedPost.title} />
          </div>

          {matchedPost.main && <p>{matchedPost.main}</p>}
          {matchedPost.bloghead1 && <h3>{matchedPost.bloghead1}</h3>}
          {matchedPost.content1 && <p>{matchedPost.content1}</p>}
          {matchedPost.bloglist1 && (
            <ul>
              {matchedPost.bloglist1.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          {matchedPost.bloghead2 && <h3>{matchedPost.bloghead2}</h3>}
          {matchedPost.content2 && <p>{matchedPost.content2}</p>}
          {matchedPost.bloglist2 && (
            <ul>
              {matchedPost.bloglist2.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          {matchedPost.bloghead3 && <h3>{matchedPost.bloghead3}</h3>}
          {matchedPost.content3 && <p>{matchedPost.content3}</p>}
          {matchedPost.bloglist3 && (
            <ul>
              {matchedPost.bloglist3.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          {matchedPost.bloghead4 && <h3>{matchedPost.bloghead4}</h3>}
          {matchedPost.content4 && <p>{matchedPost.content4}</p>}
          {matchedPost.bloglist4 && (
            <ul>
              {matchedPost.bloglist4.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          {matchedPost.bloghead5 && <h3>{matchedPost.bloghead5}</h3>}
          {matchedPost.content5 && <p>{matchedPost.content5}</p>}
          {matchedPost.bloglist4 && (
            <ul>
              {matchedPost.bloglist5.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          {matchedPost.bloghead6 && <h3>{matchedPost.bloghead6}</h3>}
          {matchedPost.content6 && <p>{matchedPost.content6}</p>}
          {matchedPost.bloglist6 && (
            <ul>
              {matchedPost.bloglist6.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          {matchedPost.bloghead7 && <h3>{matchedPost.bloghead7}</h3>}
          {matchedPost.content7 && <p>{matchedPost.content7}</p>}
          {matchedPost.bloglist7 && (
            <ul>
              {matchedPost.bloglist7.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
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
                <p>{truncateContent(post.main)}...</p>
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
