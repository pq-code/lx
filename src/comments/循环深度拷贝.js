

export class DeepClone {
    constructor() {

    }

}

let obj = {
    arr: [1, 2, 3],
    a: 4
}
obj.sub = obj

let i = 0
export function deepClone (e) {
    let map = new Map()
    function _deepClone (obj) {
        // if (obj === null || typeof obj !== 'object') return obj
        // if (map.has(obj)) {
        //     return map.get(obj)
        // }
        // let result = Array.isArray(obj) ? [] : {}
        // map.set(obj, result)
        // console.log(map, 1111)
        // for (let key in obj) {
        //     i++
        //     if (obj.hasOwnProperty(key)) {
        //         result[key] = _deepClone(obj[key])
        //     }
        // }
        // return result
        if (obj === null || typeof obj !== 'object') return obj
        if (map.has(obj)) {
            return map.get(obj)
        }
        let result = Array.isArray(obj) ? [] : {}
        map.set(obj, result)
        for (let key in obj) {
            if (typeof obj[key] === 'object') {
                result[key] = _deepClone(obj[key])
            } else {
                result[key] = obj[key]
            }
        }
        return result
    }
    return _deepClone(e)
}

const newobj = deepClone(obj);
obj.arr.push(4)
// obj.sub = 3
// console.log(newobj.arr !== obj.arr);
// console.log(newobj.sub !== obj.sub);
// console.log(newobj.arr[3] !== obj);
// console.log(newobj.arr[3] == newobj);
// console.log(obj !== newobj);
console.log(newobj, obj, i)
