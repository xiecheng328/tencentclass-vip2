// 标准
// 属性接口
// interface FullName {
//     firstName: string;
//     lastName: string;
//     age?: number; // 可选属性
// }

// function print(name: FullName): string {
//     return name.firstName + name.lastName;
// }
// console.log(print({ firstName: 'xie', lastName: 'cheng' }));


// function print2(name: FullName): string {
//     return name.firstName + name.lastName;
// }
// let my = {
//     firstName: 'xie',
//     lastName: 'cheng',
//     age: 34
// };
// print2(my);

// //  类型断言
// /* print2({
//     firstName: 'xie',
//     lastName: 'cheng',
//     age: 34
// } as FullName); */
// print2({
//     lastName: 'cheng',
//     firstName: 'xie',
//     age: 34
// });

// // 函数接口
// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }
// let mySearch: SearchFunc = (source: string, subString: string) => {
//     let result = source.search(subString);
//     return result > -1;
// }

// // 可索引接口
// interface Arr {
//     [index: number]: string
// }
// let arr: Arr = ['1', '2', '3', 'abc'];

// interface Obj {
//     [index: string]: string
// }
// let userObj: Obj = {
//     name: 'xiecheng',
//     sex: '男'
// }

// // 类类型 ： 对类的约束
// interface Animal2 {
//     name: string;
//     eat(str: string): void;
// }
// class Dog2 implements Animal2 {
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }
//     eat(str: string){
//         console.log(`${this.name}正在吃${str}`);
//     }
// }
// let d2 = new Dog2('旺财');
// d2.eat('骨头');

// class Cat2 implements Animal2{
//     name: string;
//     constructor(name: string){
//         this.name = name;
//     }
//     eat(){
//         console.log(`${this.name}正在吃鱼`);
//     }
// }

// let c2 = new Cat2('咪咪');
// c2.eat();

// 接口的继承
/* interface Animal3{
    eat(): void;
}

interface People3 extends Animal3 {
    work(): void;
}

class Coder implements People3{
    public name: string;
    constructor(name: string){
        this.name = name;
    }
    eat(){
        console.log(this.name + '吃饭')
    }
    work(){
        console.log(this.name + '工作')
    }
}
let c3 = new Coder('小张');
c3.eat();
c3.work(); */

interface Animal4 {
    eat(): void;
}
interface People4 extends Animal4 {
    work(): void;
}
// 父类
class Programmer {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
    coding(code: string) {
        console.log(this.name + '学习' + code);
    }
}
// 子类
class Web extends Programmer implements People4 {
    constructor(name: string) {
        super(name);
    }
    eat() {
        console.log(this.name + '吃饭');
    }
    work() {
        console.log(this.name + '工作');
    }
}

let w = new Web('小王');
w.eat();
w.work();
w.coding('typescript');


