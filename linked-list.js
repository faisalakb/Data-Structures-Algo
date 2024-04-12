
class Node {
    constructor(data) {
      this.data = data; 
      this.next = null;
    }
  }
  

  class LinkedList {
    constructor() {
      this.head = null; 
      this.size = 0; 
    }
  

    insert(data) {
      let newNode = new Node(data); 

   
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
      
        while (current.next) {
          current = current.next;
        }
      
        current.next = newNode;
      }
      this.size++; 
    }
  
  
    display() {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  let myList = new LinkedList();
  myList.insert(10);
  myList.insert(20);
  myList.insert(30);
  myList.display();
  