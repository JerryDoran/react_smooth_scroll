import React, { useState } from "react";
import styled from "styled-components";
import Video from "../videos/video.jpg";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import { Link as LinkS } from "react-scroll";

const Hero = ({ toggle }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBackground>
        <ImageBackground src={Video} />
        <HeroContent>
          <h1>Virtual Banking Made Easy</h1>
          <p>
            Sign up for a new account today and receive $250 in credit towards
            your next payment.
          </p>
          <HeroButtonWrapper>
            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroButtonWrapper>
        </HeroContent>
      </HeroBackground>
    </HeroContainer>
  );
};

// Styles ***************************
const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ImageBackground = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  padding: 8px 24px;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);

  h1 {
    color: #fff;
    font-size: clamp(32px, 7vw, 48px);
    text-align: center;
  }

  p {
    margin-top: 24px;
    color: #fff;
    text-align: center;
    max-width: 600px;
    font-size: clamp(18px, 3vw, 24px);
  }
`;

const HeroButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
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

export default Hero;
