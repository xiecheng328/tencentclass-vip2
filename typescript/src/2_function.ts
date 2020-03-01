/* function fn1(): string {
    console.log('fn1');
    return 'abc';
}

let fn2 = function (): number {
    console.log('fn2');
    return 123;
};

function fn3(name: string, age?: number): string {
    return name + age;
}
fn3('xiecheng', 34);
fn3('xiecheng');

function fn4(name: string, age: number = 18): string {
    console.log(name, age);
    return name + age;
}
fn4('xiecheng', 34);
fn4('xiecheng');

function sum(a: number, b: number, c: number, d: number): number {
    return a + b + c + d;
}
console.log(sum(1, 2, 3, 4));

function sum2(...res: number[]): number {
    let result = 0;
    for (let i = 0; i < res.length; i++) {
        result += res[i];
    }
    return result;
}
console.log(sum2(1, 2, 3, 4, 5, 6));

function sum3(a: number, b: number, ...res: number[]){
    let result = a + b;
    for (let i = 0; i < res.length; i++) {
        result += res[i];
    }
    return result;
}
console.log(sum3(1, 2, 3, 4, 5, 6)); */


/* function fn5(){
    console.log('fn5')
}
function fn5(a){
    console.log('fn5', a);
}
fn5();
 */
// ts重载 overload
function fn6(name: string): string;
function fn6(age: number): string;
function fn6(str: string | number): string {
    if (typeof str == 'string') {
        return '我是：' + str;
    } else {
        return '我年龄是：' + str;
    }
}

console.log(fn6('xiecheng'))
console.log(fn6(34));
//  console.log(fn6(true));



function fn7(x: { suit: string; card: number; }[]): void {

}



