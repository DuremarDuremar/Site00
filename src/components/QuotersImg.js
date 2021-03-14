import React from "react";
import styled from "styled-components";

const Img = styled.div`
  img {
  }
`;

const QuotersImg = (props) => {
  return (
    <Img {...props}>
      <img src={props.pic} alt="img" width="100" />
    </Img>
  );
};

export default QuotersImg;
