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
    color: ${(props) => props.colorh4 || "#3d4f9f"};
    text-align: ${(props) => props.textAlignh4 || "center"};
  }
  h1 {
    padding-top: ${(props) => props.paddingToph1 || "20px"};
    font-weight: ${(props) => props.fontWeighth1 || "500"};
    font-size: ${(props) => props.fontSizeh1 || "36px"};
    line-height: ${(props) => props.lineHeighth1 || "45px"};
    text-align: ${(props) => props.textAlignh1 || "center"};
    color: ${(props) => props.colorh1 || "#3d4f9f"};
    text-shadow: ${(props) => props.shadow || "none"};
    b {
      font-weight: 500;
    }
  }
  p {
    padding-top: ${(props) => props.paddingTopP || "28px"};
    max-width: ${(props) => props.maxWidthP || "502px"};
    font-family: Roboto;
    font-weight: normal;
    font-size: ${(props) => props.fontSizeP || "15px"};
    line-height: ${(props) => props.lineHeightP || "29px"};
    text-align: ${(props) => props.textAlignP || "center"};
    letter-spacing: 0.03em;
    color: ${(props) => props.colorP || "#8d96bd"};
    margin: ${(props) => props.marginP || "0px auto"};
    /* margin: 0px auto; */
  }
`;

const TitleText = (props) => {
  return <StyledTitleText {...props} />;
};

export default TitleText;
