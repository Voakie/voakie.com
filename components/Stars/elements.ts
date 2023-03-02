import styled from "@emotion/styled"

export const Canvas = styled.canvas`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: -10;
  pointer-events: none;
  opacity: 100%;
  transition: opacity 2s;

  &.hidden {
    opacity: 0;
  }
`
