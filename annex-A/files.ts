export const readFileAsString = (path: string): string =>
    new TextDecoder().decode(Deno.readFileSync(path))


export const readFileAsLines = (path: string): string[] => {
    const lines = readFileAsString(path)
        .split(/\n/)    // split on newlines
    return lines[lines.length - 1] === ""
        ? lines.slice(0, lines.length - 1)
        : lines
}

