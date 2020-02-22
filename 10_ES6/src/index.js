let a = 5;
let sum = (x, y) => x + y;

let b = 6;

let c = 7;

for(let i=0; i<3; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000);
}


// ES6 -> ES5 过程:
// 1、安装node   https://nodejs.org/en/  安装过程一路下一步
// 2、打开终端： win+R   cmd    node -v  输出node版本号
// 3、进入到当前项目 npm init -y    -> package.json
// 4、全局安装babel-cli ：  npm install -g babel-cli 
// 5、npm install --save-dev babel-preset-env babel-cli
// 6、新建  .babelrc
// 7、转化文件:   babel src/index.js -o dist/index.js
// 8、自动转化文件夹： babel src -w -d dist