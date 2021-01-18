import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  headline,
  lightText,
  img,
  darkText,
  description,
  buttonLabel,
  alt,
  primary,
  dark
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <ButtonWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </ButtonWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImageWrap>
                <Image src={img} alt={alt} />
              </ImageWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

// Styles ***************************
const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media (max-width: 768px) {
    padding: 100px 0;
  }
`;

const InfoWrapper = styled.div`
  display: grid;
  justify-content: center;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax() (auto, 1fr);
  align-items: center;
  column-gap: 10rem;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

const TopLine = styled.p`
  color: green;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Button = styled(LinkS)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "green" : "#010606")};
  white-space: nowrap;
  outline: none;
  border: none;
  cursor: pointer;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ primary }) => (primary ? "#fff" : "green")};
  }
`;

const ImageWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export default InfoSection;
