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

  @media screen and (max-width: 900px) {
    letter-spacing: 30px;
    font-size: 150px;
  }

  @media screen and (max-width: 630px) {
    letter-spacing: 20px;
    font-size: 50px;
  }

  @media screen and (max-height: 550px) {
    letter-spacing: 20px;
    font-size: 50px;
  }
`
