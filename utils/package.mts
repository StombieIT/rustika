import { glob } from "glob";

export function loadStylesPaths(): Promise<string[]> {
    return glob("src/styles/**/*.scss");
}
