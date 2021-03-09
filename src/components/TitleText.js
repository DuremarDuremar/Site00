import React from "react";
import styled from "styled-components";

const StyledTitleText = styled.div`
  h4 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #3d4f9f;
    text-align: center;
  }
  h1 {
    padding-top: 16px;
    font-weight: 300;
    font-size: 48px;
    line-height: 60px;
    text-align: center;
    color: #3d4f9f;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  p {
    padding-top: 28px;
    max-width: 502px;
    font-family: Roboto;
    font-weight: normal;
    font-size: 15px;
    line-height: 29px;
    text-align: center;
    letter-spacing: 0.03em;
    color: #8d96bd;
    margin: 0px auto;
  }
`;

const TitleText = (props) => {
  return <StyledTitleText {...props} />;
};

export default TitleText;
