// Promise 是一个构造函数，主要用来处理异步操作
// 其中有3个状态，pending，rejected, resolved, pending 可以转另外两种状态，另外两种状态不能转pending，且只能改变一次

export class MyPromise {

    static PENDING = "pending";
    static REJECTED = "rejected";
    static FULFILLED = "fulfilled";

    constructor(excutor) {
        this.status = this.PENDING;
        try {
            excutor(this.resolve.bind(this), this.reject.bind(this))
        }
        catch (error) {
            this.reject(error)
        }
    }
 
    resolve () {
        this.status = this.FULFILLED;

        console.log(this.FULFILLED)

        console.log('成功')
    }

    reject () {
        this.status = this.REJECTED;
        console.log('失败')
    }

    then (resolve, reject) {
        if (resolve) {
            this.status = this.FULFILLED;

            return resolve
        }
        if (reject) {
            this.status = this.REJECTED;
            return reject
        }
    }
}
