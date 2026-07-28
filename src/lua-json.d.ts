declare module 'lua-json' {
  export function format(json: unknown): string;
  export function parse(lua: string): unknown;
}