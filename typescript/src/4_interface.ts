// 标准
// 属性接口
interface FullName {
    firstName: string;
    lastName: string;
    age?: number; // 可选属性
}

function print(name: FullName): string {
    return name.firstName + name.lastName;
}
console.log(print({ firstName: 'xie', lastName: 'cheng' }));


function print2(name: FullName): string {
    return name.firstName + name.lastName;
}
let my = {
    firstName: 'xie',
    lastName: 'cheng',
    age: 34
};
print2(my);

//  类型断言
/* print2({
    firstName: 'xie',
    lastName: 'cheng',
    age: 34
} as FullName); */
print2({
    lastName: 'cheng',
    firstName: 'xie',
    age: 34
});

// 函数接口
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = (source: string, subString: string) => {
    let result = source.search(subString);
    return result > -1;
}