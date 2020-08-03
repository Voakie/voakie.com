import * as React from "react"
import * as ReactDOM from "react-dom"
import { Terminal } from "./components/Terminal"

console.log(".-- .. -. -.. --- .-- .-.-.- . .- ... - . .-. .-.-.- . --. --. -.--. -.--.-")

class AppRoot extends React.Component {
  render() {
    return <Terminal />
  }
}

;(window as any)[a("ZWFzdGVy")] = {}
;(window as any)[a("ZWFzdGVy")][a("ZWdn")] = () => {
  location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}

ReactDOM.render(<AppRoot />, document.querySelector("#root"))

function a(b: string) {
  return atob(b)
}
