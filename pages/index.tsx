import * as React from "react"
import { Jumbo } from "@component/Jumbo"
import Head from "next/head"
import { PressPls } from "@component/PressPls"
import anime from "animejs"
import { Selector } from "@component/Selector"
import { Stars } from "@component/Stars"
import { Projects } from "@component/Page/Project"
import styled from "@emotion/styled"
import { About } from "@component/Page/About"
import { GithubAd } from "@component/GithubAd"
import qs from "querystring"
import { Header } from "@component/Header/elements"
import { GlobalBackButton } from "@component/GlobalBackButton"

interface State {
  stage: number
  selectedPage: number
  transitioning: boolean
}

const ProjectWrap = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transform: translateY(100vh);
`

export default class Voakie extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props)

    this.state = {
      stage: 0,
      selectedPage: 0,
      transitioning: false,
    }

    this.onKey = this.onKey.bind(this)
    this.forwardStage1 = this.forwardStage1.bind(this)
    this.forwardStage2 = this.forwardStage2.bind(this)
    this.backwardStage1 = this.backwardStage1.bind(this)
    this.getSelectedPage = this.getSelectedPage.bind(this)
  }

  componentDidMount() {
    document.addEventListener("keypress", this.onKey)

    const query = qs.parse(location.search.replace("?", ""))
    if ("goto" in query) {
      switch (query.goto) {
        case "2":
          if ("page" in query) {
            this.forwardStage1()
            this.forwardStage2(parseInt(query.page?.toString() || ""))
          }
          break
        case "1":
          this.forwardStage1()
          break
        default:
          console.log("Unknown query string", query)
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.onKey)
  }

  onKey(e: KeyboardEvent) {
    if (this.state.stage === 0 && e.key === "Enter") {
      this.forwardStage1()
    }
  }

  forwardStage1() {
    if (this.state.transitioning) return

    anime({
      targets: [".jumbo"],
      letterSpacing: 0,
      duration: 1000,
    })

    anime({
      targets: ".selectionwrap",
      translateY: [400, 0],
      duration: 1000,
    })

    document.querySelector("body")?.classList.add("dark")

    this.setState({ stage: 1 })
  }

  forwardStage2(selection: number) {
    if (this.state.transitioning) return

    this.setState({ stage: 2, selectedPage: selection, transitioning: true })

    anime({
      targets: [".jumbo"],
      translateY: "-200vh",
      duration: 2000,
      easing: "cubicBezier(0.670, 0.200, 0.395, 1.035)",
    })

    anime({
      targets: [".selectionwrap"],
      translateY: "-150vh",
      duration: 2000,
      easing: "cubicBezier(0.670, 0.200, 0.395, 1.035)",
    })

    anime({
      targets: "canvas",
      translateY: "100vh",
      duration: 150,
      easing: "linear",
    })

    document.querySelector("body")?.classList.remove("dark")

    setTimeout(() => {
      anime({
        targets: "canvas",
        translateY: ["100vh", "0vh"],
        duration: 1500,
        easing: "cubicBezier(0.670, 0.200, 0.395, 1.035)",
      })

      anime({
        targets: [".pwrap"],
        translateY: ["100vh", "0vh"],
        duration: 1700,
        easing: "cubicBezier(0.670, 0.200, 0.395, 1.035)",
      })
    }, 600)

    setTimeout(() => {
      this.setState({ transitioning: false })
    }, 1000)
  }

  backwardStage1() {
    if (this.state.transitioning) return

    this.setState({ stage: 1, transitioning: true })

    anime({
      targets: [".jumbo"],
      translateY: 0,
      duration: 1000,
      easing: "cubicBezier(0.670, 0.200, 0.395, 1.035)",
    })

    anime({
      targets: [".selectionwrap"],
      translateY: ["400px", "0px"],
      duration: 1000,
    })

    document.querySelector("body")?.classList.add("dark")

    anime({
      targets: "canvas",
      translateY: 0,
      duration: 1500,
      easing: "cubicBezier(0.670, 0.200, 0.395, 1.035)",
    })

    setTimeout(() => {
      this.setState({ transitioning: false })
    }, 1000)
  }

  getSelectedPage() {
    if (this.state.stage !== 2) return

    switch (this.state.selectedPage) {
      case 0:
        return (
          <ProjectWrap className="pwrap">
            <Projects back={this.backwardStage1} />
          </ProjectWrap>
        )
      case 1:
        return <About back={this.backwardStage1} />
    }
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Voakie.com</title>
          <meta charSet="utf8" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Overpass:wght@600&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <Header>
          <GlobalBackButton show={this.state.stage === 2} onClick={this.backwardStage1} delay={2000} />
          <GithubAd />
        </Header>
        <Stars showStars={this.state.stage === 2 && this.state.selectedPage === 0} />
        <Jumbo />
        <PressPls stage={this.state.stage} displayOn={0} onClick={this.forwardStage1}>
          ENTER
        </PressPls>
        <Selector stage={this.state.stage} onSelectDone={this.forwardStage2} />

        {this.getSelectedPage()}
      </React.Fragment>
    )
  }
}
