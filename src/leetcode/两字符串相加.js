export let addStrings = function (num1, num2) {
    // const add = (n1, n2) => {
    //     let i = n1.length - 1, j = n2.length - 1, add = 0;
    //     const ans = [];
    //     while (i >= 0 || j >= 0 || add != 0) {
    //         const x = i >= 0 ? n1.charAt(i) - '0' : 0;
    //         const y = j >= 0 ? n2.charAt(j) - '0' : 0;
    //         let result = x + y + Number(add)
    //         if (result >= 10) {
    //             add = String(result).charAt(0)
    //             ans.push(String(result).charAt(1))
    //             console.log(add, ans)
    //         } else {
    //             add = 0
    //             ans.push(result)
    //         }
    //         console.log(add, ans)
    //         i -= 1;
    //         j -= 1;
    //     }
    //     return ans.reverse().join('');
    // }

    // let nm1 = String(num1).split('.'), nm2 = String(num2).split('.')
    // if (nm1.length > 1 || nm2.length > 1) {
    //     return add(nm1[0], nm2[0]) + '.' + add(nm1[1], nm2[1])
    // } else {
    //     return add(num1, num2)
    // }

    // let i = num1.length - 1, j = num2.length - 1, add = 0;
    // const ans = [];
    // while (i >= 0 || j >= 0 || add != 0) {
    //     const x = i >= 0 ? num1.charAt(i) - '0' : 0;
    //     const y = j >= 0 ? num2.charAt(j) - '0' : 0;
    //     const result = x + y + add;
    //     ans.push(result % 10);
    //     add = Math.floor(result / 10);
    //     i -= 1;
    //     j -= 1;
    // }

    let l = num1.length - 1, r = num2.length - 1, add = 0, ans = []
    while (l >= 0 || r >= 0 || add !== 0) {
        let x = l >= 0 ? num1.charAt(l) : 0
        let y = r >= 0 ? num2.charAt(r) : 0
        const result = Number(x) + Number(y) + Number(add);
        ans.unshift(result % 10)
        add = Math.floor(result / 10)
        l -= 1
        r -= 1
    }
    return ans.join('');
};
