/**
 * Matrix
 * Given a string representing a matrix of numbers, return the rows and columns of that matrix.
 *
 * So given a string with embedded newlines like:
 *
 *     9 8 7
 *     5 3 2
 *     6 6 7
 *
 * representing this matrix:
 *
 *         1  2  3
 *       |---------
 *     1 | 9  8  7
 *     2 | 5  3  2
 *     3 | 6  6  7
 *
 * your code should be able to spit out:
 *
 * A list of the rows, reading each row left-to-right while moving top-to-bottom across the rows,
 * A list of the columns, reading each column top-to-bottom while moving from left-to-right.
 *
 * The rows for our example matrix:
 *
 *     9, 8, 7
 *     5, 3, 2
 *     6, 6, 7
 *
 * And its columns:
 *
 *     9, 5, 6
 *     8, 3, 6
 *     7, 2, 7
 */

class Matrix {
  _rows: number[][] = []
  _columns: number[][];

  constructor(private matrix: string) {
    for (let row of matrix.split('\n')) { //!
      this._rows.push(row.split(' ').map(Number));
    }

    const transposed: number[][] = []
    for (let i = 0; i < this._rows.length; i += 1) {
      for (let j = 0; j < this._rows[i].length; j += 1) {
          if (transposed.length <= j) {   
            transposed[j] = []
          }
          transposed[j].push(this._rows[i][j])
      }
    }
     this._columns = transposed;
    }
  
  get rows() {
    return this._rows;
  }
      
   get columns() {
    return this._columns;
  }
}

export { Matrix };
