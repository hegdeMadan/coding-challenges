module.exports = {
  //param A : array of integers
  //return an integer
  mergeAndCountInversion: function (array, aux, low, mid, high) {
    const MOD = 1_000_000_007;
    let inversionCount = 0;
    let i = low;
    let j = mid + 1;
    let k = low;

    while (i <= mid && j <= high) {
      if (array[i] <= array[j]) {
        aux[k] = array[i];
        k++;
        i++;
      } else {
        aux[k] = array[j];
        k++;
        j++;
        inversionCount = (inversionCount + (mid - i + 1)) % MOD;
      }
    }

    // Copy the remaining elements of the left half
    while (i <= mid) {
      aux[k] = array[i];
      k++;
      i++;
    }

    // Copy the remaining elements of the right half
    while (j <= high) {
      aux[k] = array[j];
      k++;
      j++;
    }

    // Copy the sorted subarray back to the original array
    for (let idx = low; idx <= high; idx++) {
      array[idx] = aux[idx];
    }

    return inversionCount;
  },

  mergeSortAndCountInversion: function (array, aux, low, high) {
    const MOD = 1_000_000_007;
    let inversionCount = 0;

    if (low < high) {
      const mid = low + Math.floor((high - low) / 2);

      inversionCount = (inversionCount + this.mergeSortAndCountInversion(array, aux, low, mid)) % MOD;
      inversionCount = (inversionCount + this.mergeSortAndCountInversion(array, aux, mid + 1, high)) % MOD;

      inversionCount = (inversionCount + this.mergeAndCountInversion(array, aux, low, mid, high)) % MOD;
    }

    return inversionCount;
  },

  solve: function (A) {
    const aux = new Array(A.length); // Initialize the auxiliary array with the correct length
    const count = this.mergeSortAndCountInversion(A, aux, 0, A.length - 1);
    return count;
  },
};
