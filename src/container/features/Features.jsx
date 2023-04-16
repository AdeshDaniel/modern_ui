import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featureData = [
  {
    title: "Improving end distrusts instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda obcaecati voluptas totam ex eligendi aliquam. Consequatur vel minima natus debitis!",
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus perspiciatis modi alias similique magni provident tenetur, excepturi earum explicabo magnam!",
  },
  {
    title: "Message or am nothing",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit eaque nulla nesciunt labore id possimus aspernatur ducimus fugiat consectetur nam.",
  },
  {
    title: "Really boy law country",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eveniet maiores cum optio maxime voluptates facere debitis sunt quasi? Sapiente.",
  },
];

const Features = () => (
  <div className='gpt3__features section__padding' id='features'>
    <div className='gpt3__features-heading'>
      <h1 className='gradient__text'>
        The future is now and you just need to realize it. step into the future
        today. Make it happen
      </h1>
      <p>Request early access to get started</p>
      <div className='gpt3__feature-container'>
        {featureData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Features;
