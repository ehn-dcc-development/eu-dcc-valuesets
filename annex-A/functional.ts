export const groupBy = <T>(ts: T[], keyFunc: (t: T) => string): [key: string, values: T[]][] => {
    const map: { [key: string]: T[] } = {}
    ts.forEach((t) => {
        const key = keyFunc(t)
        let group = map[key]
        if (group === undefined) {
            group = map[key] = []
        }
        group.push(t)
    })
    return Object.entries(map)
}

