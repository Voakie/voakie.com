interface Directory {
  name: string
  dirs?: Directory[]
  files?: IFile[]
  locked?: boolean
}

interface IFile {
  name: string
  content?: string
  locked?: boolean
}

const structure: Directory = {
  name: "$",
  dirs: [
    {
      name: "home",
      dirs: [
        {
          name: "voakie",
          dirs: [
            {
              name: "vault",
              files: [
                {
                  name: "easteregg.txt",
                  content: "Check the console for a hint",
                },
              ],
            },
          ],
        },
        {
          name: "guest",
        },
      ],
    },
    {
      name: "etc",
      dirs: [
        {
          name: "http",
        },
        { name: "https" },
      ],
    },
    {
      name: "logs",
      files: [
        {
          name: "http.txt",
          locked: true,
        },
        { name: "https.txt", locked: true },
        { name: "system.txt", locked: true },
      ],
    },
  ],
}

class Filesystem {
  path: string[] = ["$"]

  trace() {
    var finder = structure
    const _path = Array.from(this.path)
    _path.shift()

    for (const pathdir of _path) {
      const ndir = finder.dirs?.find(sdir => sdir.name === pathdir)
      if (typeof ndir === "object") finder = ndir
      else throw "path trace error"
    }

    return finder
  }

  moveDown(dir: string) {
    const cdir = this.trace()
    var mddir = cdir.dirs?.find(sdir => sdir.name === dir)

    if (typeof mddir === "object") {
      this.path.push(dir)
      return ""
    } else {
      return `Directory "${dir}" not found`
    }
  }

  moveUp() {
    if (this.path.length !== 1) {
      this.path.pop()
    }

    return ""
  }

  dir() {
    const dir = this.trace()
    const dirs = dir.dirs?.map(sdir => sdir.name) ?? []
    const files = dir.files?.map(sfile => sfile.name) ?? []
    return dirs.join(" ") + " " + files.join(" ")
  }

  read(_file: string) {
    const dir = this.trace()
    const file = dir.files?.find(sfile => sfile.name === _file)

    if (typeof file === "object") {
      if (file.locked) {
        return "Access denied"
      } else {
        return file.content ?? ""
      }
    } else {
      return `File "${_file}" not found`
    }
  }
}

export { Filesystem }
