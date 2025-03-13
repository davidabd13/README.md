function hitungSudutKetiga(sudut1, sudut2) {
    // Sudut segitiga
    let sudutKetiga = 180 - sudut1 - sudut2;
  
    return sudutKetiga;
  }
  let sudutA = 80;
  let sudutB = 65;
  let sudutC = hitungSudutKetiga(sudutA, sudutB);
  
  // Hasil
  console.log("Sudut ketiga: " + sudutC);