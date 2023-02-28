import { OptionWrapper, OptionHeading } from "./elements"
import * as React from "react"

interface Props {
  title: string
  body: string
  onClick: () => void
}

export class Option extends React.Component<Props> {
  render() {
    return (
      <OptionWrapper onClick={this.props.onClick}>
        <div className="optioncontent">
          <OptionHeading>{this.props.title}</OptionHeading>
          {this.props.body}
        </div>
      </OptionWrapper>
    )
  }
}
