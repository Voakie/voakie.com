import * as React from "react"
import { RevealableImage } from "./elements"

interface ImageRevealProps {
  src: string
  delay: number
}

interface ImageRevealState {
  reveal: boolean
}

export class ImageReveal extends React.Component<ImageRevealProps, ImageRevealState> {
  timeout?: number

  constructor(props: ImageRevealProps) {
    super(props)

    this.state = {
      reveal: false,
    }
  }

  componentDidMount() {
    this.timeout = window.setTimeout(() => {
      this.setState({ reveal: true })
    }, this.props.delay)
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    return (
      <RevealableImage className={this.state.reveal ? "reveal" : ""}>
        <img style={{ height: "100%", width: "100%" }} src={this.props.src} />
      </RevealableImage>
    )
  }
}
