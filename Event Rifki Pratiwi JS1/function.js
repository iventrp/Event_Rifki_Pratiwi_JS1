function tentukanKategoriMakanan(makanan) {
    let kategori = "";
    
    switch (makanan) {
      case "Pizza":
        kategori = "Makanan Italia";
        break;
      case "Sushi":
        kategori = "Makanan Jepang";
        break;
      case "Taco":
        kategori = "Makanan Meksiko";
        break;
      case "Burger":
        kategori = "Makanan Amerika";
        break;
      default:
        kategori = "Kategori tidak dikenal";
        break;
    }
    
    return kategori;
  }
  
  // Variabel makanan berfungsi untuk menyimpan nama makanan
  const makanan1 = "Pizza";
  const makanan2 = "Sushi";
  const makanan3 = "Spaghetti";
  
  console.log(`Makanan 1: ${makanan1} (${tentukanKategoriMakanan(makanan1)})`);
  console.log(`Makanan 2: ${makanan2} (${tentukanKategoriMakanan(makanan2)})`);
  console.log(`Makanan 3: ${makanan3} (${tentukanKategoriMakanan(makanan3)})`);
  