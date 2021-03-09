import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled, { createGlobalStyle } from "styled-components";
import Nav from "./bloks/Nav.jsx";
import Hero from "./bloks/Hero.jsx";
import Costumers from "./bloks/Costumers.jsx";
import Plan from "./bloks/Plan.jsx";
import Features from "./bloks/Features.jsx";
// import Stats from "./bloks/Stats.jsx";
// import Blog from "./bloks/Blog.jsx";
// import Quotes from "./bloks/Quotes.jsx";
// import Started from "./bloks/Started.jsx";
// import Faq from "./bloks/Faq.jsx";
// import NewsLetter from "./bloks/NewsLetter.jsx";

const Global = createGlobalStyle`
*{
  margin:0;
  padding:0;
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

`;

const All = styled.div`
  max-width: 1440px;
  margin: 0px auto;
`;

const App = () => {
  const [logoImg, setLogoImg] = useState(false);
  const [menuActiv, setMenuActiv] = useState(1);

  const res900 = useMediaQuery({
    query: "(min-width: 900px)",
  });
  const res600 = useMediaQuery({
    query: "(min-width: 600px)",
  });

  return (
    <>
      <Global />
      <All>
        <Nav
          res900={res900}
          res600={res600}
          logoImg={logoImg}
          setLogoImg={setLogoImg}
          menuActiv={menuActiv}
          setMenuActiv={setMenuActiv}
        />
        <Hero logoImg={logoImg} />
        <Costumers />
        <Plan />
        <Features />
      </All>
    </>
  );
};

export default App;
