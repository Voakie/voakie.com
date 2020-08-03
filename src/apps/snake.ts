import p5 from "p5"
import { coms } from "./game"

const snake = (sketch: p5) => {
  let head: p5.Vector = sketch.createVector(10, 10)
  let tail: p5.Vector[] = [sketch.createVector(10, 9)]
  let apples: p5.Vector[] = [sketch.createVector(2, 2)]
  let direction: p5.Vector = sketch.createVector(0, 1)

  sketch.setup = () => {
    sketch.createCanvas(400, 420).parent("#game-canvas")
  }

  sketch.draw = () => {
    sketch.background("black")

    sketch.fill("white")
    sketch.text(`Press c to quit`, 0, 415)
    sketch.text(`Score: ${tail.length}`, 330, 415)

    sketch.stroke("black")
    sketch.fill("white")
    for (let x = 0; x < 20; x++) {
      for (let y = 0; y < 20; y++) {
        sketch.rect(x * 20, y * 20, 20, 20)
      }
    }

    sketch.fill("green")
    sketch.rect(head.x * 20, head.y * 20, 20, 20)

    for (const part of tail) {
      if (tail.indexOf(part) % 2 === 0) {
        sketch.fill("grey")
      } else sketch.fill("darkgrey")

      sketch.rect(part.x * 20, part.y * 20, 20, 20)
    }

    sketch.fill("red")
    for (const part of apples) {
      sketch.rect(part.x * 20, part.y * 20, 20, 20)
    }
  }

  const int = setInterval(() => {
    if (direction) {
      let oldHead = sketch.createVector(head.x, head.y)
      head = head.add(direction)

      if (head.x < 0 || head.x > 19 || head.y < 0 || head.y > 19) {
        coms.emit("stop", "You died. Score: " + tail.length)
      }

      tail.push(oldHead)
      let extend = true

      for (const part of tail) {
        if (part.x === head.x && part.y === head.y) {
          coms.emit("stop", "You died. Score: " + tail.length)
          break
        }
      }

      for (const apple of apples) {
        if (head.x === apple.x && head.y === apple.y) {
          apples.splice(apples.indexOf(apple), 1)
          extend = false
          break
        }
      }

      if (extend) {
        tail.shift()
      }
    }
  }, 500)

  const int2 = setInterval(() => {
    let x = sketch
      .random(0, 20)
      .toString()
      .split(".")[0]
    let y = sketch
      .random(0, 20)
      .toString()
      .split(".")[0]
    const napple = sketch.createVector(parseInt(x), parseInt(y))

    if (!apples.includes(napple)) {
      apples.push(napple)
    }
  }, 5000)

  sketch.keyPressed = () => {
    switch (sketch.key) {
      case "w":
        direction = sketch.createVector(0, -1)
        break
      case "a":
        direction = sketch.createVector(-1, 0)
        break
      case "s":
        direction = sketch.createVector(0, 1)
        break
      case "d":
        direction = sketch.createVector(1, 0)
        break
    }
  }

  coms.addListener("stop", () => {
    clearInterval(int)
    clearInterval(int2)
  })
}

export { snake as snakeGame }
