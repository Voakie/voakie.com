import styled from "@emotion/styled"

export const AboutWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const RevealableImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 100%;
  transition: clip-path 0.8s;
  clip-path: ellipse(0% 0% at 50% 50%);
  background: black;

  &.reveal {
    animation: revealimg 1.5s;
    clip-path: ellipse(100% 100% at 50% 50%);
    background: transparent;
  }

  @keyframes revealimg {
    0% {
      clip-path: ellipse(0% 0% at 50% 50%);
      background: black;
    }
    70% {
      clip-path: ellipse(100% 100% at 50% 50%);
      background: black;
    }
    100% {
      clip-path: ellipse(100% 100% at 50% 50%);
      background: transparent;
    }
  }

  @media screen and (max-height: 650px) {
    width: 150px;
    height: 150px;
  }

  @media screen and (max-height: 400px) {
    display: none;
  }
`

export const RevealableText = styled.div`
  margin: 5px;
  padding: 5px;
  font-family: "Montserrat";
  transition: clip-path 0.8s;
  clip-path: polygon(50% 0%, 50% 100%, 50% 100%, 50% 0%);
  background: black;
  font-size: 20px;
  color: white;
  z-index: 10;
  display: flex;
  align-items: center;

  &.large {
    font-size: 30px;
    font-weight: 700;
    margin: 20px;
  }

  &.reveal {
    animation: revealtext 1.5s;
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 00%);
    background: white;
    color: black;
  }

  & svg {
    width: 70px;
    height: 36px;
    margin-left: 5px;
    stroke: white;
  }

  @keyframes revealtext {
    0% {
      clip-path: polygon(50% 0%, 50% 100%, 50% 100%, 50% 0%);
      background: black;
      color: white;
    }
    70% {
      clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 00%);
      background: black;
      color: white;
    }
    100% {
      clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 00%);
      background: white;
      color: black;
    }
  }

  @media screen and (max-height: 650px) {
    font-size: 18px;
    padding: 0;
  }
`
