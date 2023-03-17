const dataPenjualanNovel = [
  {
    id: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hrgBeli: 60000,
    hrgJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    id: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hrgBeli: 75000,
    hrgJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    id: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hrgBeli: 67000,
    hrgJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    id: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hrgBeli: 55000,
    hrgJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function hitungPenjualanNovel(dataPenjualan) {
  // deklarasi variabel
  let totalModal = 0;
  let totalKeuntungan = 0;
  let produkBukuTerlaris = {};
  let penulisTerlaris = {};
  let maxTerjual = 0;

  // parameter berupa array
  if (!Array.isArray(dataPenjualan)) {
    throw new Error("Data penjualan berupa array");
  }

  dataPenjualan.forEach((produk) => {
    if (!produk.hrgBeli || !produk.hrgJual) {
      throw new Error(`Produk ${produk.id} memiliki harga beli dan harga jual`);
    }

    // hitungan total modal dan keuntungan
    totalModal += produk.hrgBeli * produk.totalTerjual;
    totalKeuntungan += (produk.hrgJual - produk.hrgBeli) * produk.totalTerjual;

    if (!penulisTerlaris[produk.penulis]) {
      penulisTerlaris[produk.penulis] = produk.totalTerjual;
    } else if (produk.totalTerjual > maxTerjual) {
      produkBukuTerlaris = produk;
      maxTerjual = produk.totalTerjual;
    }
  });

  // persentase keuntungan
  const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

  // format mata uang rupiah
  const format = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  return {
    totalKeuntungan: format.format(totalKeuntungan),
    totalModal: format.format(totalModal),
    persentaseKeuntungan: persentaseKeuntungan.toFixed() + "%",
    produkBukuTerlaris: produkBukuTerlaris.namaProduk,
    penulisTerlaris: Object.entries(penulisTerlaris)
      .sort((x, y) => y[1] - x[1])
      .map((penulis) => penulis[1])[1],
  };
}
console.log(hitungPenjualanNovel(dataPenjualanNovel));
