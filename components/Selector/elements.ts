import styled from "@emotion/styled"

export const SelectionWrapper = styled.div`
  position: fixed;
  bottom: 10vh;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  max-width: 1500px;
  margin: auto;
  transform: translateY(200%);
  flex-wrap: wrap;
`

export const OptionWrapper = styled.div`
  width: 300px;
  min-height: 150px;
  border: 1px solid #313131;
  border-radius: 10px;
  outline: 0 solid white;
  margin: 10px;
  font-family: "Montserrat",sans-serif;
  transition: color 0.3s, padding-top 0.3s, border-color 0.3s, background-color 0.3s;
  padding: 20px;
  cursor: pointer;

  .dark & {
    color: #949494;
  }

  &:hover {
    border-color: #949494;
    animation: selectorOptionOutline 0.2s;
    background: none;
  }
  
  .dark &:hover {
    background-color: #262626;
  }

  @keyframes selectorOptionOutline {
    0% {
      outline-offset: 30px;
      outline-color: black;
      outline-width: 1px;
    }
    100% {
      outline-offset: 0;
      outline-color: #949494;
      outline-width: 1px;
      border: 1px solid black;
    }
  }

  @media screen and (max-height: 400px) {
    width: 200px;
    min-height: 100px;
    font-size: 12px;
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

  @media screen and (max-height: 400px) {
    font-size: 16px;
  }
`
