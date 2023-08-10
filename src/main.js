import "../public/main.less"
// import { patch } from "./utils";
// import Publisher from "./designpatterns/publisher.js";

// //手写
// import { init } from "./comments/callapplybing";
// import { MyPromise } from "./comments/Promise";
import "./comments/循环深度拷贝";


// //算法
// import { lengthOfLongestSubstring, lengthOfLongestSubstring2 } from "./leetcode/无重复字符串"
// import { longestPalindrome } from "./leetcode/最长回文子串"
// import { removeDuplicates } from "./leetcode/数组去重"
// import { replaceSpace } from "./leetcode/替换空格"
// import { reverseLeftWords } from './leetcode/左边旋字符串'
// import { reversePrint } from './leetcode/链表'
// import { maxProfit } from './leetcode/买卖股票'
// import { amount } from './leetcode/数字加逗号'
// import { addStrings } from './leetcode/两字符串相加'
import './od机考/NC68跳台阶'
// 编程题
// import { a } from './comments/并发请求.js'

// import './leetcode/链表'



// console.log('return')

// function firstPromise (promiseFunction) {
//     let p = null;
//     return function (...args) {
//         console.log(args);
//         debugger
//         // 请求的实例，已存在意味着正在请求中，直接返回实例，不触发新的请求
//         return p
//             ? p
//             // 否则发送请求，且在finally时将p置空，那么下一次请求可以重新发起
//             : (p = promiseFunction.apply(this, args).finally(() => (p = null)));
//     };
// }


// let count = 1;
// let promiseFunction = () =>
//     new Promise((rs) =>
//         setTimeout(() => {
//             rs(count++);
//         }, 1000)
//     );
// let firstFn = firstPromise(promiseFunction);
// firstFn().then(console.log); // 1
// firstFn().then(console.log); // 1
// firstFn().then(console.log); // 1

// setTimeout(() => {
//     firstFn().then(console.log); // 2
//     firstFn().then(console.log); // 2
//     firstFn().then(console.log); // 2
// }, 3000);
