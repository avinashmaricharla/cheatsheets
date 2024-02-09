//Youtube channel: Codevolution



/***************************** Github: Start *****************************/
/** Github */

/**
Notes:
  To show ‘Github’ contributions:
    git config --global user.email 'email'
    https://linuxize.com/post/how-to-configure-git-username-and-email/
 */
/***************************** Github: End *****************************/
/** General content: Start */
/**
  Brute force:
    Brute Force Algorithms are exactly what they sound like – straightforward methods of solving a problem that rely on sheer computing power and trying every possibility rather than advanced techniques to improve efficiency.
    https://www.freecodecamp.org/news/brute-force-algorithms-explained/ */
/***************************** General content: End *****************************/
/** Data types */

/**
Notes:
  String: 
    String represents sequence of characters in a programming language.
    We can access the characters in a string using its index.
 */
/***************************** Data types: End *****************************/
/** for loop */
const myString = "Hello World"; //10 values
const myArray = [10, 11, 12, 13, 14]; //4 values
const myObject = {
  'A': '1',
  'B': '2',
  'C': '3',
  'D': '4'
};

/** for loop */
// String(i prints indexes), Array(i prints indexes)
for (let i = 0; i < myString.length; i++) {
  console.log(myString[i]);
}

// Object(i prints indexes)
for (let i = 0; i < Object.keys(myObject).length; i++) {
  console.log(myObject[Object.keys(myObject)[i]]);
}


/** for-in loop */
// String(i prints indexes), Array(i prints indexes), Object(i prints keys)
for (let i in myObject) {
  console.log(myObject[i]);
}


/** for-of loop */
// String(i prints values), Array(i prints values)
for (let i of myArray) {
  console.log(i);
}

// Object(gives key-value pair values)
for (let [key, value] of Object.entries(myObject)) {
  console.log(key, value);
}

/**
Notes:
  https://www.udacity.com/blog/2021/01/javascript-for-loop.html
 */
/***************************** for loop: End *****************************/
/** Methods */

/**
Notes:
  push():
    The push() method adds a new items to the end of an array and return new length of array. 
    The push() method changes the length of an array.
    push(element0, element1, ..... , elementN);
   https://www.w3schools.com/jsref/jsref_push.asp
---------------------------------------------------------------------------------
  pop():
    The pop() method removes and returns last element of an array.
    The pop() method changes original array.
    The removed item can be 'string', 'number', 'array' or any other type allowed in an array.
    https://www.w3schools.com/jsref/jsref_pop.asp
---------------------------------------------------------------------------------
  filter():
    The filter() method creates a new array filled with elements that pass the test provided by a function.
    The filter() method does not change the original array.
    If no elements pass the test it returns an empty array.
    filter((currentValue/element, index, array) => { code statments here });
    https://www.w3schools.com/jsref/jsref_filter.asp
---------------------------------------------------------------------------------
  map():
    The map() method creates a new array calling a function for eavery array element.
    The map() method does not change the original array.
    map((currentValue/element, index, array) => {code statments here});
    https://www.w3schools.com/jsref/jsref_map.asp
---------------------------------------------------------------------------------
  Math.min():
    It finds the minimum of n elements.

  Math.max():
    It finds the maximum of n elements.
---------------------------------------------------------------------------------
  Clone an array:
    ES6 Spread operator: const arr = [1, 2, 3]; const arr1 = [...arr];
    Array.from();
---------------------------------------------------------------------------------
  Regex pattern:
    It helps to remove unwanted characters like non-alphanumeric or any other in a string.
    replace() method allows 2 arguments ---> replace('searchedValue in string: regex', replacementValue);
    https://linuxhint.com/remove-all-non-alphanumeric-characters-in-javascript/
---------------------------------------------------------------------------------
  split():
    split() method allows 2 argumets ---> split('splitter/divider', limit) 
    It splits string to ordered list of substrings and returns an array depending on the 'splitter/divider'.
    If the splitter doesn't match in a string it returns the original string in an array.
    It does not change the original string
    https://www.freecodecamp.org/news/javascript-split-how-to-split-a-string-into-an-array-in-js/
---------------------------------------------------------------------------------
  reverse():
    It reverses the order of the elements in an array. 
    It changes the original array.
    https://www.w3schools.com/jsref/jsref_reverse.asp
---------------------------------------------------------------------------------
  join(): 
    It return array as a string.
    It dosen't change the original array.
    A separator/delimeter can be used, by default it was comma(,)
    https://www.w3schools.com/jsref/jsref_join.asp
---------------------------------------------------------------------------------
    shift():
    It removes the first element of an array and it changes the original array.
    It return only the shifted element.
    https://www.w3schools.com/jsref/jsref_shift.asp
---------------------------------------------------------------------------------
 */

/***************************** Methods: End *****************************/
/** Data structure: Stack */

/**
Notes:
  The data structure stack is a collection of sequential items and follows the principle LIFO.
  LIFO: Last In First Out --> The last element inserted into the stack/array(push) is first element to removed(pop)

  https://www.youtube.com/watch?v=a1fyufVlLmk&ab_channel=Codevolution
 */
/***************************** Stack: End *****************************/
/** Data structure: Linked List */

/**
Notes:


  https://www.youtube.com/watch?v=3OsxH-huRc4&ab_channel=Codevolution
  https://www.youtube.com/watch?v=Tggvw4QlA9U&ab_channel=Codevolution
 */
/***************************** Linked List: End *****************************/
/** Time complexity */

/**
Notes:
  Time complexity is the amount of time required for a program to run, as a function of 'input size'.
  Performance based 'in terms of input size'.
  Time complexity notation: Big-O - Worst case complexity

  1. Big-O Notation(O-notation) - Worst case complexity
  2. Omega Notation (Ω-notation) - Best case complexity (Ignore for beginner)
  3. Theta Notation(θ-notation) - Avergae case complexity (Ignore for beginner)

  Time complexity types:-
  Constant O(1):
    for the given input 'n' the statement in the program runs only once.
    Good to consider while writing code.
  Liner O(n): 
    Example: 1 'for/nested' loop
    Fair to consider while writing code.
  Qudaratic O(n^2):
    Example: 2 'for/nested' loop's
  Cubic O(n^3):
    Example: 3 'for/nested' loop's
  logarithmic O(log n): 
    If input size reduces by half every iteration.
    Good to consider while writing code.
  
  https://javascript.plainenglish.io/what-is-time-complexity-1211eeb70f69
  https://www.youtube.com/watch?v=Fo2Qnw5pMGo&ab_channel=Codevolution 
  https://www.youtube.com/watch?v=3yUuo7TqMW8&ab_channel=Codevolution | Horrible -> Bad -> Fair -> Good -> Excellent

---------------------------------------------------------------------------------
Objects - Big-O:
  An object is collection of key-value pairs
  Insert, Remove, Access - O(1)
  Search, Object.keys(), Object.values(), Object.entries() - O(n)

Arrays - Big-O:
  An array is an ordered collection of values.
  Insert/remove at end, Access - O(1)
  Insert/remove at begining - O(n) because index has to be reset for every remaining element in an array.
  Search - O(n)
  push/pop - O(1)
  shift/unshift/concat/slice/splice - O(n)
  filter/map/forEach/reduce - O(n) (It can be O(n^2) if callback function has for loop)

  https://www.youtube.com/watch?v=XkhLTlFXxbI&ab_channel=Codevolution
 */
/***************************** Time complexity: End *****************************/
/** Space complexity */
/**
Notes:
  Space complexity is amount of memory required for a programm to run, as a function of 'input size'.
  If app needs to be very quick and has plenty of memory to work with, you don't have to worry about space complexity

  Space complexity types:-
  Constant O(1):
  Liner O(n): 
  logarithmic O(log n): 
 */
/***************************** Space complexity: End *****************************/