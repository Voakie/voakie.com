import styled from "@emotion/styled"

export const JumboEl = styled.div`
  font-family: "Overpass";
  position: fixed;
  top: 20vh;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 220px;
  letter-spacing: 40px;
  transition: color 0.5s;

  .dark & {
    color: #d0d0d0;
  }
`
