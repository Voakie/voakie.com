import * as React from "react"
import { RevealableText } from "./elements"
import { PropsWithChildren } from "react"

interface TextRevealProps extends PropsWithChildren {
  size: "normal" | "large"
  delay: number
}

interface TextRevealState {
  reveal: boolean
}

export class TextReveal extends React.Component<TextRevealProps, TextRevealState> {
  timeout?: number

  constructor(props: TextRevealProps) {
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

  get classes() {
    let s = ""

    if (this.state.reveal) {
      s += " reveal "
    }

    if (this.props.size === "large") {
      s += " large "
    }

    return s
  }

  render() {
    return <RevealableText className={this.classes}>{this.props.children}</RevealableText>
  }
}
