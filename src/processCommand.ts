import { Filesystem } from "./filesystem"
import { Terminal } from "./components/Terminal"

const fs = new Filesystem()

function processCommand(command: string, terminal: Terminal): string {
  const args = command.split(" ")

  try {
    switch (args[0].toLowerCase()) {
      case "help":
        return helpCommand(args)
      case "start":
        return startCommand(args)
      case "cd":
        return cdCommand(args)
      case "dir":
        return dirCommand(args)
      case "read":
        return readCommand(args)
      case "play":
        return playCommand(args, terminal)
      case "contact":
        return "Twitter: @djvoax\nEMail: contact@voakie.com"
      case "187":
        return _187
      default:
        return 'Unknown command. Type "help" for help'
    }
  } catch (e) {
    console.error(e)
    return e.toString()
  }
}

function helpCommand(args: string[]) {
  return `The following commands are available:
  help - Get a list of available commands
  start - Start an application
  play - Play a game
  cd - Move to a directory
  dir - See available directories
  read - Read a file
  contact - See contact information`
}

function startCommand(args: string[]): string {
  switch (args[1]) {
    case undefined:
      return `Usage: start <app>
      Available Apps: widgetbot | vindows | streamcounter | streamcountdown | tic-tac-toe`
    case "widgetbot":
      location.href = "https://widgetbot.io/"
      break
    case "vindows":
      location.href = "https://voakie.com/projects/vindows/"
      break
    case "streamcounter":
      location.href = "https://streamcounter.speechchat.com/"
      break
    case "streamcountdown":
      location.href = "http://voakie.com/projects/stream-countdown/"
      break
    case "tic-tac-toe":
      location.href = "http://voakie.com/projects/tic-tac-toe/"
      break
    default:
      return `App "${args[1]}" not found\nUsage: start <app>`
  }

  return "Redirecting..."
}

function cdCommand(args: string[]): string {
  switch (args[1]) {
    case undefined:
      return `Usage: cd <dir|..>
      See available directories with "dir"`
    case "..":
      return fs.moveUp()
    default:
      return fs.moveDown(args[1])
  }
}

function dirCommand(args: string[]): string {
  return fs.dir()
}

function readCommand(args: string[]): string {
  switch (args[1]) {
    case undefined:
      return `Usage: read <filename>
      See available files with "dir"`
    default:
      return fs.read(args[1])
  }
}

function playCommand(args: string[], terminal: Terminal): string {
  switch (args[1]) {
    case undefined:
      return `Usage: play <game>
      Available games: snake`
    case "snake":
      terminal.playGame("snake")
      return ""
    default:
      return `Usage: play <game>
      Available games: snake`
  }
}

const _187 = `▄█░ ▄▀▀▄ ▀▀▀█ ist
░█░ ▄▀▀▄ ░░█░ die
▄█▄ ▀▄▄▀ ░▐▌░ gang`

export { processCommand, fs }
