function getSplitName(personName) {
  // tipe data parameter
  if (typeof personName !== "string") {
    return "Parameter diisi dengan teks tipe string!";
  }

  const name = personName.split(" ");

  // jumlah kata
  if (name.length > 3) {
    return "Error: Hanya untuk teks 3 karakter nama";
  }

  // nama depan, tengah, dan belakang
  let firstName = name[0];
  let middleName = null;
  let lastName = null;

  if (name.length > 1) {
    lastName = name[name.length - 1];
    if (name.length === 3) {
      middleName = name[1];
    }
  }

  // return obyek nama
  return {
    firstName,
    middleName,
    lastName,
  };
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));
