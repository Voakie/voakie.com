import * as React from "react"
import { Canvas } from "./elements"
import { Star } from "./Star"

interface Props {
  showStars: boolean
}

interface State {
  starsEnabled: boolean
  width: number
  height: number
}

export class Stars extends React.Component<Props, State> {
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
    this.orientationChange = this.orientationChange.bind(this)
    this.onResize = this.onResize.bind(this)
  }

  componentDidMount() {
    const canvas = document.querySelector("#stars") as HTMLCanvasElement | null
    const ctx = canvas?.getContext("2d")
    const stars: Star[] = []

    for (let i = 0; i < window.innerWidth / 4; i++) {
      stars[i] = new Star(0, 0, 400, 400)
    }

    if (ctx) {
      const draw = () => {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
        ctx.fillStyle = "black"
        ctx.strokeStyle = "black"

        for (const star of stars) {
          if (this.props.showStars) {
            const pos = star.pos()
            if (pos.posY < -5) {
              stars[stars.indexOf(star)] = new Star(0, 405, 400, 410)
            } else {
              ctx.fillStyle = `rgba(0, 0, 0, ${star.zIndex / 10})`
              ctx.strokeStyle = `rgba(0, 0, 0, ${star.zIndex / 10})`
              ctx.fillRect(pos.posX, pos.posY, 2, 2)
            }
          }
        }

        if (this.animate) requestAnimationFrame(draw)
      }

      requestAnimationFrame(draw)
    }

    document.addEventListener("mousemove", this.mouseMove)
    window.addEventListener("deviceorientation", this.orientationChange, true)
    window.addEventListener("resize", this.onResize)
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.mouseMove)
    window.removeEventListener("deviceorientation", this.orientationChange, true)
    window.removeEventListener("resize", this.onResize)
    this.animate = false
  }

  mouseMove(e: MouseEvent) {
    this.mouseX = e.clientX
    this.mouseY = e.clientY
  }

  orientationChange(e: DeviceOrientationEvent) {
    this.mouseX = ((e.gamma || 0) + (e.alpha || 0)) * 10
    this.mouseY = (e.beta || 0) * 10
  }

  onResize(_: UIEvent) {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  render() {
    return (
      <Canvas
        className={this.props.showStars ? "" : "hidden"}
        id="stars"
        width={this.state.width}
        height={this.state.height}
      />
    )
  }
}
