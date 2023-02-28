import styled from "@emotion/styled"
import { overpass } from "../../pages"

export const JumboEl = styled.div`
  font-family: ${overpass.style.fontFamily}, sans-serif;
  position: fixed;
  top: 20vh;
  left: 0;
  right: 0;
  text-align: center;
  font-size: min(220px, 25vw);
  letter-spacing: min(40px, 3vw);
  transition: color 0.5s;

  .dark & {
    color: #d0d0d0;
  }
`
