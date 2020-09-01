import styled from "@emotion/styled"

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
  padding-bottom: 30vh;
`

export const ProjectEl = styled.div`
  height: 150px;
  width: 300px;
  background: rgba(200, 200, 200, 0.2);
  margin: 50px;
  backdrop-filter: blur(2px);
  font-family: "Montserrat";
  transition: color 0.2s, background 0.2s;
  padding: 10px;
  outline: 0px solid black;
  cursor: pointer;

  .dark & {
    color: #949494;
  }

  &:hover {
    animation: optionanim 0.2s;
    background: rgba(200, 200, 200, 0.4);
  }

  &:hover span {
    color: #2b2bce;
    text-decoration: underline;
  }

  &:hover svg {
    opacity: 1;
  }

  @media screen and (max-width: 820px) {
    transform: unset !important;
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
