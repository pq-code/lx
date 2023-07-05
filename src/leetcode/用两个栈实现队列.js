
// 栈与队列
// 栈是一种先进先出的数据结构






class CQueue {
    constructor() {
        this.inStack = []
        this.outStack = []
    }
}

CQueue.prototype.appendTail = function (value) {
    this.inStack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
    if (this.outStack.length == 0) { // 执行队列为空，判断是否整个队列为空
        if (this.inStack.length == 0) { //等待队列为空，说明整个队列为空输入-1
            return -1
        }
        while (this.inStack.length) { // 等待队列不为空，则等待队列进入执行队列
            this.outStack.push(this.inStack.pop())// 等待队列删除尾，进入执行队列做为头
        }// 先进先出
    }
    return this.outStack.pop()
};


// pop() 用于删除数组的最后一个元素，并且返回删除的元素
// shift() 用于删除数组的第一个元素，并且返回删除的元素
