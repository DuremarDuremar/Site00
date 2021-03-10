import React from "react";
import styled from "styled-components";
import TitleText from "../components/TitleText";
import FonImage from "../img/clouds.png";

const Wrapper = styled.div`
  max-width: 100%;
  height: 894px;
`;
const Content = styled.div`
  max-width: 1200px;
  height: 573px;
  background-image: url(${FonImage});
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0px auto;
  border: 1px solid black;
`;
const Items = styled.div`
  display: flex;
`;
const Item = styled.div``;
const WrapperButton = styled.div``;

const Features = () => {
  return (
    <Wrapper>
      <Content>
        <TitleText fontSizeh1="24px" lineHeighth1="30px">
          <h4>ABOUT US</h4>
          <h1>Read about our app</h1>
        </TitleText>
        <Items>
          <Item>
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
                  stroke-width="2.5"
                />
              </svg>
            </div>
            <h3>Overview</h3>
            <p>
              Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
            </p>
          </Item>
          <Item>
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
                  stroke-width="2.5"
                />
              </svg>
            </div>
            <h3>Files</h3>
            <p>
              No vim nulla vitae intellegat. Ei enim error ius, solet atomorum
              conceptam ex has.
            </p>
          </Item>
          <Item>
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
                  stroke-width="2.5"
                />
              </svg>
            </div>
            <h3>Meeting chats</h3>
            <p>Vim ne tacimates neglegentur. Erat diceret omittam at est.</p>
          </Item>
          <Item>
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
                  stroke-width="2.5"
                />
              </svg>
            </div>
            <h3>Save events</h3>
            <p>Nisl idque mel ea, nominati voluptatum.</p>
          </Item>
        </Items>
        <WrapperButton></WrapperButton>
      </Content>
    </Wrapper>
  );
};

export default Features;
