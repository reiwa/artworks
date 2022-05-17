type Props = {
  x: number
  y: number
  xVel: number
  yVel: number
  size: number
  color: string
}

export class Particle {
  private count: number
  private x: number
  private y: number
  private xVel: number
  private yVel: number
  private size: number
  private color: string

  constructor(props: Props) {
    this.x = props.x
    this.y = props.y
    this.xVel = props.xVel
    this.yVel = props.yVel
    this.size = props.size
    this.color = props.color
    this.count = Math.floor(1024 * Math.random())
  }

  update(context: CanvasRenderingContext2D) {
    this.count = this.count + 1
    this.x = this.x + this.xVel
    if (this.x > context.canvas.width + this.size) {
      this.count = 0
      this.x = -this.size
    }
    const radius = (this.count * Math.PI) / 180
    this.y = this.y + this.yVel * Math.sin(radius)
  }

  render(context: CanvasRenderingContext2D) {
    context.beginPath()
    context.arc(this.x, this.y, this.size, 0, Math.PI * 2, true)
    context.fillStyle = this.color
    context.fill()
  }
}
