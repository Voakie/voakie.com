export class Star {
  posX: number
  posY: number
  zIndex: number

  constructor(maxX: number, maxY: number) {
    this.posX = getRandomInt(0, maxX)
    this.posY = getRandomInt(0, maxY)
    this.zIndex = getRandomInt(0, 10)
  }

  pos(mouseX: number, mouseY: number) {
    const x = this.posX * (window.innerWidth / 400)
    const y = this.posY * (window.innerHeight / 400)

    return {
      posX: x + (mouseX / window.innerWidth) * 4 * this.zIndex,
      posY: y + (mouseY / window.innerHeight) * 4 * this.zIndex,
    }
  }
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
