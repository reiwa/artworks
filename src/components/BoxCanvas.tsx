import { Box } from "@chakra-ui/react"
import { FC, useEffect, useRef } from "react"
import { AnimateFactory } from "../types/animateFactory"

type Props = {
  animateFactory: AnimateFactory
}

export const BoxCanvas: FC<Props> = (props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const frameRef = useRef(NaN)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas === null) return
    canvas.width = 1024
    canvas.height = 1024
    const context = canvas.getContext("2d")
    if (context === null) return
    const animate = props.animateFactory(context)
    const loop = (time: DOMHighResTimeStamp) => {
      animate(time)
      frameRef.current = window.requestAnimationFrame(loop)
    }
    frameRef.current = window.requestAnimationFrame(loop)
    return () => {
      window.cancelAnimationFrame(frameRef.current)
    }
  }, [props])

  return (
    <Box ref={canvasRef as any} as={"canvas"} height={"100%"} width={"100%"} />
  )
}
