import styled from "@emotion/styled"

export const Container = styled.div`
  height: 50px;
  width: 50px;
  transition: fill 0.3s;
  padding: 10px;
  cursor: pointer;
  z-index: 100;

  &:hover {
    background: rgba(200, 200, 200, 0.3);
  }

  .dark & {
    fill: white;

    &:hover {
      background: rgba(100, 100, 100, 0.3);
    }
  }
`
