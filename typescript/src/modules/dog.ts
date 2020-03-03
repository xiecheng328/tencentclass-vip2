namespace A {
    interface Animal2 {
        name: string;
        eat(str: string): void;
    }
    export class Dog2 implements Animal2 {
        name: string;
        constructor(name: string){
            this.name = name;
        }
        eat(str: string){
            console.log(`${this.name}正在吃${str}`);
        }
    }
}

namespace B {
    interface Animal2 {
        name: string;
        eat(str: string): void;
    }
    export class Dog2 implements Animal2 {
        name: string;
        constructor(name: string){
            this.name = name;
        }
        eat(str: string){
            console.log(`${this.name}正在吃${str}`);
        }
    }
}

export {
    A,
    B
}