// 数据类型
/* let flag: boolean = true;
flag = false;

let n: number = 5;

let str: string = 'hello world';

let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [4, 5, 6];
let arr3: Array<number | string | boolean> = [1, 2, 3, 'a', 'b', 'c', true];
let arr4: [number, string] = [1, 'aa']; // 元祖

enum Flag {
    success = 1,
    fail = 2
}
let s: Flag = Flag.success;
let f: Flag = Flag.fail;
// console.log(s, f);

enum Color { Red, Green = 5, Blue }
let r: Color = Color.Red;
let g: Color = Color.Green;
let b: Color = Color.Blue;
console.log(r, g, b);

enum Sex {male=1, female=0}

let num: any = 123;
num = 'abc';

let oBox:any = document.getElementById('box');
oBox.style.color = '#f00';

function fn(): void{
    console.log('fnfnfn');
}

function fn2(): string{
    return 'abc';
} */

/* let a: string | undefined;
console.log(a);
a = '5';
console.log(a); */

let obj: Object | null;
obj = {
    name: 'xiecheng',
    age: 34
};
console.log(document.getElementById('xx'));


function error(message: string): never {
    throw new Error(`你传入的参数是${message}`);
}

error('abc')