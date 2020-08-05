import styled from "@emotion/styled"

export const Container = styled.div`
  position: fixed;
  top: -50px;
  left: -50px;
  font-size: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s;
  animation: arrowanim infinite 1s;

  .dark & {
    color: #e0e0e0;
  }

  @keyframes arrowanim {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 800px) {
    display: none;
  }

  @media screen and (max-height: 400px) {
    display: none;
  }
`
