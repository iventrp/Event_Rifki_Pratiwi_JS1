const hargaMobil = [50000, 60000, 75000, 40000, 90000];

console.log("=== Kategori Mobil (While) ===");
let i = 0;
while (i < hargaMobil.length) {
  let kategori = "";

  if (hargaMobil[i] > 80000) {
    kategori = "Mobil Mewah";
  } else if (hargaMobil[i] > 60000) {
    kategori = "Mobil Menengah";
  } else {
    kategori = "Mobil Ekonomi";
  }

  console.log(`Harga: $${hargaMobil[i]}, Kategori: ${kategori}`);
  i++;
}
console.log("===============================");

console.log("=== Kategori Mobil (Do-While) ===");
let j = 0;
do {
  let kategori = "";

  if (hargaMobil[j] > 80000) {
    kategori = "Mobil Mewah";
  } else if (hargaMobil[j] > 60000) {
    kategori = "Mobil Menengah";
  } else {
    kategori = "Mobil Ekonomi";
  }

  console.log(`Harga: $${hargaMobil[j]}, Kategori: ${kategori}`);
  j++;
} while (j < hargaMobil.length);
console.log("===============================");