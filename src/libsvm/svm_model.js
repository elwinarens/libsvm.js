function svm_model() {
    /**
     *  @type {Object} svm_parameter
     */
    this.param;

    /**
     *  number of classes = 2 in regression/one class svm
     *  @type {number} int
     */
    this.nr_class;

    /**
     *  total #SV
     *  @type {number} int
     */
    this.l;

    /**
     *  SVs (SV[l])
     *  @type {Array} svm_node[][]
     */
    this.SV;

    /**
     *  coefficients for SVs in decision functions (sv_coef[k-1][l])
     *  @type {Array} double[][]
     */
    this.sv_coef;

    /**
     *  constants in decision functions (rho[k*(k-1)/2])
     *  @type {Array} double[]
     */
    this.rho;

    /**
     *  pariwise probability information
     *  @type {Array} double[]
     */
    this.probA;

    /**
     *  @type {Array} double[]
     */
    this.probB;

    /**
     *  sv_indices[0,...,nSV-1] are values in [1,...,num_traning_data]
     *  to indicate SVs in the training set
     *  @type {Array} int[]
     */
    this.sv_indices;

    // for classification only

    /**
     *  label of each class (label[k])
     *  @type {Array} int[]
     */
    this.label;

    /**
     *  number of SVs for each class (nSV[k])
     *  nSV[0] + nSV[1] + ... + nSV[k-1] = l
     *  @type {Array} int[]
     */
    this.nSV;
}
