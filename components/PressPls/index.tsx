import { Wrap, Text } from "./elements"

interface Props {
  stage: number
  displayOn: number
  children: string
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

export function PressPls({ stage, displayOn, children, onClick }: Props) {
  if (stage !== displayOn) return null

  return (
    <Wrap>
      <Text onClick={onClick}>{children}</Text>
    </Wrap>
  )
}
