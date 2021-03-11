import React from "react";
import styled from "styled-components";
import TitleText from "../components/TitleText";
import Button from "../components/Button";
import FonImage from "../img/clouds.png";

const Wrapper = styled.div`
  max-width: 100%;
  height: 894px;
  background-image: url(${FonImage});
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  max-width: 1200px;
  height: ${(props) => (props.res900 ? "573px" : "800px")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  justify-content: space-between;

  span {
    display: ${(props) => (props.res900 ? "inline" : "none")};
    width: 28px;
    height: 1px;
    background-color: #dae4fe;
    margin: 0 19px;
    align-self: center;
  }
`;
const Item = styled.div`
  margin-bottom: ${(props) => (props.res900 ? "0" : "30px")};
  flex: ${(props) => (props.res900 ? "1 1 auto" : "1 1 50%")};
  div {
    width: 69px;
    height: 69px;
    background: #f1f5ff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    margin: 0px auto;
  }
  h3 {
    margin: 33px 0 25px;
    font-family: "Open Sans";
    font-weight: bold;
    font-size: 14px;
    line-height: 25px;
    text-align: center;
    color: #4074f8;
  }
  p {
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 11px;
    line-height: 19px;
    text-align: center;
    color: #adb3cb;
    max-width: 140px;
    margin: 0px auto;
  }
`;
const WrapperButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    width: 15px;
    height: 1px;
    background-color: #dae4fe;
    margin: 0 1.1vw;
  }
  h5 {
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 11px;
    line-height: 19px;
    color: #adb3cb;
  }
`;

const Features = ({ res900 }) => {
  return (
    <Wrapper>
      <Content res900={res900}>
        <TitleText fontSizeh1="24px" lineHeighth1="30px">
          <h4>ABOUT US</h4>
          <h1>Read about our app</h1>
        </TitleText>
        <Items res900={res900}>
          <Item res900={res900}>
            <div>
              <svg
                width="18"
                height="21"
                viewBox="0 0 18 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 7.87273V19H6.42105L9 17L11.5789 19H16V7.87273L9 2L2 7.87273Z"
                  stroke="#4074F8"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <h3>Overview</h3>
            <p>
              Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
            </p>
          </Item>
          <span></span>
          <Item res900={res900}>
            <div>
              <svg
                width="28"
                height="18"
                viewBox="0 0 28 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7544 16H12.0877H9.19945H2V5.94956V2H12.0877L13.7018 5.16129H19.7544V6.96774M19.7544 16L25 6.96774H19.7544M19.7544 16V6.96774"
                  stroke="#4074F8"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <h3>Files</h3>
            <p>
              No vim nulla vitae intellegat. Ei enim error ius, solet atomorum
              conceptam ex has.
            </p>
          </Item>
          <span></span>
          <Item res900={res900}>
            <div>
              <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2V6.94956V13.5H4.28115L5.5 17L9 13.5H13.7018H19.7544V7.96774V2H17H12.5H2Z"
                  stroke="#4074F8"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <h3>Meeting chats</h3>
            <p>Vim ne tacimates neglegentur. Erat diceret omittam at est.</p>
          </Item>
          <span></span>
          <Item res900={res900}>
            <div>
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 11.9677V17.5H4.28115H9H13.7018H19.2544V11.9677M6.75439 5L10.7544 2M14.7544 5L10.7544 2M10.7544 2V12.5"
                  stroke="#4074F8"
                  strokeWidth="2.5"
                />
              </svg>
            </div>
            <h3>Save events</h3>
            <p>Nisl idque mel ea, nominati voluptatum.</p>
          </Item>
        </Items>
        <WrapperButton>
          <Button background="#FFD7D7" color="#D43F3F">
            <p>Read more</p>
          </Button>
          <span></span>
          <h5>OR</h5>
          <span></span>
          <Button>
            <p>Get started</p>
          </Button>
        </WrapperButton>
      </Content>
    </Wrapper>
  );
};

export default Features;
