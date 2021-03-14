import React from "react";
import styled from "styled-components";

const Img = styled.div`
  position: absolute;
  bottom: -15%;
  img {
    border-radius: 100%;
  }
`;

const QuotersImg = (props) => {
  return (
    <Img {...props}>
      <img src={props.pic} alt="img" width="62" height="62" />
    </Img>
  );
};

export default QuotersImg;
