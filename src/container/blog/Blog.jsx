import React from "react";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";
import Article from "../../components/article/Article";

const Blog = () => (
  <div className='gpt3__blog section__padding'>
    <div className='gpt3__blog-heading'>
      <h1 className='gradient__text'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
        cupiditate.
      </h1>
    </div>
    <div className='gpt3__blog-container'>
      <div className='gpt3__blog-container_groupA'>
        <Article
          imgUrl={blog01}
          date='March 16 2023'
          text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
        cupiditate.'
        />
      </div>
      <div className='gpt3__blog-container_groupB'>
        <Article
          imgUrl={blog02}
          date='March 20 2023'
          text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
        cupiditate.'
        />
        <Article
          imgUrl={blog03}
          date='March 20 2023'
          text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
        cupiditate.'
        />
        <Article
          imgUrl={blog04}
          date='March 20 2023'
          text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
        cupiditate.'
        />
        <Article
          imgUrl={blog05}
          date='March 20 2023'
          text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
        cupiditate.'
        />
      </div>
    </div>
  </div>
);

export default Blog;
