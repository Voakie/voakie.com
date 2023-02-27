import styled from "@emotion/styled"
import { ArrowLeftIcon } from "@heroicons/react/20/solid"

export const Button = styled.button`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  border: 1px solid #eee;
  -moz-outline-radius: 10px;
  padding: 10px;
  cursor: pointer;
  background: transparent;
  display: flex;
  align-items: center;
  border-radius: 10px;
  backdrop-filter: blur(2px);
  transition: border 0.2s;

  &:hover {
    animation: smallButtonOutline 0.2s;
    background: rgba(255, 255, 255, 0.4);
    outline: 1px solid black;
    border: 1px solid white;
  }

  @keyframes smallButtonOutline {
    0% {
      outline-offset: 15px;
      outline-color: white;
      outline-width: 1px;
    }
    100% {
      outline-offset: 0;
      outline-color: black;
      outline-width: 1px;
    }
  }
`

export const ArrowIcon = styled(ArrowLeftIcon)`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`
