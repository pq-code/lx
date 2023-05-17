import "../public/main.less"
import { patch } from "./utils";
import Publisher from "./designpatterns/publisher.js";

import { lengthOfLongestSubstring, lengthOfLongestSubstring2 } from "./leetcode/无重复字符串"
import { longestPalindrome } from "./leetcode/最长回文子串"
import { removeDuplicates } from "./leetcode/数组去重"
import { replaceSpace } from "./leetcode/替换空格"
import { reverseLeftWords } from './leetcode/左边旋字符串'

// const publisher = new Publisher
// publisher.add(22)
// publisher.add(11)
// publisher.remove(11)
// publisher.notify()
// patch(publisher.notify())



// [0, 0, 1, 1, 1, 2, 2, 3, 3, 4].forEach(e => {

// })

console.log(reverseLeftWords('lrloseumgh', 6))
