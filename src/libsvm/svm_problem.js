/**
 * @param  {number} l int
 * @param  {Array} y double[]
 * @param  {Array} x svm_node[][]
 */
function svm_problem(l, y, x) {
    /**
     * @type {number} int
     */
    this.l = l;

    /**
     * @type {Array} double[]
     */
    this.y = y;

    /**
     * @type {Array} svm_node[][]
     */
    this.x = x;
}
