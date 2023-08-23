
export abstract class Animal {
	constructor(public name?: string, public age?: number){}
	abstract say(): string;
}
class Cat extends Animal  {

	say () {
		return "야옹";
	}
}
class Dog extends Animal {

  say() {
    return "멍멍";
  }

}
export let animals : Animal[] = [new Cat("야용이", 2), new Dog("멍멍이",4)];
let sounds = animals.map((a) => a.say()); // 화살표 함수

