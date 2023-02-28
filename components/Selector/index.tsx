import { SelectionWrapper } from "./elements"
import { Option } from "./Option"
import * as React from "react"

interface Props {
  stage: number
  onSelectDone: (selection: number) => void
}

export class Selector extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <SelectionWrapper className="selectionwrap">
          <Option
            title="Projects"
            body="Take a look at a selection of the most useful tools on the internet"
            onClick={() => {
              this.props.onSelectDone(0)
            }}
          />
          <Option
            title="About"
            body="How to reach me and how this site was made"
            onClick={() => {
              this.props.onSelectDone(1)
            }}
          />
        </SelectionWrapper>
      </React.Fragment>
    )
  }
}
