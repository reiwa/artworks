import { Animate } from "./animate"

type Context = CanvasRenderingContext2D

export type AnimateFactory = (context: Context) => Animate
