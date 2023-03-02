import styled from "@emotion/styled"
import { montserrat } from "../../../pages"

export const ProjectWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: auto;
  padding-top: 80px;
`

export const ProjectEl = styled.div`
  min-height: 150px;
  width: 300px;
  background: rgba(255, 255, 255, 0.2);
  margin: 50px;
  backdrop-filter: blur(2px);
  font-family: ${montserrat.style.fontFamily}, sans-serif;
  transition: color 0.2s, background 0.2s, border 0.2s;
  padding: 20px;
  outline: 0 solid black;
  cursor: pointer;
  border: 1px solid #eee;
  border-radius: 10px;

  .dark & {
    color: #949494;
  }

  &:hover {
    animation: projectCardOutline 0.2s;
    background: rgba(255, 255, 255, 0.4);
    outline: 1px solid black;
    border: 1px solid white;
  }

  &:hover svg {
    opacity: 1;
  }

  @media screen and (max-width: 820px) {
    transform: unset !important;
  }

  @keyframes projectCardOutline {
    0% {
      outline-offset: 30px;
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

export const ProjectElHeading = styled.span`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;

  & svg {
    transition: opacity 0.2s;
    margin-left: 10px;
    opacity: 0;
  }

  .dark & {
    color: #eaeaea;
  }
`
