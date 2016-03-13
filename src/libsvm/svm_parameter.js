function svm_parameter() {
    /**
     * @type {number} int
     */
    this.svm_type;

    /**
     * @type {number} int
     */
    this.kernel_type;

    /**
     * for poly
     * @type {number} int
     */
    this.degree;

    /**
     * for poly/rbf/sigmoid
     * @type {number} double
     */
    this.gamma;

    /**
     * for poly/sigmoid
     * @type {number} double
     */
    this.coef0;

    // these are for training only

    /**
     * in MB
     * @TODO Review cache and it's place in a js version of this lib
     * @type {number} double
     */
    this.cache_size;

    /**
     * stopping criteria
     * @type {number} double
     */
    this.eps;

    /**
     * for C_SVC, EPSILON_SVR and NU_SVR
     * @type {number} double
     */
    this.C;

    /**
     * for C_SVC
     * @type {number} int
     */
    this.nr_weight;

    /**
     * for C_SVC
     * @type {Array} int[]
     */
    this.weight_label;

    /**
     * for C_SVC
     * @type {Array} double[]
     */
    this.weight;

    /**
     * for NU_SVC, ONE_CLASS, and NU_SVR
     * @type {number} double
     */
    this.nu;

    /**
     * for EPSILON_SVR
     * @type {number} double
     */
    this.p;

    /**
     * use the shrinking heuristics
     * @type {number} int
     */
    this.shrinking;

    /**
     * do probability estimates
     * @type {number} int
     */
    this.probability;

}

/* svm_type */
svm_parameter.prototype.C_SVC = 0;
svm_parameter.prototype.NU_SVC = 1;
svm_parameter.prototype.ONE_CLASS = 2;
svm_parameter.prototype.EPSILON_SVR = 3;
svm_parameter.prototype.NU_SVR = 4;

/* kernel_type */
svm_parameter.prototype.LINEAR = 0;
svm_parameter.prototype.POLY = 1;
svm_parameter.prototype.RBF = 2;
svm_parameter.prototype.SIGMOID = 3;
svm_parameter.prototype.PRECOMPUTED = 4;
