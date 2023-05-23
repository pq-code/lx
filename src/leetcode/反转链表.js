
// 链表是一个不连续的线性数据结构 Data Next
// 单向链表
// 单向循环链表
// 双向链表
// 环形链表

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
    }

    append (element) {
        let node = new Node(element)
        if (this.head == null) {
            this.head = node
        } else {
            let current = this.getNode(this.size - 1);
            current.next = node;
        }
        this.size++;
    }

    appendAt (position, element) {
        if (position < 0 || position > this.size) {
            throw new Error('position out range')
        }
        let node = new Node(element);
        if (position === 0) {
            node.next = this.head
            this.head = node.next
        }
        if (position > 0 || position < this.size) {
            let l = this.getNode(position)
            node.next = l.next
            l.next = node
        }
        this.size++
    }

    remove (position) {

    }

    indexOf (element) {

    }

    getNode (index) {
        if (index < 0 || index >= this.size) {
            throw new Error('out range')
        }
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }
    reversePrint () {
        let node = this.head, prev = null;
        while (node) {
            const next = node.next
            node.next = prev
            prev = node
            node = next
            console.log(next, prev)
        }
    }
}

let a = new LinkedList();
a.append(1);
a.append(2);
a.append(3);
a.append(5);
a.appendAt(2, 4);
a.reversePrint()
console.dir(a, {
    depth: 100
})


// 反转链表，后一位插入到当前位置的next下面，和插入同理
// export const reversePrint = (head) => {
// let node = this.head, prev = null;
// while (node) {
//     const next = node.next
//     node.next = prev
//     prev = node
//     node = next
//     console.log(next, prev)
// }
// }
