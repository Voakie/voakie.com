import * as React from "react"
import styled from "@emotion/styled"
import { fs } from "../processCommand"

interface TerminalInputP {
  inputTrigger: (line: string) => void
}

interface TerminalInputS {
  value: string
}

const TerminalInputEl = styled.input`
  background: none;
  color: white;
  border: none;
  outline: none;
  font-family: consolas;
  flex-grow: 1;
  font-size: 18px;
`

class TerminalInput extends React.Component<TerminalInputP, TerminalInputS> {
  constructor(props: TerminalInputP) {
    super(props)

    this.state = {
      value: "",
    }

    this.keyPress = this.keyPress.bind(this)
    this.onChange = this.onChange.bind(this)

    document.addEventListener("keypress", () => {
      ;(this.refs["input"] as HTMLInputElement)?.focus()
    })
  }

  keyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && this.state.value !== "") {
      this.props.inputTrigger(this.state.value)
      this.setState({ value: "" })
    }
  }

  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div style={{ display: "flex", fontSize: "18px" }}>
        voakie.com {fs.path.join("/")}
        {">"}
        <TerminalInputEl
          value={this.state.value}
          onChange={this.onChange}
          onKeyPress={this.keyPress}
          autoFocus
          ref="input"
        />
      </div>
    )
  }
}

export { TerminalInput }
