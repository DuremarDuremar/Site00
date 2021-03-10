import React from "react";
import styled from "styled-components";
import Image01 from "../img/manage1.png";
import Image02 from "../img/manage2.png";
import Image03 from "../img/manage3.png";
import TitleText from "../components/TitleText";
import Button from "../components/Button";

const Wrapper = styled.div`
  max-width: 100%;
  background-color: #f5f8ff;
  height: 676px;
  display: flex;
  align-items: center;
`;
const Content = styled.div`
  max-width: 1120px;
  display: flex;
  padding: 0 15px;
  margin: 0px auto;
  height: 436px;
  align-items: flex-end;
`;

const Illustration = styled.div`
  display: flex;
  width: 653px;
  height: 436px;
  position: relative;
  top: -5%;
  overflow: ${(props) => (props.res1350 ? "visible" : "scroll")};
`;

const ImgItem = styled.div`
  position: absolute;
  max-height: 100%;
  ${(props) =>
    props.img3 &&
    `
    left: -10%;
    top: 8%;
  `}
  ${(props) =>
    props.img2 &&
    `
    top:27%;
    right:-15%;
    z-index:1;
  `}
  ${(props) =>
    props.img1 &&
    `
    top:30%;
    left:7%;
    z-index:1;
  `}
  img {
    display: block;
  }
`;

const LeftBlock = styled.div`
  button {
    margin-top: 60px;
  }
  svg {
    margin-left: 6px;
  }
`;

const Plan = ({ res1350 }) => {
  console.log(res1350);

  return (
    <Wrapper>
      <Content>
        <LeftBlock>
          <TitleText
            textAlignP="left"
            maxWidthP="413px"
            paddingToph1="27px"
            textAlignh1="left"
            textAlignh4="left"
          >
            <h4>DESKTOP AND MOBILE APP</h4>
            <h1>Plan and manage</h1>
            <p>
              Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
              Usu atqui laudem an, insolens gubergren similique est cu. Et vel
              modus congue vituperata. Solum patrioque no sea. Mea ex malis
              mollis oporteat. Eum an expetenda consequat.
            </p>
          </TitleText>
          <Button width="130px" background="#4C85FF" color="#FFF">
            <p>
              View video
              <svg
                width="7"
                height="8"
                viewBox="0 0 7 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 2.73354C6.66667 3.11844 6.66667 4.08069 6 4.46559L1.5 7.06367C0.833333 7.44857 0 6.96744 0 6.19764V1.00149C0 0.231691 0.833333 -0.249434 1.5 0.135467L6 2.73354Z"
                  fill="white"
                />
              </svg>
            </p>
          </Button>
          <Button
            width="130px"
            background="#f5f8ff"
            border="1px solid #D1D1E4"
            color="#ADB4D2"
          >
            <p>See features</p>
          </Button>
        </LeftBlock>

        <Illustration res1350={res1350}>
          <ImgItem img1>
            <img src={Image01} alt="1" />
          </ImgItem>
          <ImgItem img2>
            <img src={Image02} alt="2" />
          </ImgItem>
          <ImgItem img3>
            <img src={Image03} alt="3" />
          </ImgItem>
        </Illustration>
      </Content>
    </Wrapper>
  );
};

export default Plan;
