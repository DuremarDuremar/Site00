import React, { useState } from "react";
import styled from "styled-components";
import TitleText from "../components/TitleText";
import Circles from "../components/Circles";
import QuotersImg from "../components/QuotersImg";

const Wrapper = styled.div`
  background: linear-gradient(180deg, #eaf0ff 0%, #f6f9ff 100%);
  max-width: 100%;
  height: ${(props) => (props.res900 ? "479px" : "625px")};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const Content = styled.div`
  width: calc(700px + 13.8vw);
  position: relative;
  padding: 12px 0;
  display: flex;
  flex-direction: ${(props) => (props.res900 ? "row" : "column")};
  align-items: center;
  justify-content: ${(props) =>
    props.res900 ? "space-between" : "space-evenly"};
  height: 100%;
`;

const Slider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Items = styled.div`
  position: ${(props) => (props.ab ? "absolute" : "relative")};
  left: ${(props) => props.ab && "95%"};
  z-index: ${(props) => !props.ab && "1"};
  opacity: ${(props) => props.ab && "0.3"};
  width: ${(props) => (props.res450 ? " 423px" : "90vw")};
  transform: ${(props) =>
    props.ab && "matrix3d(1,0,0.00,0,0.00,1,0.00,-0.0014,0,0,1,0,0,0,0,1);"};
  /* width: 423px; */
  min-height: 175.37px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    padding: 35px 10px;
    max-width: 283px;
    font-family: Roboto;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.03em;
    color: #676f95;
  }
`;

const Quotes = ({ res900, res450 }) => {
  const [page, setPage] = useState(1);

  const ImagesFase = (n) => {
    const arr = [
      "assets/shop.jpg",
      "assets/kam.jpg",
      "assets/nic.jpg",
      "assets/sartr.jpg",
      "assets/haid.jpeg",
      "assets/gig.jpg",
    ];
    const res = arr.filter((item, index) => {
      return index + 1 === n;
    });
    return res[0];
  };

  const itemText = (n) => {
    switch (n) {
      case 1:
        return (
          <p>
            Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu
            vidit tractatos, vero tractatos ius an, in mel diceret persecuti.
          </p>
        );
      case 2:
        return (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur nesciunt repudiandae neque libero rem assumenda
            officiis quam alias quisquam incidunt?
          </p>
        );
      case 3:
        return (
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            beatae ad saepe excepturi vero cum, culpa eos, porro odio facilis,
            architecto maiores ut. Sed reprehenderit blanditiis doloremque
            repellat, autem sunt ut! Nemo, facere libero.
          </p>
        );
      case 4:
        return (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat,
            reiciendis!
          </p>
        );
      case 5:
        return (
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
            deleniti a soluta perferendis, expedita aut corporis sed ut, labore
            explicabo veniam quos at dolorum amet tempora sapiente sint cum quas
            animi voluptas enim quasi! Tenetur exercitationem possimus eum nam
            quam.
          </p>
        );
      case 6:
        return (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit eum
            dignissimos voluptatibus! Ad repellat totam nihil consectetur ut
            blanditiis quibusdam praesentium quae.
          </p>
        );
      default:
        <p></p>;
    }
  };

  return (
    <Wrapper res900={res900}>
      <Content res900={res900}>
        <TitleText
          maxWidthP={res450 ? "323px" : "240px"}
          textAlignh1={res450 ? "left" : "center"}
          textAlignP={res450 ? "left" : "center"}
          textAlignh4={res450 ? "left" : "center"}
          paddingTopP="14px"
          paddingToph1="31px"
          fontSizeP="12px"
          lineHeightP="23px"
          colorP="#A4ABC8"
        >
          <h4>TESTIMONIALS</h4>
          <h1>Customers's quotes</h1>
          <p>
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
            atqui laudem an.
          </p>
        </TitleText>
        <Slider>
          <Items res450={res450}>
            {itemText(page)}
            <QuotersImg pic={ImagesFase(page)} />
          </Items>
          <Circles
            page={page}
            setPage={setPage}
            number={6}
            Width="96px"
            MarginTop="calc(3.5vw + 16px)"
          />
        </Slider>
        <Items ab>
          {itemText(page > 5 ? 1 : page + 1)}
          <QuotersImg pic={ImagesFase(page > 5 ? 1 : page + 1)} />
        </Items>
      </Content>
    </Wrapper>
  );
};

export default Quotes;
