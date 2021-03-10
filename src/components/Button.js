import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => props.width || "113px"};
  height: 43px;
  background: ${(props) => props.background || "#d2e1ff"};
  border-radius: 2px;
  outline: none;
  border: ${(props) => props.border || "none"};
  cursor: pointer;

  p {
    color: ${(props) => props.color || "#3a79ff"};
    font-family: Quicksand;
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
  }
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
