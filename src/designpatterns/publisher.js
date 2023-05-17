
export default class Publisher {
    constructor() {
        // this.observers = new Map
        this.observers = []
        console.log('开启观察者模式')
    }

    add (observer) {
        console.log('添加观察者', observer)
        this.observers.push(observer)
    }

    remove (observer) {
        console.log('删除观察者')
        let i = this.observers.indexOf(observer)
        this.observers.splice(i, 1)
    }

    notify () {
        this.observers.forEach(e => {
            console.log(e)
            return e
        });
    }
}
