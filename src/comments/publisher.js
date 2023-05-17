class Publisher {
    constructor() {
        this.observers = []
        console.log('订阅人数')
    }

    add (observers) {
        this.observers.push(observers)
        console.log('添加订阅者');
    }

    remove (observers) {
        this.observers.forEach((item, index) => {
            if (item.observers == observers) {
                this.observers.splice(index, 1)
            }
        })
    }

    notify () {
        this.observers.forEach((observers) => {
            observers.update(this)
        })
    }
}

class Observer {
    constructor() {
        console.log('初始化订阅者')
    }
    update () {
        console.log('订阅者开始工作')
    }
}
