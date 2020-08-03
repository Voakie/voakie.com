import * as React from "react"
import styled from "@emotion/styled"
import { TerminalInput } from "./TerminalInput"
import { processCommand, fs } from "../processCommand"
import { GameContainer } from "../apps/game"

interface TerminalS {
  lines: string[]
  enableInput: boolean
  gameActive: boolean
  gameName?: string
}

const TerminalContent = styled.div`
  font-family: consolas;
  color: white;
  width: 100%;
  height: 100%;
`

const TerminalLine = styled.div`
  font-size: 18px;
  height: 22px;
`

class Terminal extends React.Component<{}, TerminalS> {
  constructor(props: {}) {
    super(props)

    this.state = {
      lines: [],
      enableInput: false,
      gameActive: false,
    }

    this.addLineTrigger = this.addLineTrigger.bind(this)
    this.inputTrigger = this.inputTrigger.bind(this)
    this.playGame = this.playGame.bind(this)
    this.stopGame = this.stopGame.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.addLineTrigger(
        "██╗░░░██╗░█████╗░░█████╗░██╗░░██╗██╗███████╗░░░░█████╗░░█████╗░███╗░░░███╗",
        false,
      )
    }, 100)

    setTimeout(() => {
      this.addLineTrigger(
        "██║░░░██║██╔══██╗██╔══██╗██║░██╔╝██║██╔════╝░░░██╔══██╗██╔══██╗████╗░████║",
        false,
      )
    }, 200)

    setTimeout(() => {
      this.addLineTrigger(
        "╚██╗░██╔╝██║░░██║███████║█████═╝░██║█████╗░░░░░██║░░╚═╝██║░░██║██╔████╔██║",
        false,
      )
    }, 300)

    setTimeout(() => {
      this.addLineTrigger(
        "░╚████╔╝░██║░░██║██╔══██║██╔═██╗░██║██╔══╝░░░░░██║░░██╗██║░░██║██║╚██╔╝██║",
        false,
      )
    }, 400)

    setTimeout(() => {
      this.addLineTrigger(
        "░░╚██╔╝░░╚█████╔╝██║░░██║██║░╚██╗██║███████╗██╗╚█████╔╝╚█████╔╝██║░╚═╝░██║",
        false,
      )
    }, 500)

    setTimeout(() => {
      this.addLineTrigger(
        "░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝╚══════╝╚═╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝",
        false,
      )
    }, 600)

    setTimeout(() => {
      this.addLineTrigger("", false)
      this.setState({ enableInput: true })
    }, 700)
  }

  addLineTrigger(line: string, process: boolean = true) {
    const prod = process ? processCommand(line, this) + "\n " : line
    if (prod.indexOf("\n") !== -1) {
      const lines = prod.split("\n")
      lines.forEach((splitLine) => this.addLineTrigger(splitLine, false))
      return
    }

    const lines = this.state.lines
    lines.push(prod)
    this.setState({ lines })
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight)
    }, 100)
  }

  inputTrigger(input: string) {
    this.addLineTrigger(`voakie.com ${fs.path.join("/")}>` + input, false)
    this.addLineTrigger(input)
  }

  playGame(name: string) {
    this.setState({ gameActive: true, gameName: name })
  }

  stopGame(msg: string) {
    this.setState({ gameActive: false })
    this.addLineTrigger(msg, false)
  }

  render() {
    if (this.state.gameActive) {
      return <GameContainer game={this.state.gameName ?? ""} stopHandler={this.stopGame} />
    }

    return (
      <TerminalContent>
        {this.state.lines.map((line, i) => {
          return <TerminalLine key={i}>{line}</TerminalLine>
        })}
        {this.state.enableInput ? <TerminalInput inputTrigger={this.inputTrigger} /> : null}
      </TerminalContent>
    )
  }
}

export { Terminal }
