import { IIterator } from "./IIterator";

export class CollectionIterator<T> implements IIterator<T> {
  private items: T[];
  private position: number = 0;

  constructor(items: T[]) {
    this.items = items;
  }

  hasNext(): boolean {
    return this.position < this.items.length;
  }

  next(): T {
    if (!this.hasNext()) {
      throw new Error("Елементів більше немає");
    }
    return this.items[this.position++];
  }

  reset(): void {
    this.position = 0;
  }
}
