// 1000 Lights

/**
 * Problem
 *
 * Input: Number
 * Output: Array
 *
 * Rules
 * =====
 * - Argument is a number, count
 * - Count represents to things:
 *   - The number of switches
 *   - The number of passes
 * - Switches are numbered 1 to count (inclusive)
 * - All switches are OFF at the start
 * - Here is the sequence:
 *   - First pass: Toggle to all ON
 *   - Second pass: Toggle 2, 4, 6 ...
 *   - Third pass: Toggle 3, 6, 9 ...
 *
 * Implicit arguments:
 * - Argument is always a number
 *
 * DC & A
 * ======
 * lightsOn(3)
 * Start: 0 0 0
 *     1: 1 1 1
 *     2: 1 0 1
 *     3: 1 0 0
 *
 *     Returns [1]
 *
 * lightsOn(5)
 * Start: 0 0 0 0 0   Can ignore this step
 *     1: 1 1 1 1 1   May initialize all values to TRUE
 *     2: 1 0 1 0 1   Invert every two
 *     3: 1 0 0 0 1   Invert every three
 *     4: 1 0 0 1 1   Invert every four
 *     5: 1 0 0 1 0   Invert every five
 *
 *     Return [1, 4]
 *
 * Element: 1 1 1 1 1
 *   Index: 0 1 2 3 4
 *
 * Ignore index zero to offset as starting with 1?
 *
 * Element: (-1) 1 1 1 1 1
 *   Index:   0  1 2 3 4 5
 *
 * Element: (-1) 1 0 1 0 1
 *   Index:   0  1 2 3 4 5
 *
 * Element: (-1) 1 0 0 0 1
 *   Index:   0  1 2 3 4 5
 *
 * Alg
 * ===
 * Given an integer
 * Declare rowLights, intialize to an array ranging from idx 0 to Integer (inclusive)   [1, 1, 1, 1, 1]
 *
 * Declare stepValue, initializing to 2
 *
 * While stepValue is less than or equal to 5, loop:
 *    Iterate over rowLights, Declare passIndex as the iteration variable
 *       Is passIndex out of bounds?
 *         - If so, break the loop
 *       toggle the light at passIndex
 *       increment passIndex by stepValue
 *    End inner loop
 *    Increment stepValue by 1
 * end outer loop
 *
 *
 * Transform rowLights to their index if they are on (true or 1)
 * Clean the transformation array of undefined values (AND 0, that was the offset)
 *
 * Return the result.
 */


function lightsOn(count) {
  let lights = [...Array(count + 1)].fill(true, 1);
  let step = 2;

  while (step <= count) {
    for (let passIdx = step; passIdx < lights.length; passIdx += step) {
      lights[passIdx] = !lights[passIdx];
    }
    step += 1;
  }

  return lights.map((num, idx) => (num ? idx : 0)).filter(num => num);
}


console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]