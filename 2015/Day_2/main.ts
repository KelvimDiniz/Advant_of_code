/* 
--- Day 2: I Was Told There Would Be No Math ---

The elves are running low on wrapping paper, and so they need to submit an 
order for more. They have a list of the dimensions (length l, width w, and 
height h) of each present, and only want to order exactly as much as they need.

Fortunately, every present is a box (a perfect right rectangular prism), 
which makes calculating the required wrapping paper for each gift a little
easier: find the surface area of the box, which is 2*l*w + 2*w*h + 2*h*l. 
The elves also need a little extra paper for each present: the area of the 
smallest side.

For example:

A present with dimensions 2x3x4 requires 2*6 + 2*12 + 2*8 = 52 square 
feet of wrapping paper plus 6 square feet of slack, for a total of 58 
square feet.

A present with dimensions 1x1x10 requires 2*1 + 2*10 + 2*10 = 42 
square feet of wrapping paper plus 1 square foot of slack, for a total 
of 43 square feet.

All numbers in the elves' list are in feet. How many total square feet of wrapping paper should they order?
*/

import fs from 'fs';

const regex = /(\d+)/g;

const dimensions = fs.readFileSync('2015/Day_2/02_input.csv',{
    encoding:'utf8', flag:'r'})
    .toString()
    .split('\n')
    .map( dimension => {
        const matches = dimension.match(regex);
        return matches ? matches.map(Number): []
    });

class WrappingPaperCalculator {
    private boxAreaDimensions: number[][]

    constructor( boxAreaDimensions: number[][] ) {
        this.boxAreaDimensions = boxAreaDimensions
    }

    length( boxAreaDimension: number[] ) {
        return boxAreaDimension[0];
    }

    width( boxAreaDimension: number[] ) {
        return boxAreaDimension[1];
    }

    height( boxAreaDimension: number[] ) {
        return boxAreaDimension[2];
    }

    totalSquareFeetOfPaper() {
        const boxAreaSurface = this.boxAreaDimensions.map( boxAreaDimension => {
            const lw = this.length(boxAreaDimension) * this.width(boxAreaDimension);
            const wh = this.width(boxAreaDimension) * this.height(boxAreaDimension);
            const hl = this.height(boxAreaDimension) * this.length(boxAreaDimension);
            const area = 2 * lw + 2 * wh + 2 * hl
            const extraPaper = boxAreaDimension.reduce((accumulator, element) => accumulator += element );
            return area + extraPaper;
        })
        return boxAreaSurface.reduce((accumulator, element) => accumulator += element );
    }
};

const result = new WrappingPaperCalculator(dimensions)

console.log( result.totalSquareFeetOfPaper() )// 1606483