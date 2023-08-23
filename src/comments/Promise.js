// Promise 是一个构造函数，主要用来处理异步操作
// 其中有3个状态，pending，rejected, resolved, pending 可以转另外两种状态，另外两种状态不能转pending，且只能改变一次


// promise A+ 规范
// 1.promise是一个对象或者函数
// 2.必须要有一个then方法，返回一个promise对象
// 3.value值是一个合法的js值
// 4.错误状态会抛出


const PENDING = "pending",
    REJECTED = "rejected",
    FULFILLED = "fulfilled";

function isFunction (fn) {
    return fn && typeof fn == 'function'
}
export class MyPromise {
    status = PENDING;
    value = undefined;
    reason = undefined;
    onFulfilledCallbacks = []; // 保存then方法的成功回调
    onRejectCallbacks = []; // 保存then方法的失败回调

    constructor(executor) {
        function resolve (value) {
            if (this.status === PENDING) {
                this.status = FULFILLED;
                this.value = value
                console.log('成功', this.value)
                this.onFulfilledCallbacks.forEach(fn => {
                    fn()
                });
            }
        }
        function reject (reason) {
            if (this.status === PENDING) {
                this.status = REJECTED;
                this.reason = reason
                console.log('失败', this.reason)
                this.onRejectCallbacks.forEach(fn => {
                    fn()
                });
            }
        }
        try {
            executor(resolve.bind(this), reject.bind(this))
        }
        catch (error) {
            reject(error)
        }
    }

    then (onFulfilled, onRejected) {
        onFulfilled = isFunction(onFulfilled) ? onFulfilled : value => value;
        onRejected = isFunction(onRejected) ? onRejected : err => { throw err }; // 向下抛出抛出
        try {
            if (this.status === FULFILLED) {
                return onFulfilled(this.value)
            }
            if (this.status === REJECTED) {
                return onRejected(this.reason)
            }
            if (this.status === PENDING) {
                this.onFulfilledCallbacks.push(() => {
                    onFulfilled(this.value)
                })
                this.onRejectCallbacks.push(() => {
                    onRejected(this.reason)
                })
            }
        } catch (error) {

        }
    }
}


const Promise1 = new Promise((res, rej) => {
    // res(1)
})

// Promise1.then(res => {
//     console.log('res', res)
// }, rej => {
//     console.log('rej', rej)
// })

console.log(Promise1)

const Promise2 = new MyPromise((res, rej) => {
    setTimeout(() => {
        rej(1)
    }, 3000)
})
Promise2.then(res => {
    console.log('then', res)
}, rej => {
    console.log('then', rej)
})
console.log(Promise2)
