import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled, { createGlobalStyle } from "styled-components";
import Nav from "./bloks/Nav.jsx";
import Hero from "./bloks/Hero.jsx";
import Costumers from "./bloks/Costumers.jsx";
import Plan from "./bloks/Plan.jsx";
import Features from "./bloks/Features.jsx";
import Stats from "./bloks/Stats.jsx";
import Blog from "./bloks/Blog.jsx";
import Quotes from "./bloks/Quotes.jsx";
import NewsLetter from "./bloks/NewsLetter.jsx";
import Started from "./bloks/Started.jsx";
import Faq from "./bloks/Faq.jsx";

const Global = createGlobalStyle`

body{
  overflow: ${(props) => (props.sub ? "hidden" : "auto")};
}

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
  margin: 0px auto 6vw;
`;

const App = () => {
  const [logoImg, setLogoImg] = useState(false);
  const [menuActiv, setMenuActiv] = useState(1);
  const [sub, setSub] = useState(false);

  const res1350 = useMediaQuery({
    query: "(min-width: 1350px)",
  });
  const res900 = useMediaQuery({
    query: "(min-width: 900px)",
  });
  const res600 = useMediaQuery({
    query: "(min-width: 600px)",
  });
  const res450 = useMediaQuery({
    query: "(min-width: 450px)",
  });

  return (
    <>
      <Global sub={sub} />
      <All>
        <Nav
          res900={res900}
          res450={res450}
          logoImg={logoImg}
          setLogoImg={setLogoImg}
          menuActiv={menuActiv}
          setMenuActiv={setMenuActiv}
        />
        <Hero logoImg={logoImg} />
        <Costumers res900={res900} res450={res450} />
        <Plan res1350={res1350} res900={res900} />
        <Features res900={res900} res450={res450} />
        <Stats />
        <Blog res900={res900} res600={res600} sub={sub} setSub={setSub} />
        <Quotes res900={res900} res450={res450} />
        <Faq res900={res900} />
        <Started res450={res450} />
        <NewsLetter res900={res900} res600={res600} sub={sub} setSub={setSub} />
        <Nav
          footer
          res900={res900}
          res450={res450}
          logoImg={logoImg}
          setLogoImg={setLogoImg}
          menuActiv={menuActiv}
          setMenuActiv={setMenuActiv}
        />
      </All>
    </>
  );
};

export default App;
