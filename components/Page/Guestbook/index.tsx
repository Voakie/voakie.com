import * as React from "react"
import { Guestwrap } from "./elements"
import { TextReveal } from "@component/Reveal/Text"

export class Guestbook extends React.Component {
  render() {
    return (
      <Guestwrap>
        <TextReveal delay={1500} size="large">
          Leave a Signature on the canvas below
        </TextReveal>
      </Guestwrap>
    )
  }
}
