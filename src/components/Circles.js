import React from "react";
import styled from "styled-components";

const CirclesWrapper = styled.div`
  width: ${(props) => props.Width || "48px"};
  height: 8px;
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => props.MarginTop || "calc(7.5vw + 16px)"};
`;
const ItemCircles = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${(props) => (props.activ ? "#5e81fe" : "#d1d6e3")};
  border-radius: 100%;
  cursor: pointer;
`;

const Circles = (props) => {
  const res = [...Array(props.number)].map((item, index) => {
    return props.page === index + 1 ? (
      <ItemCircles
        key={index}
        activ
        onClick={() => props.setPage(index + 1)}
      ></ItemCircles>
    ) : (
      <ItemCircles
        key={index}
        onClick={() => props.setPage(index + 1)}
      ></ItemCircles>
    );
  });

  return <CirclesWrapper {...props}>{res}</CirclesWrapper>;
};

export default Circles;
