import svg1 from "../images/svg-1.svg";
import svg2 from "../images/svg-2.svg";
import svg3 from "../images/svg-3.svg";

export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Premium Bank",
  headline: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.",
  buttonLabel: "Get started",
  imgStart: false,
  img: svg1,
  alt: "Car",
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjTwo = {
  id: "discover",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Unlimited Access",
  headline: "Unlimited Acess to account features",
  description:
    "Get exclusive unlimited access that allows you to manage account features without getting charged any fees.  All you need is an internet connection and a phone or computer.",
  buttonLabel: "Learn more",
  imgStart: true,
  img: svg2,
  alt: "computer",
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Premium Bank",
  headline: "Services that you can count on",
  description:
    "Get access to our exclusive services 24/7 without getting charged any fees.  We have you covered no matter where you are located",
  buttonLabel: "Start now",
  imgStart: false,
  img: svg3,
  alt: "phone",
  dark: false,
  primary: false,
  darkText: true
};
