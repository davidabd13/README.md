function inisialNama(namaLengkap) {
    // Extract nama lengkap
    let kataKata = namaLengkap.split(" ");
    let inisial = "";
  
    // Loop
    for (let i = 0; i < kataKata.length; i++) {
      // Ubah karakter pertama menjadi huruf besar
      inisial += kataKata[i].charAt(0).toUpperCase();
    }
    return inisial;
  }
  let nama = "John Doe";
  let inisialNamaLengkap = inisialNama(nama);
  
  // Hasil
  console.log(inisialNamaLengkap);