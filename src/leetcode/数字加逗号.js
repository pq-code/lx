
export const amount = (e) => {
    console.log('最简单', e.toLocaleString())

    if (e !== 0) {
        const arr = String(e).split('.')
        let num = arr[0]
        let result = []
        while (num.length > 3) {
            result = ',' + num.substring(num.length - 3) + result
            num = num.substring(0, num.length - 3)
        }
        if (num) {
            result = num + result
        }
        console.log(arr[1] ? result + '.' + arr[1] : result)
        return arr[1] ? result + '.' + arr[1] : result
    }

    if (e !== 0) {
        const arr = String(e).split('.')
        let num = arr[0].split('')
        let result = []
        let a = 0
        for (let i = num.length - 1; i >= 0; i--) {
            a++
            result.unshift(num[i])
            console.log('111111', result, !(a % 3))
            if (a % 3 == 0 && i !== 0) {
                result.unshift(',')
            }
        }
        console.log(arr[1] ? result.join('') + '.' + arr[1] : result.join(''))
        return arr[1] ? result.join('') + '.' + arr[1] : result.join('')
    }
}
