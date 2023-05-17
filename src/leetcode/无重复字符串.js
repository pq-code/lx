// export const lengthOfLongestSubstring = function (s) {
//     let l = ''
//     for (let i = 1; i < s.length; i++) {
//         let a = s.substring(i)
//         let b = a.indexOf(s[i - 1])
//         if (b !== -1) {
//             let c = s.substring(i - 1, b + i)
//             l = c.length >= l.length ? c : l
//         }
//     }
//     console.log(l, l.length)
//     return l.length

// };

export const lengthOfLongestSubstring = function (s) {
    let l = []
    let max = 0
    for (let i = 1; i < s.length; i++) {
        if (l.indexOf(s[i - 1]) == -1) {
            l.push(s[i - 1])
        } else {
            l = []
            l.push(s[i])
        }
        max = Math.max(max, l.length)
    }
    console.log(l, l.length)
    return l
};

export const lengthOfLongestSubstring2 = function (s) {
    let arry = []
    let max = 0
    for (let i = 0; i < s.length; i++) {
        if (arry.indexOf(s[i]) == -1) {
            arry.push(s[i])
        } else {
            arry.splice(0, arry.indexOf(s[i]) + 1)
            arry.push(s[i])
        }
        max = Math.max(max, arry.length)
    }
    console.log('---', arry, max)
    return max
};
