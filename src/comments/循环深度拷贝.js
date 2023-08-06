

export class DeepClone {
    constructor() {

    }

}

let obj = {
    arr: [1, 2, 3],
    a: 4
}
// obj.sub = obj
// obj.arr.push(obj)

let i = 0
export function deepClone (obj) {
    let result = {}
    for (let key in obj) {
        if (typeof (obj[key]) == 'Object') {
            deepClone(obj[key])
        } else {
            result[key] = obj[key]
        }
    }
    i++
    return result
}


const newobj = deepClone(obj);
console.log(newobj, i)
console.log(newobj.arr !== obj.arr);
// console.log(newobj.sub !== obj.sub);
// console.log(newobj.arr[3] !== obj);
// console.log(newobj.arr[3] == newobj);
console.log(obj !== newobj);
