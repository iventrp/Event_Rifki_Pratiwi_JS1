const tipeKendaraan = "Sedan";

const tahunKendaraan = 2022;

let kategoriKendaraan = "";

if (tipeKendaraan === "Sedan") {
  if (tahunKendaraan >= 2020) {
    kategoriKendaraan = "Kendaraan Sedan Terbaru";
  } else if (tahunKendaraan >= 2010) {
    kategoriKendaraan = "Kendaraan Sedan Modern";
  } else {
    kategoriKendaraan = "Kendaraan Sedan Klasik";
  }
} else if (tipeKendaraan === "SUV") {
  kategoriKendaraan = "Kendaraan SUV";
} else {
  kategoriKendaraan = "Tipe Kendaraan tidak dikenal";
}

console.log(`Tipe kendaraan: ${tipeKendaraan}, Tahun: ${tahunKendaraan}, Kategori: ${kategoriKendaraan}`);
