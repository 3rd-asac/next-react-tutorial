import * as fs from "./foo";

class A extends fs.Animal {
    say() {
        return "AAA";
    }
}

let AA: fs.Animal = new A("AAAAA", 3);
let so = AA.say();
console.log(so);
