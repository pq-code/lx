
export const init = () => {
    const a = {
        name: '没有发生改变',
        fn: function (...e) {
            console.log(this.name, ...e)
        }
    }

    const b = {
        name: '发生了改变'
    }

    // a.fn.call(b, 2, 3, 4)
    // a.fn()

    Function.prototype.mycall = function (context, ...args) {
        if (typeof this !== 'function') {
            throw new Error('error')
        }
        console.log(...args)
        const fn = Symbol(1)
        context[fn] = this

        return context[fn](...args)
    }

    Function.prototype.myapply = function (context, args) {
        console.log(context, args)
        if (typeof this !== 'function') {
            throw new Error('error')
        }
        if (!Array.isArray(args)) {
            throw new Error('error')
        }

        const fn = Symbol(1)
        context[fn] = this
        context[fn](args)
    }

    Function.prototype.mybind = function (context, ...args1) {
        if (typeof this !== 'function') {
            throw new Error('error')
        }
        console.log(context)
        return (...args2) => {
            console.log(context, ...args1.concat(...args2))
            let fn = Symbol(1)
            context[fn] = this
            context[fn](...args1.concat(...args2))
        }

    }

    const bind1 = a.fn.myapply(b, [123214, 2321312])
    // bind1(23232)
}
