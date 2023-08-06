

const randomNum = (arr) => {
    arr.shift()
    let result = [...new Set(arr)]
    return result.sort()
}
console.log(randomNum([3, 2, 2, 1]))
