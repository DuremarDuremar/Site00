import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  display: flex;
`;
const Content = styled.div`
  flex: 1 1 50%;
  max-width: 100%;
  padding: ${(props) =>
    props.left ? "66px 6.8vw 66px 0" : "66px 0 66px 6.8vw"};
  background: ${(props) =>
    props.left
      ? "linear-gradient(229.32deg, #6888FF 12.77%, #5E80FF 73.11%)"
      : "linear-gradient(101.48deg, #E9EFFF 41.56%, #E0E9FF 81.53%)"};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.left ? "flex-end" : "flex-start")};
  h1 {
    font-size: 48px;
    line-height: 83px;
    letter-spacing: 0.03em;
    font-weight: 400;
    color: ${(props) => (props.left ? "#fff" : "#5E80FF")};
    text-align: ${(props) => (props.left ? "right" : "left")};
  }
  p {
    max-width: 260px;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.03em;
    text-align: ${(props) => (props.left ? "right" : "left")};
    color: ${(props) => (props.left ? "#fff" : "#5E80FF")};
  }
`;

const Stats = () => {
  return (
    <Wrapper>
      <Content left>
        <div>
          <svg
            width="67"
            height="68"
            viewBox="0 0 67 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 33.625C2 16.159 16.2412 2 33.8085 2C37.0463 2 40.1712 2.48098 43.1147 3.375"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.963 40.4308C30.7436 44.1896 36.8731 44.1896 40.6537 40.4308C44.4344 36.672 60.0848 10.25 58.7018 8.875C57.3188 7.5 30.7436 23.0602 26.963 26.819C23.1823 30.5778 23.1823 36.672 26.963 40.4308ZM33.8082 36.375C35.3358 36.375 36.5741 35.1438 36.5741 33.625C36.5741 32.1062 35.3358 30.875 33.8082 30.875C32.2806 30.875 31.0422 32.1062 31.0422 33.625C31.0422 35.1438 32.2806 36.375 33.8082 36.375Z"
              fill="white"
            />
            <ellipse
              cx="6.14901"
              cy="50.125"
              rx="2.76596"
              ry="2.75"
              fill="white"
            />
            <ellipse
              cx="17.2127"
              cy="61.125"
              rx="2.76596"
              ry="2.75"
              fill="white"
            />
            <ellipse
              cx="33.8084"
              cy="65.25"
              rx="2.76596"
              ry="2.75"
              fill="white"
            />
            <ellipse
              cx="50.4041"
              cy="61.125"
              rx="2.76596"
              ry="2.75"
              fill="white"
            />
            <ellipse
              cx="60.085"
              cy="50.125"
              rx="2.76596"
              ry="2.75"
              fill="white"
            />
            <ellipse
              cx="64.234"
              cy="33.625"
              rx="2.76596"
              ry="2.75"
              fill="white"
            />
          </svg>
        </div>
        <h1>89%</h1>
        <p>Customers who have increased their productivity</p>
      </Content>
      <Content right>
        <div>
          <svg
            width="75"
            height="66"
            viewBox="0 0 75 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="28.6252"
              cy="17.5"
              rx="15.6369"
              ry="15.5"
              stroke="#5E80FF"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M55.2501 64.0001C55.2501 49.6556 43.3296 38.0271 28.625 38.0271C13.9204 38.0271 2 49.6556 2 64.0001"
              stroke="#5E80FF"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <ellipse
              cx="62.0117"
              cy="20.2229"
              rx="6.45334"
              ry="6.49324"
              stroke="#5E80FF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M72.9999 39.7027C72.9999 33.6935 68.0804 28.8221 62.0118 28.8221C55.9432 28.8221 51.0237 33.6935 51.0237 39.7027"
              stroke="#5E80FF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1>3123</h1>
        <p>Users who have used our application</p>
      </Content>
    </Wrapper>
  );
};

export default Stats;
