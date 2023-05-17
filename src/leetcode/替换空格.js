// 倒序扩容数组大小
// export const replaceSpace = (s) => {
//     s = Array.from(s)
//     let count = []
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == ' ') {
//             count++
//         }
//     }
//     let l = s.length - 1
//     let r = s.length + count * 2 - 1
//     while (l >= 0) {
//         if (s[l] == ' ') {
//             s[r--] = '0'
//             s[r--] = '2'
//             s[r--] = '%'
//             l--
//         } else {
//             s[r] = s[l]
//             l--
//             r--
//         }
//     }
//     console.log(s)
//     s = s.join('')
//     return s
// }

export const replaceSpace = (s) => {
    let a = s.split(' ')
    let b = a[0]
    for (let i = 1; i < a.length; i++) {
        b = b + '%20' + a[i]
        console.log(b)
    }
    return b
}

// export const replaceSpace = (s) => {
//     // s = Array.from(s)
//     let array = []
//     let l = 0
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == ' ') {
//             array.push(s.substring(l, i))
//             l = i + 1
//         }
//     }
//     for (let i = 0; i < array.length - 1; i++) {
//         s = array.concat(array[i].concat(['%20'], array[i + 1]))
//         console.log(array[i].concat(['%20'], array[i + 1]))
//     }
//     // let l = s.length
//     // let r = s.length + count * 3
//     // for (let i = 0; i < count.length; i++) {
//     //     s[count[i]] = '%'
//     //     s[count[i]] = '%'
//     //     s[count[i]] = '%'
//     // }

//     // while (l < s.length - 1) {
//     //     if (s[i] == ' ') {

//     //     }
//     // }

//     return {
//         s, array
//     }
// }
