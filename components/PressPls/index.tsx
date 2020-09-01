import { Wrap, Text } from "./elements"

interface Props {
  stage: number
  displayOn: number
  children: string
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void
  wrapStyle?: React.CSSProperties
}

export function PressPls({ stage, displayOn, children, onClick, wrapStyle }: Props) {
  if (stage !== displayOn) return null

  return (
    <Wrap style={wrapStyle}>
      <Text onClick={onClick}>{children}</Text>
    </Wrap>
  )
}
