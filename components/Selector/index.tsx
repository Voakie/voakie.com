import { SelectionWrapper } from "./elements"
import { Option } from "./Option"
import anime from "animejs"
import * as React from "react"
import { FloatingArrow } from "@component/FloatingArrow"

interface Props {
  stage: number
  onSelectDone: (selection: number) => void
}

interface State {
  selection: number
  allowSelection: boolean
  nonce: number
  arrowOn: boolean
  arrowPos: { posX: number; posY: number }
}

export class Selector extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      selection: 0,
      allowSelection: false,
      nonce: Math.random(),
      arrowOn: false,
      arrowPos: { posX: 0, posY: 0 },
    }

    this.onResize = this.onResize.bind(this)
    this.onKey = this.onKey.bind(this)
    this.setSelection = this.setSelection.bind(this)
    this.setArrowPos = this.setArrowPos.bind(this)
  }

  componentDidUpdate(prevProps: Props) {
    if (
      (prevProps.stage === 0 && this.props.stage === 1) ||
      (prevProps.stage === 2 && this.props.stage === 1)
    ) {
      setTimeout(() => {
        const bounds = document.querySelector("#option-" + 0)?.getBoundingClientRect()
        if (bounds) {
          this.setArrowPos({
            posX: bounds.left + bounds.width / 2,
            posY: bounds.top - 60,
          })
        }

        this.setState({ arrowOn: true, nonce: Math.random(), allowSelection: true })
      }, 400)
    } else if (prevProps.stage === 1 && this.props.stage === 2) {
      this.setState({ arrowOn: false, allowSelection: false })
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize)
    window.addEventListener("keydown", this.onKey)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize)
    window.removeEventListener("keydown", this.onKey)
  }

  onResize() {
    this.setState({ nonce: Math.random() })
  }

  onKey(e: KeyboardEvent) {
    if (this.props.stage === 1) {
      if (e.which === 37 && this.state.selection > 0) {
        if (!this.state.allowSelection) return
        this.setState({ selection: this.state.selection - 1 })
      } else if (e.which === 39 && this.state.selection < 1) {
        if (!this.state.allowSelection) return
        this.setState({ selection: this.state.selection + 1 })
      } else if (e.which === 13) {
        this.props.onSelectDone(this.state.selection)
      }
    }
  }

  setSelection(selection: number) {
    if (!this.state.allowSelection) return
    this.setState({ selection })
  }

  setArrowPos(data: { posX: number; posY: number }) {
    this.setState({ arrowPos: data })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.arrowOn ? (
          <FloatingArrow posX={this.state.arrowPos.posX} posY={this.state.arrowPos.posY} />
        ) : null}
        <SelectionWrapper className="selectionwrap">
          <Option
            title="Projects"
            body="Take a look at a selection of the most useful tools on the internet"
            selection={this.state.selection}
            setSelection={this.setSelection}
            number={0}
            setArrowPos={this.setArrowPos}
            nonce={this.state.nonce}
            locked={this.props.stage !== 1}
            onSelectDone={this.props.onSelectDone}
          />
          <Option
            title="About"
            body="How to reach me and how this site was made"
            selection={this.state.selection}
            setSelection={this.setSelection}
            number={1}
            setArrowPos={this.setArrowPos}
            nonce={this.state.nonce}
            locked={this.props.stage !== 1}
            onSelectDone={this.props.onSelectDone}
          />
        </SelectionWrapper>
      </React.Fragment>
    )
  }
}
