import getCallerFile from "get-caller-file";

const production: boolean = process.env.NODE_ENV == 'production' || false;

/*
Levels:
1. Error
2. Warn
3. Info
4. Debug
*/

export function error(...content: any): void {
    console.error(`[E ${getCaller()}]`, ...content);
}

export function warn(...content: any): void {
    console.warn(`[W ${getCaller()}]`, ...content);
}

export function info(...content: any): void {
    console.log(`[I ${getCaller()}]`, ...content);
}

export function debug(...content: any): void {
    if (production) return;
    console.log(`[D ${getCaller()}]`, ...content);
}

// getCallerFile() but only the last part after the last \.
function getCaller(): string {
    const caller: string = getCallerFile(3);
    return caller.substr(caller.lastIndexOf('\\') + 1);
}