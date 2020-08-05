import { OptionWrapper, OptionHeading } from "./elements"
import * as React from "react"

interface Props {
  title: string
  body: string
  selection: number
  setSelection: (selection: number) => void
  number: number
  setArrowPos: (data: { posX: number; posY: number }) => void
  nonce: number
  locked: boolean
  onSelectDone: (selection: number) => void
}

interface State {
  active: boolean
}

export class Option extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      active: false,
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.selection === this.props.number && !this.state.active) {
      this.setState({ active: true })
    } else if (this.props.selection !== this.props.number && this.state.active)
      this.setState({ active: false })

    if (prevProps.nonce === this.props.nonce && prevProps.selection === this.props.number) return

    if (this.props.selection === this.props.number) {
      const bounds = document.querySelector("#option-" + this.props.number)?.getBoundingClientRect()
      if (bounds) {
        this.props.setArrowPos({
          posX: bounds.left + bounds.width / 2,
          posY: bounds.top - 60,
        })
      }
    }
  }

  render() {
    return (
      <OptionWrapper
        className={this.state.active ? "active" : ""}
        id={"option-" + this.props.number}
        onMouseEnter={() => {
          if (!this.props.locked) this.props.setSelection(this.props.number)
        }}
        onClick={() => {
          this.props.onSelectDone(this.props.number)
        }}
      >
        <div className="optioncontent">
          <OptionHeading>{this.props.title}</OptionHeading>
          {this.props.body}
        </div>
      </OptionWrapper>
    )
  }
}
