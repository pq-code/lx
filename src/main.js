import "../public/main.less"
import { patch } from "./utils";
import Publisher from "./designpatterns/publisher.js";

import { lengthOfLongestSubstring, lengthOfLongestSubstring2 } from "./leetcode/无重复字符串"
import { longestPalindrome } from "./leetcode/最长回文子串"
import { removeDuplicates } from "./leetcode/数组去重"


// const publisher = new Publisher
// publisher.add(22)
// publisher.add(11)
// publisher.remove(11)
// publisher.notify()
// patch(publisher.notify())



['bb', 'abbaqweewqa', 'babad'].forEach(e => {
    removeDuplicates(e)
})
