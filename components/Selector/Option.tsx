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
      <OptionWrapper>
        <div className="optioncontent" onClick={this.props.onClick}>
          <OptionHeading>{this.props.title}</OptionHeading>
          {this.props.body}
        </div>
      </OptionWrapper>
    )
  }
}
