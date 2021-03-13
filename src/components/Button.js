import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => props.width || "113px"};
  height: ${(props) => props.height || "43px"};
  background: ${(props) => props.background || "#d2e1ff"};
  border-radius: ${(props) => props.borderRadius || "2px"};
  outline: none;
  border: ${(props) => props.border || "none"};
  cursor: pointer;
  transition: all ease-out 0.95s;
  :hover {
    background: ${(props) => props.color || "#3a79ff"};
  }
  :hover p {
    color: ${(props) => props.background || "#d2e1ff"};
  }

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
