// 设计模式

// 1.工厂模式
// 创建对象的过程单独封装，只需要关注传参

// 1.将不变是特征固定逻辑，抽取出变的特征
// 2.根据变的特征去创建对象，在创建对象时进行单独的封装


// 2.抽象工厂模式
// 尝试分离一个系统中变与不变的部分，
// 抽象工厂（抽象类，它不能被用于生成具体实例）： 用于声明最终目标产品的共性。在一个系统里，抽象工厂可以有多个（大家可以想象我们的手机厂后来被一个更大的厂收购了，这个厂里除了手机抽象类，还有平板、游戏机抽象类等等），每一个抽象工厂对应的这一类的产品，被称为“产品族”。
// 具体工厂（用于生成产品族里的一个具体的产品）： 继承自抽象工厂、实现了抽象工厂里声明的那些方法，用于创建具体的产品的类。
// 抽象产品（抽象类，它不能被用于生成具体实例）： 上面我们看到，具体工厂里实现的接口，会依赖一些类，这些类对应到各种各样的具体的细粒度产品（比如操作系统、硬件等），这些具体产品类的共性各自抽离，便对应到了各自的抽象产品类。
// 具体产品（用于生成产品族里的一个具体的产品所依赖的更细粒度的产品）： 比如我们上文中具体的一种操作系统、或具体的一种硬件等。


// // 3.单例模式 -vueX
// // 保证一个类仅有一个实例，并提供一个访问它的全局访问点

// class SingleDog {
//     show () {
//         console.log('我是一个单例对象')
//     }
//     static getInstance () {
//         // 判断是否已经new过1个实例
//         if (!SingleDog.instance) {
//             // 若这个唯一的实例不存在，那么先创建它
//             SingleDog.instance = new SingleDog()
//         }
//         // 如果这个唯一的实例已经存在，则直接返回
//         return SingleDog.instance
//     }
// }

// const s1 = SingleDog.getInstance()
// const s2 = SingleDog.getInstance()

// // true
// s1 === s2

// // 或者

// // 先实现一个基础的StorageBase类，把getItem和setItem方法放在它的原型链上
// function StorageBase () { }
// StorageBase.prototype.getItem = function (key) {
//     return localStorage.getItem(key)
// }
// StorageBase.prototype.setItem = function (key, value) {
//     return localStorage.setItem(key, value)
// }

// // 以闭包的形式创建一个引用自由变量的构造函数
// const Storage = (function () {
//     let instance = null
//     return function () {
//         // 判断自由变量是否为null
//         if (!instance) {
//             // 如果为null则new出唯一实例
//             instance = new StorageBase()
//         }
//         return instance
//     }
// })()

// // 这里其实不用 new Storage 的形式调用，直接 Storage() 也会有一样的效果
// const storage1 = new Storage()
// const storage2 = new Storage()

// storage1.setItem('name', '李雷')
// // 李雷
// storage1.getItem('name')
// // 也是李雷
// storage2.getItem('name')

// // 返回true
// storage1 === storage2


// // // 4.观察者模式（发布-订阅模式）

// class Publisher {
//     constructor() {
//         // this.observers = new Map
//         this.observers = []
//         console.log('开启观察者模式')
//     }

//     add (observer) {
//         console.log('添加观察者', observer)
//         this.observers.push(observer)
//     }

//     remove (observer) {
//         console.log('删除观察者')
//         let i = this.observers.indexOf(observer)
//         this.observers.splice(i, 1)
//     }

//     notify () {
//         this.observers.forEach(e => {
//             console.log(e)
//         });
//     }
// }


// const publisher = new Publisher
// publisher.add(22)
// publisher.add(11)
// publisher.remove(11)
// publisher.notify()
