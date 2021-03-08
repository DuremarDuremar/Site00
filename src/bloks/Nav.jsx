import React from "react";
import Button from "../components/Button";
import logo from "../img/logo.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  height: 80px;
  margin: 0px auto;
`;
const Content = styled.div`
  max-width: 1206px;
  margin: 19px auto 0;
  background-color: Azure;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  margin-right: 5.4vw;
  ${(props) =>
    !props.res900 &&
    `
    cursor: pointer;
  `}
  img {
    display: block;
    max-width: 50px;
    border: 4px solid #332e2ee9;
    border-radius: 15px;
  }
`;
const Menu = styled.ul`
  display: flex;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.05em;
  color: #697ca6;
  text-shadow: 0px 0px 5px #e6e6e6;
  li {
    :not(:last-child) {
      margin-right: 42px;
    }
  }
`;
const Links = styled.ul`
  display: flex;
  margin-left: auto;
  margin-right: 3.3vw;
  li {
    :not(:last-child) {
      margin-right: 35px;
    }
  }
`;

const Nav = ({ res600, res900 }) => {
  return (
    <Wrapper>
      <Content>
        <Logo res900={res900}>
          <img src={logo} alt="logo" />
        </Logo>

        <Menu>
          <li>Home</li>
          <li>Blog</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Documentation</li>
        </Menu>

        <Links>
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

        <Button>
          <p>Get started</p>
        </Button>
      </Content>
    </Wrapper>
  );
};

export default Nav;
