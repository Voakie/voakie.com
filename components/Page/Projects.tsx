import * as React from "react"
import { ProjectEl, ProjectWrapper, ProjectElHeading } from "./projectsElements"
import anime from "animejs"
import { PressPls } from "@component/PressPls/PressPls"

interface Props {
  back: () => void
}

export class Projects extends React.Component<Props> {
  constructor(props: Props) {
    super(props)

    this.onKey = this.onKey.bind(this)
  }

  onPressClick(e: React.MouseEvent<HTMLDivElement>) {
    this.props.back()
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKey)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKey)
  }

  onKey(e: KeyboardEvent) {
    if (e.which === 27) {
      this.props.back()
    }
  }

  render() {
    return (
      <React.Fragment>
        <ProjectWrapper>
          <ProjectCard
            id="p1"
            title="WidgetBot"
            body="Free Discord Widgets to embed in your website"
            url="https://widgetbot.io/"
          />
          <ProjectCard
            id="p2"
            title="Vindows"
            body="Very simple desktop interface created with React"
            url="https://voakie.com/projects/vindows/index.html"
          />
          <ProjectCard
            id="p3"
            title="Streamcounter"
            body="Display statistics about your stream, in your stream. Made by @xxdocobxx"
            url="https://streamcounter.speechchat.com/"
          />
          <ProjectCard
            id="p4"
            title="Streamcountdown"
            body="A countdown for your stream intro"
            url="https://voakie.com/projects/stream-countdown/new.html"
          />
          <ProjectCard
            id="p5"
            title="Tic-Tac-Toe"
            body="Not sure why this is here"
            url="https://voakie.com/projects/tic-tac-toe/index.html"
          />
        </ProjectWrapper>
        <PressPls stage={2} displayOn={2} onClick={this.onPressClick.bind(this)}>
          BACK
        </PressPls>
      </React.Fragment>
    )
  }
}

interface ProjectCardProps {
  title: string
  body: string
  id: string
  url: string
}

export class ProjectCard extends React.Component<ProjectCardProps> {
  zIndex = getRandomInt(10, 40)

  constructor(props: ProjectCardProps) {
    super(props)

    this.mouseMove = this.mouseMove.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  componentDidMount() {
    document.addEventListener("mousemove", this.mouseMove)
  }

  componentWillUnmount() {
    document.removeEventListener("mousemove", this.mouseMove)
  }

  mouseMove(e: MouseEvent) {
    anime({
      targets: "." + this.props.id,
      translateX: (e.clientX / window.innerWidth) * this.zIndex,
      translateY: (e.clientY / window.innerHeight) * this.zIndex,
      duration: 100,
    })
  }

  onClick() {
    window.open(this.props.url)
  }

  render() {
    return (
      <ProjectEl className={this.props.id} onClick={this.onClick}>
        <ProjectElHeading>
          {this.props.title}
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            className="bi bi-box-arrow-up-right"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1.5 13A1.5 1.5 0 0 0 3 14.5h8a1.5 1.5 0 0 0 1.5-1.5V9a.5.5 0 0 0-1 0v4a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 5v8zm7-11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.5H9a.5.5 0 0 1-.5-.5z"
            />
            <path
              fillRule="evenodd"
              d="M14.354 1.646a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.708-.708l8-8a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </ProjectElHeading>
        {this.props.body}
      </ProjectEl>
    )
  }
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
