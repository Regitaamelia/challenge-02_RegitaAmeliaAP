function isValidPassword(givenPassword) {
  // deklarasi variabel
  const hurufKecil = /[a-z]/.test(givenPassword);
  const hurufBesar = /[A-Z]/.test(givenPassword);
  const minPanjang = 8;
  const no = /\d/.test(givenPassword);

  if (givenPassword === undefined) {
    return "Error: Parameter masih kosong"; // jika parameter kosong
  } else if (typeof givenPassword !== "string") {
    return "Error: Parameter yang diminta berupa string"; // jika parameter bukan string
  }
  return givenPassword.length >= minPanjang && hurufBesar && hurufKecil && no; // jika memenuhi syarat variabel
}

// Contoh penggunaan fungsi dengan beberapa input
console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0)); // karena parameter yang diberikan bukan berupa string, melainkan angka atau integer
console.log(isValidPassword()); // karena parameter belum memasukkan nilai parameternya, jadi masih error
