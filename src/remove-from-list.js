const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} list
 * @param {Number} valueToDelete
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

 function removeKFromList(list, valueToDelete) {

  while (list && list.value == valueToDelete) { //убираем первые совпадения
    list = list.next
  }

  let currentNode = list;

  while (currentNode.next) { //идем дальше по всему нод листу если там не null

    if (currentNode.next.value === valueToDelete) { // если в следующей ноде значение совпадает с тем которое надо удалить
      currentNode.next = currentNode.next.next; //то перебрасываем указатель со следующей ноды, на ту которая за ней 
    } else {
      currentNode = currentNode.next; //если не совпадает, перескакиваем на след ноду и по новой
    }
    
  }
  return list
}

module.exports = {
  removeKFromList
};
