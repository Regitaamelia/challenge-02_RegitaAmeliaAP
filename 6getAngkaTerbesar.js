const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

function getAngkaTerbesarKedua(dataAngka) {
  if (!Array.isArray(dataAngka)) {
    return "Parameter berupa array"; // parameter berupa urutan angka array
  } else if (!dataAngka || dataAngka.length === 0) {
    return "Parameter harus diisi (tidak kosong)"; // parameter tidak boleh kososng
  } else if (dataAngka.length < 2) {
    return "Array dengan minimal 2 angka"; // array harus minimal 2 angka
  } else {
    const nomorUnik = [...new Set(dataAngka)];
    const nomorUrutan = nomorUnik.sort((x, y) => y - x);
    return nomorUrutan[1];
  }
}

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0)); // Error karena parameter yang diberikan hanya "0", tidak berupa array
console.log(getAngkaTerbesarKedua()); // Error karena parameternya sama sekali tidak ada array
