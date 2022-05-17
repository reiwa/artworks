import { Particle } from "../models/particle"
import { AnimateFactory } from "../types/animateFactory"

export const hello: AnimateFactory = (context: CanvasRenderingContext2D) => {
  const seeds = [...Array(1024)].map(() => {
    return 1 + Math.floor(Math.random() * 6)
  })

  const colors = [
    "dodgerblue",
    "cornflowerblue",
    "deepskyblue",
    "lightskyblue",
    "skyblue",
    "lightblue",
    "powderblue",
    "paleturquoise",
    "turquoise",
    "mediumturquoise",
    "darkturquoise",
    "lightseagreen",
    "cadetblue",
  ]

  const particles = seeds.map((seed) => {
    const x = Math.random() * context.canvas.width
    const y = Math.pow(2, Math.random() * 10) * (Math.random() < 0.5 ? 1 : -1)
    const size = seed
    const xVel = 0.2 + Math.random() * 0.4
    const yVel = 0.2 * Math.random()
    const color = colors[Math.floor(Math.random() * colors.length)]
    return new Particle({ x, y, size, xVel, yVel, color })
  })

  return () => {
    context.fillStyle = "lightgrey"
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    context.save()
    context.translate(0, context.canvas.height / 2)
    for (const particle of particles) {
      particle.update(context)
      particle.render(context)
    }
    context.restore()
  }
}
