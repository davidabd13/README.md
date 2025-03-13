function selisihHari(tanggal1, tanggal2) {
    // Ubah string tanggal menjadi Date
    let date1 = new Date(tanggal1);
    let date2 = new Date(tanggal2);
  
    // Hitung selisih waktu
    let selisihWaktu = Math.abs(date2 - date1);
  
    // Konversi waktu ke hari
    let selisihHari = Math.ceil(selisihWaktu / (1000 * 60 * 60 * 24));
  
    return selisihHari;
  }
  
  // Input tanggal
  let tanggalAwal = "2024-03-19";
  let tanggalAkhir = "2024-03-21";
  let jumlahHari = selisihHari(tanggalAwal, tanggalAkhir);
  
  // Hasil
  console.log("Selisih hari: " + jumlahHari);