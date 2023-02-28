import styled from "@emotion/styled"
import { montserrat } from "../../pages"

export const Wrap = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 20vh;

  @media screen and (max-width: 820px) {
    height: 15vh;
  }
`

export const Text = styled.div`
  font-family: ${montserrat.style.fontFamily}, sans-serif;
  font-weight: 500;
  font-size: 20px;
  outline: 1px solid black;
  -moz-outline-radius: 10px;
  padding: 20px;
  animation: pressPleaseOutline 2s infinite;
  cursor: pointer;
  background: white;
  border-radius: 10px;
  transition: background .2s, outline-color;

  &:hover {
    background: rgb(239 239 239);
  }

  @keyframes pressPleaseOutline {
    0% {
      outline-offset: 100px;
      outline-color: transparent;
    }
    40% {
      outline-offset: 100px;
      outline-color: transparent;
    }
    45% {
      outline-color: transparent;
    }
    60% {
      outline-offset: 0;
      outline-color: black;
    }
    95% {
      outline-offset: 0;
      outline-color: black;
    }
    100% {
      outline-offset: 0;
      outline-color: white;
    }
  }

  @keyframes hoverOutline {
    0% {
      outline-offset: 30px;
      outline-color: black;
      outline-width: 1px;
    }
    100% {
      outline-offset: 0;
      outline-color: #949494;
      outline-width: 1px;
      border: 1px solid black;
    }
  }
`
