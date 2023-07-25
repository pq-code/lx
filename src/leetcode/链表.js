
// 链表是一个不连续的线性数据结构 Data Next
// 链表和数组类似，是一种线性的数据结构，与数组不同的是，链表中的数据在内存中
// 并不是顺序存储的，而是通过在链表的每个元素中，保存指向下一个元素的指针，来找到下一个元素
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

    removeAt (position) {
        if (position < 0 || position >= this.size) {
            throw new Error('position out range')
        }

        if (position === 0) {
            let current = this.head
            this.head = current.next
        }
        if (position > 0) {
            let pre = this.getNode(position - 1)
            pre.next = pre.next.next
        }
        this.size--
    }

    indexOf (element) {
        let node = this.head, i = 0;
        for (let i = 0; i < this.size; i++) {
            if (node.element === element) {
                return i
            }
            node = node.next
        }
        return -1
    }

    getNode (index) {
        if (index < 0 || index >= this.size) {
            throw new Error('out range')
        }
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        // console.log(current)
        return current
    }

    reversePrint () {
        let node = this.head, prev = null;
        while (node) {
            const next = node.next
            node.next = prev
            prev = node
            node = next
        }
    }
}

let a = new LinkedList();
a.append(1);
a.append(2);
a.append(3);
a.append(5);
a.appendAt(2, 4);
a.removeAt(4)
a.reversePrint()
console.dir(a, {
    depth: 100
})

// console.log(a.indexOf(5))



// 反转链表，后一位插入到当前位置的next下面，和插入同理
// export const reversePrint = (head) => {
//     let node = this.head, prev = null;
//     while (node) {
//         const next = node.next
//         node.next = prev
//         prev = node
//         node = next
//         console.log(next, prev)
//     }
// }
