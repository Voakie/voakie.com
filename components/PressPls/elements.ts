import styled from "@emotion/styled"

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
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  outline: 1px solid black;
  -moz-outline-radius: 10px;
  padding: 10px;
  animation: enteranim 2s infinite;
  cursor: pointer;
  background: white;

  &:hover {
    background: rgb(239 239 239);
  }

  @keyframes enteranim {
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
`
