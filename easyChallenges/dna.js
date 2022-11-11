class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(otherStrand) {
    let count = 0;
    let minLength = this.strand.length < otherStrand.length ?
      this.strand.length : otherStrand.length;

    for (let idx = 0; idx < minLength; idx++) {
      if (this.strand[idx] !== otherStrand[idx]) count += 1;
    }

    return count;
  }
}

module.exports = DNA;