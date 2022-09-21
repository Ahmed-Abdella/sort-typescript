import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LInkedList";

const numbersCollection = new NumbersCollection([10000, 3, -5, 0]);
const characterCollection = new CharactersCollection("klangnomMMMad");
const linkedList = new LinkedList();

linkedList.add(5);
linkedList.add(-1000);
linkedList.add(300);
linkedList.add(10);

numbersCollection.sort();
characterCollection.sort();
linkedList.sort();

console.log(characterCollection.data);
console.log(numbersCollection.data);
linkedList.print();
