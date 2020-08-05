import { Container } from "./elements"

interface Props {
  posX: number
  posY: number
}

export function FloatingArrow({ posX, posY }: Props) {
  return (
    <Container
      className="floatingarrow"
      style={{
        transform: `translate(${posX}px, ${posY}px)`,
      }}
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-arrow-down-short"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"
        />
        <path fillRule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z" />
      </svg>
    </Container>
  )
}
