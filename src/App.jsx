import React from "react";
import styled from "styled-components";
import Nav from "./bloks/Nav.jsx";
import Hero from "./bloks/Hero.jsx";
import Costumers from "./bloks/Costumers.jsx";
import Plan from "./bloks/Plan.jsx";
import Features from "./bloks/Features.jsx";
import Stats from "./bloks/Stats.jsx";
import Blog from "./bloks/Blog.jsx";
import Quotes from "./bloks/Quotes.jsx";
import Started from "./bloks/Started.jsx";
import Faq from "./bloks/Faq.jsx";
import NewsLetter from "./bloks/NewsLetter.jsx";

const All = styled.section`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Quicksand;
    font-weight: 500;
  }
  ul {
    padding-inline-start: 0;
  }
  li {
    list-style-type: none;
    cursor: pointer;
  }
  max-width: 1440px;
  margin: 0px auto;
`;

const App = () => {
  return (
    <All>
      <Nav></Nav>
    </All>
  );
};

export default App;
