//Objective is, given a singly linked list L: L0→L1→…→Ln-1→Ln,
//to reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

class Node {
    constructor(val, next = null) { //if next is not given, assume it is empty
      this.val = val
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)


//O(n) solution that finds the middle node, reverses the right side
//of the list, and then merges the left and right side together.

function reorderList(head) {
    if (!head) {
        return null
    }
    
    let slow = head
    let fast = head
    
    while (fast && fast.next) {
        slow = slow.next 
        fast = fast.next.next
    }
    
    let prev = null
    let curr = slow
    
    while (curr) {
        let temp = curr.next 
        curr.next = prev 
        prev = curr
        curr = temp
    }
    
    let first = head
    let second = prev
    
    while (second.next) {
        let temp = first.next 
        first.next = second
        first = temp
        
        temp = second.next 
        second.next = first
        second = temp
    }
}
reorderList(head)

console.log(head)