class LinkedList {
    constructor(head = null){
        this.head = head;
    }

    appendNode(newNode){
        if(this.head == null){
            this.head = newNode;
            return;
        }
        let node = this.head;
        while(node.next){
            node = node.next;
        }
        node.next = newNode
    }

    insertAt(index , newNode){
        if(index === 0){
            newNode.next = this.head;
            this.head = newNode;
        }else{
            let node = this.head.next;
            while(--index){
                if(node.next == null ){
                    consolel.log('Out of Bond');
                    return;
                }
                node = node.next;
            }
            let temp = node.next;
            node.next = newNode;
            newNode.next = temp
        }
    }

    removeFromIndex(index){
        if(index === 0){
            if(this.head === null){
                return;
            }
            let temp = this.head.next;
            this.head = temp;
        }else{
            let node = this.head;
            while(index > 1){
                if(node.next === null){
                    console.log('Out of Bond');
                }
                node = node.next;
                index--;
            }
            node.next = node.next.next;
        }
    }

    getNode(index){
        let node = this.head;
        while(index > 0){
            if(node.next === null){
                console.log('Out of Bond');
                return;
            }
            node = node.next;
            index--;
        }
        return node;
    }

    clear(){
        this.head = null;
    }

    reverse(){
        if(this.head === null){
            return
        }
        let prevNode = null;
        let currentNode = this.head;
        let nextNode = null;
        while(currentNode){
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        this.head = prevNode;
    }
}

class ListNode {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function createNode(number) {
    return new ListNode(number);
}

const list = new LinkedList();
list.appendNode(new ListNode(5));
list.appendNode(new ListNode(10));
list.appendNode(new ListNode(15));
list.appendNode(new ListNode(20));
list.appendNode(new ListNode(25));
console.log(list);
console.log(list.reverse());


