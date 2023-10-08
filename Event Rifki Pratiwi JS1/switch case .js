function tentukanKategoriBuah(jenisBuah) {
    let kategori = "";
    
    switch (jenisBuah) {
      case "Apel":
        kategori = "Buah Segar";
        break;
      case "Jeruk":
        kategori = "Buah Berair";
        break;
      case "Mangga":
        kategori = "Buah Tropis";
        break;
      case "Anggur":
        kategori = "Buah Beri";
        break;
      default:
        kategori = "Kategori tidak dikenal";
        break;
    }
    
    return kategori;
  }

  const buah1 = "Apel";
  const buah2 = "Jeruk";
  const buah3 = "Mangga";
  
  console.log(`Jenis buah 1: ${buah1}, Kategori: ${tentukanKategoriBuah(buah1)}`);
  console.log(`Jenis buah 2: ${buah2}, Kategori: ${tentukanKategoriBuah(buah2)}`);
  console.log(`Jenis buah 3: ${buah3}, Kategori: ${tentukanKategoriBuah(buah3)}`);
  