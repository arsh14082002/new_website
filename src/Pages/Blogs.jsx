import blogsData from '../blogs.json';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import BlogCardCommon from '../Component/CallToAction/BlogCardCommon';

const Blogs = () => {
  const truncateContent = (content) => {
    const words = content.split(' ');
    const truncatedWords = words.slice(0, 20);
    return truncatedWords.join(' ');
  };

  return (
    <section className="blogs">
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.secureyourself.in/blogs" />{' '}
        <title>Blogs - Secure Yourself</title>
      </Helmet>

      <div className="blogs_head">
        <h2>Blogs</h2>
        <h4>Blogs and articles about us.</h4>
      </div>
      <div className="blogs_boxes">
        {blogsData.posts.map((post, i) => (
          <BlogCardCommon
            key={i}
            title={post.title}
            description={truncateContent(post.main)}
            route={post.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
          />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
