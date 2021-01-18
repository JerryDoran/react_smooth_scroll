import React from "react";
import styled from "styled-components";
import Icon1 from "../images/svg-1.svg";
import Icon2 from "../images/svg-2.svg";
import Icon3 from "../images/svg-3.svg";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <h1>Our Services</h1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <h2>Reduce Expenses</h2>
            <p>We help reduce your fees and increase your overall revenue.</p>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <h2>Virtual Offices</h2>
            <p>You can access our platform online anywhere in the world.</p>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <h2>Premium Benefits</h2>
            <p>Unlock our special membership card that returns 5% cash back.</p>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

// Styles ***************************
const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media (max-width: 768px) {
    height: 1100px;
  }

  @media (max-width: 480px) {
    height: 1300px;
  }
  h1 {
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768) {
    grid-template-columns: 1fr;
  }
`;
const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
  h2 {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    text-align: center;
  }
`;
const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export default Services;
