/* namespace A {
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

let d1 = new A.Dog2('旺财');
d1.eat('骨头');

let d2 = new B.Dog2('大黄');
d2.eat('狗粮'); */

import {A, B} from './modules/dog'
let d3 = new A.Dog2('xx')
d3.eat('abc');

let d4 = new B.Dog2('yy');
d4.eat('xyz');


// 模块


class Food{
    public x: number;
    public y: number;
    public color: string;
    constructor(x: number, y: number, color: string = '#f00'){
        this.x = x;
        this.y = y;
        this.color = color;
    }
}
// 第一次 游戏初始化
let f1 = new Food(100, 100);

// 当蛇吃掉一个食物，再去生成一个食物
new Food(150, 100);

