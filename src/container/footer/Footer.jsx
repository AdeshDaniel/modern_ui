import React from "react";
import "./footer.css";
import gpt3Logo from "../../logo.svg";

const Footer = () => (
  <div className='gpt3__footer section__padding'>
    <div className='gpt3__footer-heading'>
      <h1 className='gradient__text'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, ipsum.
      </h1>
    </div>

    <div className='gpt3__footer-btn'>
      <p>Request Early Access</p>
    </div>

    <div className='gpt3__footer-links'>
      <div className='gpt3__footer-links_logo'>
        <img src={gpt3Logo} alt='gpt3 svg' />
        <p>
          Lorem ipsum dolor sit amet. <br /> All rights reserved
        </p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Links</h4>
        <p>Daniel</p>
        <p>Daniel</p>
        <p>Daniel</p>
        <p>Daniel</p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Links</h4>
        <p>Daniel</p>
        <p>Daniel</p>
        <p>Daniel</p>
        <p>Daniel</p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Links</h4>
        <p>Daniel</p>
        <p>Daniel</p>
        <p>Daniel</p>
        <p>Daniel</p>
      </div>
    </div>

    <div className='gpt3__footer-copyright'>
      <p>@2023 GPT-3. All rights reserved</p>
    </div>
  </div>
);

export default Footer;
