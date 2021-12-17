import React from "react";
import StickyContainer from "./StickyContainer";
const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
        </ul>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
        </ul>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
          <li>item 4</li>
          <li>item 5</li>
        </ul>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </nav>
      <div className="logo-container">
        <i>logo ,img or ...</i> <p> text</p>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam sint
        earum amet sunt cupiditate quasi aut voluptatibus reiciendis
        perspiciatis, omnis sed voluptatem facilis. Odit ratione nam earum
        exercitationem reprehenderit odio?
      </p>

      <StickyContainer />
    </footer>
  );
};
export default Footer;
