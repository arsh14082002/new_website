import React from 'react';
import blogsData from '../blogs.json';
import { useParams } from 'react-router-dom';

const BlogPage = () => {
  const { slug } = useParams();

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
};

export default BlogPage;
