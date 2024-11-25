// src/global.d.ts
interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
  }
  
  interface IteratorResult<T> {
    done: boolean;
    value: T;
  }