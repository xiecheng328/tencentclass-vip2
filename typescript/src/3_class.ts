/* function People(name){
    this.name = name;
}
People.prototype.run = function(){
    console.log('running')
}; */

// class People{
//     public name: string;
//     constructor(n: string){
//         this.name = n;
//     }
//     eat(): string{
//         return `${this.name}正在吃饭  父类`;
//     }
// }

// let p1 = new People('xiecheng');
// console.log(p1.eat());
// console.log(p1.name)

// class Son extends People{
//     constructor(name: string){
//         super(name);
//     }
//     sleep(): string {
//         return `${this.name}正在睡觉`;
//     }
//     /* eat(): string{
//         return `${this.name}正在吃饭   子类`;
//     } */
// }

// let p2 = new Son('zhangsan');
// console.log(p2.eat());
// console.log(p2.sleep());

// 类的修饰符:
// public:公有  当前类、子类、类外面 都能访问
// protected:保护  当前类、子类 能访问   类外面无法访问
// private:私有  当前类能访问  子类、类外面无法访问 


// 静态属性、静态方法
/* function People(name){
    this.name = name;
}
People.prototype.run = function(){
    console.log('run')
};

People.eat = function(){
    console.log('eat')
};
People.age = 18;
var p = new People('xc');
p.run();
People.eat();
console.log(p.name);
console.log(People.age); */

/* class People{
    public name: string;
    public age: number;
    static sex='男';
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    run(): string{
        return `${this.name}正在跑`;
    }
    static sleep(): string{
        // 逻辑操作
        return '正在睡觉';
    }
}

let p1 = new People('xiecheng', 34);
console.log(p1.age);
console.log(p1.run())
console.log(People.sex);
console.log(People.sleep()); */


// 多态
/* class People{
    public name: string;
    constructor(n: string){
        this.name = n;
    }
    eat(){
        console.log('吃饭');
    }
} 

class Son extends People{
    constructor(name: string){
        super(name);
    }
    eat(): string{
        return `${this.name}正在肉`;
    }
}

class Son2 extends People{
    constructor(name: string){
        super(name);
    }
    eat(): string{
        return `${this.name}正在菜`;
    }
} */

// 抽象类 abstract
// 基类
abstract class Animal {
    public name: string;
    constructor(name: string){
        this.name = name;
    }
    abstract eat(): string;
}

class Dog extends Animal{
    constructor(name: string){
        super(name);
    }
    eat(): string {
        return `${this.name}正在吃饭`;
    }
}
let d = new Dog('旺财');
console.log(d.eat());

class Cat extends Animal{
    constructor(name: string){
        super(name);
    }
    eat(): string{
        return `${this.name}正在吃饭`;
    }
}

let c = new Cat('咪咪');
console.log(c.eat());


