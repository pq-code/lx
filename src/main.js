import "../public/main.less"
import { patch } from "./utils";
import Publisher from "./designpatterns/publisher.js";

//手写
import { init } from "./comments/callapplybing";
import { MyPromise } from "./comments/Promise";


//算法
import { lengthOfLongestSubstring, lengthOfLongestSubstring2 } from "./leetcode/无重复字符串"
import { longestPalindrome } from "./leetcode/最长回文子串"
import { removeDuplicates } from "./leetcode/数组去重"
import { replaceSpace } from "./leetcode/替换空格"
import { reverseLeftWords } from './leetcode/左边旋字符串'
import { reversePrint } from './leetcode/反转链表'
// const publisher = new Publisher
// publisher.add(22)
// publisher.add(11)
// publisher.remove(11)
// publisher.notify()
// patch(publisher.notify())

// console.log(reversePrint())

// const myPromise = new MyPromise((resolve, reject) => {
//     if (true) {
//         resolve(11)
//     } else {
//         reject(22)
//     }
// })

// console.log(myPromise)

// myPromise.then((e) => {
//     console.log(e)
// }, (e) => {
//     console.log(e)
// })
