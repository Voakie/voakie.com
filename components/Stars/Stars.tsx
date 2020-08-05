import * as React from "react"
import { Canvas } from "./elements"
import { EventEmitter } from "events"
import { Star } from "./Star"
import anime from "animejs"

interface Props {
  showStars: boolean
}

interface State {
  starsEnabled: boolean
  width: number
  height: number
}

export class Stars extends React.Component<Props, State> {
  coms = new EventEmitter()
  mouseX = 0
  mouseY = 0
  animate = true

  constructor(props: Props) {
    super(props)

    this.state = {
      starsEnabled: false,
      width: 400,
      height: 400,
    }

    this.mouseMove = this.mouseMove.bind(this)
  }

  componentDidMount() {
    const canvas = document.querySelector("#stars") as HTMLCanvasElement | null
    const ctx = canvas?.getContext("2d")
    const stars: Star[] = []

    anime({
      targets: "canvas",
      translateY: window.innerHeight,
    })

    for (let i = 0; i < 200; i++) {
      stars[i] = new Star(400, 400)
    }

    if (ctx) {
      const draw = () => {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        ctx.fillStyle = "black"
        ctx.strokeStyle = "black"

        for (const star of stars) {
          const pos = star.pos(this.mouseX, this.mouseY)
          if (this.props.showStars) ctx.fillRect(pos.posX, pos.posY, 2, 2)
        }

        if (this.animate) requestAnimationFrame(draw)
      }

      requestAnimationFrame(draw)
    }

    document.addEventListener("mousemove", this.mouseMove)
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.mouseMove)
    this.animate = false
  }

  mouseMove(e: MouseEvent) {
    this.mouseX = e.clientX
    this.mouseY = e.clientY
  }

  render() {
    return <Canvas id="stars" width={this.state.width} height={this.state.height} />
  }
}
