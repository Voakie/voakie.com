import * as React from "react"
import styled from "@emotion/styled"
import p5 = require("p5")
import { snakeGame } from "./snake"
import { EventEmitter } from "events"

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`

const coms = new EventEmitter()

interface GameContainerP {
  game: string
  stopHandler: (msg: string) => void
}

class GameContainer extends React.Component<GameContainerP> {
  p5ref?: p5

  constructor(props: GameContainerP) {
    super(props)

    document.addEventListener("keypress", (event) => {
      if (event.key === "c") {
        coms.emit("stop", "Game quit.")
      }
    })

    coms.addListener("stop", (msg: string) => {
      this.stopSketch(msg)
    })

    this.stopSketch = this.stopSketch.bind(this)
  }

  componentDidMount() {
    switch (this.props.game) {
      case "snake":
        this.p5ref = new p5(snakeGame)
        break
      default:
        console.error("Invalid game")
    }
  }

  componentWillUnmount() {
    coms.removeAllListeners("stop")
  }

  stopSketch(msg: string) {
    this.p5ref?.remove()
    this.props.stopHandler(msg)
  }

  render() {
    return (
      <Container>
        <div id="game-canvas"></div>
      </Container>
    )
  }
}

export { GameContainer, coms }
