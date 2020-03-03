// 泛型
/* function fn1(val: string): string{
    return val;
}
fn1('hello')

function fn2(val: number): number{
    return val;
}
fn2(123);

function fn3(val: any): any{
    return val;
}
fn3('hello');
fn3(123);

function fn4<T>(val: T): T{
    return val;
}
fn4<string>('hello');
fn4<number>(123); */

/* class MinClass {
    public list: number[] = [];
    add(num: number) {
        this.list.push(num);
    }
    min(): number {
        let minNum = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if(this.list[i] < minNum){
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}

let m1 = new MinClass();
m1.add(5);
m1.add(3);
m1.add(2);
m1.add(4);
m1.add(8);

console.log(m1.list);
console.log(m1.min()); */

// 泛型类
/* class MinClass<T> {
    public list: T[] = [];
    add(num: T) {
        this.list.push(num);
    }
    min(): T {
        let minNum = this.list[0];
        for (let i = 0; i < this.list.length; i++) {
            if(this.list[i] < minNum){
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}

let m1 = new MinClass<number>();
m1.add(5);
m1.add(3);
m1.add(2);
m1.add(4);
m1.add(8);
m1.add(1);

console.log(m1.list);
console.log(m1.min());

let m2 = new MinClass<string>();
m2.add('b');
m2.add('a');
m2.add('x');
m2.add('d');
m2.add('c');

console.log(m2.list);
console.log(m2.min()); */

// 泛型接口
/* interface ConfigFn {
    <T>(value: T): T;
}
let fn5: ConfigFn = function <T>(value: T): T {
    return value;
}
fn5<string>('hello');
fn5<number>(123); */

/* interface ConfigFn<T> {
    (value: T): T;
}
function fn6<T>(value: T): T{
    return value;
}
let fn8: ConfigFn<string> = fn6;
fn8('hello');

let fn9: ConfigFn<number> = fn6;
fn9(123); */

// 类作为参数来约束
class User {
    userName: string | undefined;
    password: string | undefined;
}
class Article{
    title: string | undefined;
    content: string | undefined;
}

class Db<T> {
    add(info: T): boolean {
        return true;
    }
}
let u1 = new User();
u1.userName = 'zs';
u1.password = '12345';

let db = new Db<User>();
db.add(u1);

let a1 = new Article();
let db2 = new Db<Article>();
db2.add(a1);



