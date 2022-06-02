/**
 * Input: Array
 * Output: String
 *
 * Rules
 * =====
 * Explicit requirements:
 * - Takes an array of names
 * - Returns a string containing the names of the people from the array
 *
 * Implicit requirements:
 * - If an empty array => 'no one likes this'
 * - If 1 name, "NAME likes this"
 * - If 2 names, "NAME and NAME like this"
 * - If 3 names, "NAME, NAME and NAME like this"
 * - If 4 names or more, "NAME, NAME, and N others like this"
 * - For option of 4 names, the first 2 spelled out names are the first two elements
 * - Input will always be an array of strings
 * - 
 *
 * DC + A
 * [Peter] => 'Peter likes this'
 * [Peter, James] => 'Peter and James like this'
 * [Max, James, Peter] => 'Max, James and Peter like this'
 * [Max, James, Billy, Ted, Boris, Guile] => 'Max, James and 4 others like this'
 *
 * Algorithm
 * =========
 * Given an array of names
 * declare numberOfNames initialize it to length of array of names
 * 
 * Switch statement over numberOfNames
 *  - if 0 return 'no one likes this'
 *  - if 1 return '$name0 likes this'
 *  - if 2 return '$name0 and $name1 like this'
 *  - if 3 return '$name0, name1 and name2 like this'
 *  - if 4 or more  return '$name0, $name1 and $(numberOfNames - 2) like this
 * End
 * 
 */


 function likes(names) {
  let numberOfNames = names.length;

  switch (numberOfNames) {
    case 0: return 'no one likes this';
    case 1: return `${names[0]} likes this`;
    case 2: return `${names[0]} and ${names[1]} like this`;
    case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default: return `${names[0]}, ${names[1]} and ${numberOfNames - 2} others like this`;
  }

}



console.log(likes([]))// , 'no one likes this');
console.log(likes(['Peter']))// , 'Peter likes this');
console.log(likes(['Jacob', 'Alex']))// , 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']))// , 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))// , 'Alex, Jacob and 2 others like this');
