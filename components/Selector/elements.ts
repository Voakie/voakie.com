import styled from "@emotion/styled"

export const SelectionWrapper = styled.div`
  position: fixed;
  bottom: -200px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  max-width: 1500px;
  margin: auto;
`

export const OptionWrapper = styled.div`
  width: 300px;
  height: 150px;
  border: 1px solid #313131;
  border-radius: 5px;
  outline: 0px solid white;
  padding: 10px;
  margin: 10px;
  font-family: "Montserrat";
  transition: color 0.3s, padding-top 0.3s, border-color 0.3s;
  padding-top: 20px;
  cursor: pointer;

  .dark & {
    color: #949494;
  }

  &.active {
    padding-top: 10px;
    border-color: #949494;
    animation: optionanim 0.2s;
  }

  @keyframes optionanim {
    0% {
      outline-offset: 50px;
      outline-color: black;
      outline-width: 1px;
    }
    60% {
      outline-offset: 0;
      outline-color: white;
      outline-width: 1px;
    }
    65% {
      outline-offset: 0;
      outline-color: white;
      outline-width: 0px;
    }
    100% {
      outline-offset: 0;
      outline-color: black;
      outline-width: 0px;
    }
  }
`

export const OptionHeading = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 5px;
  transition: color 0.3s;

  .dark & {
    color: #eaeaea;
  }
`
