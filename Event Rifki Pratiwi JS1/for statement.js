const buah = ["Apel", "Jeruk", "Mangga", "Anggur", "Strawberry"];

for (let i = 0; i < buah.length; i++) {
  console.log("Buah ke-" + (i + 1) + ": " + buah[i]);

  if (buah[i] === "Mangga") {
    console.log("Ini adalah buah favorit saya!");
  } else if (buah[i] === "Anggur") {
    console.log("Anggur sangat enak untuk dibuat jus.");
  }
}