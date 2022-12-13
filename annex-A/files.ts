export const fileAsString = (path: string): string =>
    new TextDecoder().decode(Deno.readFileSync(path))


export const fileAsLines = (path: string): string[] => {
    const lines = fileAsString(path)
        .split(/\n/)    // split on newlines
    return lines[lines.length - 1] === ""
        ? lines.slice(0, lines.length - 1)
        : lines
}


export const readAsJson = (path: string): any =>
    JSON.parse(fileAsString(path))

