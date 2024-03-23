import React from 'react';
import blogData from '../../blogs.json';

const BlogsContent = () => {
  const truncateContent = (content, maxLength) => {
    if (content.length <= maxLength) {
      return content;
    }
    const truncatedContent = content.substring(0, maxLength).trimEnd();
    return truncatedContent + '...';
  };

  return (
    <div>
      <section className="blogs">
        <div className="blogs_head">
          <h2>Blogs</h2>
          <h4>What We Provide You?</h4>
        </div>

        <div className="blogs_boxes">
          {blogData.map((blog, i) => {
            const truncatedContent = truncateContent(blog.content, 50); // Adjust the number of words you want to display
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
    </div>
  );
};

export default BlogsContent;
