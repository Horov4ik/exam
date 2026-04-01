import { IAggregate } from "./IAggregate";
import { CollectionIterator } from "./CollectionIterator";

export class Collection<T> implements IAggregate<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  createIterator() {
    return new CollectionIterator<T>(this.items);
  }
}
