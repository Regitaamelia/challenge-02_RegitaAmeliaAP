function checkEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email)) {
    return "VALID";
  } else {
    return "INVALID";
  }
}

// ketika function dipanggil
console.log(checkEmail("apranata@binar.co.id")); // output => "VALID"
console.log(checkEmail("apranata@binar.com")); // output => "VALID"
console.log(checkEmail("apranata@binar")); // output => "INVALID"
console.log(checkEmail("apranata")); // invalid karena tidak ada simpul "@" dalam teks yang akan dioutputkan
console.log(checkEmail(checkEmail(3322))); // invalid karena tidak ada teks berupa nama email yang terdeteksi
console.log(checkEmail()); // invalid karena tidak ada teks berupa nama email yang terdeteksi
