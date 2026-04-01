import { Collection } from "./src/behavioral/Iterator";

const fruits = new Collection<string>();
fruits.add("Яблуко");
fruits.add("Банан");
fruits.add("Вишня");

const iterator = fruits.createIterator();

console.log("Ітерація по колекції:");
while (iterator.hasNext()) {
  console.log(iterator.next());
}

console.log("\nПовторна ітерація без скидання:");
while (iterator.hasNext()) {
  console.log(iterator.next()); // пусто
}

console.log("\nПісля скидання:");
iterator.reset();
while (iterator.hasNext()) {
  console.log(iterator.next());
}
