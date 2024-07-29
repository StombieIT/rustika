export function combinePaths(paths: string[]): string {
    return paths.map(path => `@import "${path}";\n`).join("");
}