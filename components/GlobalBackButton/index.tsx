import { ArrowIcon, Button } from "@component/GlobalBackButton/elements"
import { useEffect, useRef, useState } from "react"

function useTimeout(active: boolean, ms: number, cb: () => void) {
  const timeout = useRef<number>()
  const callback = useRef(cb)

  useEffect(() => {
    if (active) {
      timeout.current = window.setTimeout(() => {
        callback.current()
      }, ms)
    }

    return () => {
      window.clearTimeout(timeout.current)
    }
  }, [active])

  useEffect(() => {
    callback.current = cb
  }, [cb])
}

export function GlobalBackButton({ show, onClick, delay }: {show: boolean, onClick(): void, delay: number}) {
  const [display, setDisplay] = useState(false)

  useTimeout(show, delay, () => {
    setDisplay(true)
  })

  useEffect(() => {
    if (!show && display) {
      setDisplay(false)
    }
  }, [show, display])

  if (!show || !display) return <div></div>

  return <Button onClick={onClick}>
    <ArrowIcon />
    <span>BACK</span>
  </Button>
}
