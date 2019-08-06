declare const EGG_PATH: unique symbol;

declare module 'egg' {
  export interface Application {
    readonly pkgName: string;
    readonly [EGG_PATH]: string;
  }
  export interface Agent {
    readonly [EGG_PATH]: string;
  }
}

export * from 'egg';
