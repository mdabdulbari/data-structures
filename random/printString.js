/* Given a string, a character, and a count, the task is to print the string after the specified
character has occurred count number of times. Print “Empty string” in case of any unsatisfying conditions.
(Given character is not present, or present but less than given count, or given count completes on last index).
If given count is 0, then given character doesn’t matter, just print the whole string. */

function printString(str, char, count) {
    let timesSpotted = 0;
    for (let i = 0; i < str.length; i++) {
        if (count === timesSpotted) {
            console.log(str.slice(i, str.length));
            return;
        }
        if (str[i] === char) {
            timesSpotted += 1;
        }
    }
}

const str = "This is a random string";
const char = "i";
const count = 3;

printString(str, char, count);
