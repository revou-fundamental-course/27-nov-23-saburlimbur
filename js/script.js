// Fungsi untuk menghitung luas segitiga
function hitungLuasSegitiga() {
  // Ambil nilai alas dan tinggi dari input
  var alas = parseFloat(document.getElementById('input-alas-luas').value);
  var tinggi = parseFloat(document.getElementById('input-tinggi-luas').value);

  // Validasi input
  if (isNaN(alas) || isNaN(tinggi)) {
    alert('Kamu Gagal memasukan Nilai, Karena dianggap tidak Valid!');
    return;
  }

  // Hitung luas segitiga
  var luas = 0.5 * alas * tinggi;

  // Tampilkan hasil
  document.getElementById('hasil-luas').innerHTML = luas;
}

// Fungsi untuk mereset input dan output luas segitiga
function resetLuasSegitiga() {
  document.getElementById('input-alas-luas').value = '';
  document.getElementById('input-tinggi-luas').value = '';
  document.getElementById('hasil-luas').innerHTML = '';
}

// Fungsi untuk menghitung keliling segitiga
function hitungKelilingSegitiga() {
  // Ambil nilai sisi-sisi dari input
  var sisi1 = parseFloat(document.getElementById('input-sisi1').value);
  var sisi2 = parseFloat(document.getElementById('input-sisi2').value);
  var sisi3 = parseFloat(document.getElementById('input-sisi3').value);

  // Validasi input
  if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
    alert('Kamu Gagal memasukan Nilai, Karena dianggap tidak Valid!');
    return;
  }

  // Hitung keliling segitiga
  var keliling = sisi1 + sisi2 + sisi3;

  // Tampilkan hasil
  document.getElementById('hasil-keliling').innerHTML = keliling;
}

// Fungsi untuk mereset input dan output keliling segitiga
function resetKelilingSegitiga() {
  document.getElementById('input-sisi1').value = '';
  document.getElementById('input-sisi2').value = '';
  document.getElementById('input-sisi3').value = '';
  document.getElementById('hasil-keliling').innerHTML = '';
}
