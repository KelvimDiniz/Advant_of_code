/* 
--- Day 1: Not Quite Lisp ---

Santa was hoping for a white Christmas, but his weather machine's "snow" function is powered by stars, and he's fresh out! To save Christmas, he needs you to collect fifty stars by December 25th.
Collect stars by helping Santa solve puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!
Here's an easy puzzle to warm you up.
Santa is trying to deliver presents in a large apartment building, but he can't find the right floor - the directions he got are a little confusing. He starts on the ground floor (floor 0) and then follows the instructions one character at a time.
An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.
The apartment building is very tall, and the basement is very deep; he will never find the top or bottom floors.

To what floor do the instructions take Santa?
*/

import json from './Input.json';

const input = Array.from<string>( json.input );

const findFloor = ( input: string[] ) => {

    let floor: number = 0

    input.forEach( char => {
        char === '(' ? floor++ : 
        char === ')' ? floor-- : null
    }) 

    return floor;
}

const resultPartOne = findFloor( input ) 

console.log('The instrucions took Santa to floor', resultPartOne); // 232

/*
--- Part Two ---

Now, given the same instructions, find the position of the first character that causes him to enter the basement (floor -1). 
The first character in the instructions has position 1, the second character has position 2, and so on.

For example:
) causes him to enter the basement at character position 1.
()()) causes him to enter the basement at character position 5.

What is the position of the character that causes Santa to first enter the basement?
*/

const findBasementPosition = ( input: string[] ) => {

    let floor = 0;

    for ( let i = 0; i < input.length; i++ ) {

        if ( input[i] === '(' ) {
            floor++
        } else if ( input[i] === ')' ) {
            floor--
        }

        if ( floor === -1 ) {
            return i
        }
    }

    return 'He never enter the basement'
}

const resultPartTwo = findBasementPosition( input );

console.log( "Character's position when Santa first enter the basement was", resultPartTwo );