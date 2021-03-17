import React, { useEffect } from "react";
import Button from "../components/Button";
import logo from "../img/logo.jpg";
import logoactiv from "../img/logoactiv.jpg";
import styled from "styled-components";
import { Link } from "react-scroll";

const Wrapper = styled.div`
  max-width: 100%;
  min-height: 60px;
  transition: all ease-out 0.35s;
`;
const Content = styled.div`
  max-width: 1216px;
  margin: ${(props) => (props.footer ? "49px auto 0" : "19px auto 0")};
  display: flex;
  align-items: center;
  padding: 0 10px 3px;

  ${(props) =>
    !props.res900 &&
    `
    justify-content:center;
  `}
`;

const Logo = styled.div`
  ${(props) =>
    props.res900 &&
    `
    pointer-events: none;
    
  `}

  ${(props) =>
    !props.res900 &&
    `
    cursor: pointer;
    :hover img {
      border: 4px solid #3a79ff;
    }
  `}
   margin-right: ${(props) =>
    props.logoImg && !props.res900 && props.res450
      ? "auto"
      : props.res900
      ? "5.4vw"
      : "10px"};

  img {
    display: block;
    max-width: 50px;
    height: 45px;
    border: 4px solid #332e2ee9;
    border-radius: 15px;
    transition: border ease-out 0.35s;
  }
`;
const Menu = styled.ul`
  display: flex;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.05em;
  text-shadow: 0px 0px 5px #e6e6e6;
  position: relative;
  li {
    :not(:last-child) {
      margin-right: 42px;
    }
  }
  ${(props) =>
    props.footer &&
    `
  :after {
    content: "Copyright © 2018 by Random site";
    display: block;
    position: absolute;
    bottom: -40px;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #aeb8d0;
  }
    }
  `}
`;

const MenuLi = styled.li`
  color: ${(props) => (props.active === "true" ? "#5e81fe" : "#697ca6")};
`;

const AdapMenu = styled(Menu)`
  font-size: 15px;
  line-height: 18px;
  max-width: 600px;
  background-color: #f5f8ff;
  flex-wrap: wrap;
  margin: 10px auto 0;
  border-radius: 30px 30px 0 0;
  li {
    display: block;
    margin: 0px auto;
    padding: 10px;
    :not(:last-child) {
      margin-right: 0;
    }
  }
`;

const Links = styled.ul`
  display: ${(props) =>
    props.res900 ? "flex" : props.logoImg ? "flex" : "none"};
  order: ${(props) => (props.logoImg && !props.res900 ? "-1" : "0")};
  ${(props) =>
    props.res900 &&
    `
    margin-left: auto;
    margin-right: 3.3vw;
  `}
  ${(props) =>
    !props.res900 &&
    `
    margin-left: 0;
    margin-right: auto;
  `}
  li {
    color: #697ca6;
    transition: all ease-out 0.35s;
    :hover {
      color: #5e81fe;
    }
    :not(:last-child) {
      margin-right: calc(22px + 1vw);
    }
  }
`;

const Nav = ({
  res450,
  res900,
  footer,
  logoImg,
  setLogoImg,
  menuActiv,
  setMenuActiv,
}) => {
  ///////////////////////////////////////

  useEffect(() => {
    if (res900) {
      setLogoImg(false);
    }
  }, [res900, setLogoImg]);

  /////////////////////////////////////////////////////

  const arr451 = ["Home", "Blog", "Features", "Plan", "Faq"];
  const arr449 = [
    "Home",
    "Blog",
    "Features",
    "Pricing",
    "Documentation",
    "Get Started",
  ];

  const arr = res450 ? arr451 : arr449;

  const Items = arr.map((item, index) => {
    return (
      <MenuLi
        active={menuActiv === index + 1 ? "true" : "false"}
        key={item}
        onClick={() => setMenuActiv(index + 1)}
      >
        <Link to={String(index + 1)} smooth={true} duration={1000}>
          {item}
        </Link>
      </MenuLi>
    );
  });

  return (
    <Wrapper>
      <Content res900={res900} footer={footer}>
        <Logo
          res900={res900}
          res450={res450}
          logoImg={logoImg}
          onClick={() => setLogoImg(!logoImg)}
        >
          <img src={logoImg ? logoactiv : logo} alt="logo" />
        </Logo>

        {res900 && <Menu footer={footer}>{Items}</Menu>}
        <Links logoImg={logoImg} res900={res900}>
          <li>
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-telegram" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </li>
        </Links>

        {res450 && (
          <>
            <Button>
              <p>Get started</p>
            </Button>
          </>
        )}
      </Content>
      {logoImg && <AdapMenu>{Items}</AdapMenu>}
      {/* {footer && <footer>Copyright © 2018 by Random site</footer>} */}
    </Wrapper>
  );
};

export default Nav;
