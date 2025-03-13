function hitungLingkaran(jariJari) {
    // Hitung diameter
    let diameter = 2 * jariJari;
  
    // Hitung keliling
    let keliling = 2 * Math.PI * jariJari;
  
    // Hitung luas
    let luas = Math.PI * Math.pow(jariJari, 2);
  
    // Kembalikan hasil dalam bentuk objek
    return {
      diameter: diameter,
      keliling: keliling,
      luas: luas
    };
  }
  
  // Penggunaan dengan jari-jari
  let hasil = hitungLingkaran(5);
  
  // Tampilkan hasil
  console.log("Diameter: " + hasil.diameter);
  console.log("Keliling: " + hasil.keliling);
  console.log("Luas: " + hasil.luas);