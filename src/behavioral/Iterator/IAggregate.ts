import { IIterator } from "./IIterator";

export interface IAggregate<T> {
  createIterator(): IIterator<T>;
}
