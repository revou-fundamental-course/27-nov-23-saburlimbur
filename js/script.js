function hitungLuasSegitiga() {
  var alas = parseFloat(document.getElementById('input-alas-luas').value);
  var tinggi = parseFloat(document.getElementById('input-tinggi-luas').value);

  if (isNaN(alas) || isNaN(tinggi)) {
    alert('Kamu Gagal memasukan Nilai, Karena dianggap tidak Valid!');
    return;
  }

  var luas = 0.5 * alas * tinggi;

  document.getElementById('hasil-luas').innerHTML = luas;
}

function resetLuasSegitiga() {
  document.getElementById('input-alas-luas').value = '';
  document.getElementById('input-tinggi-luas').value = '';
  document.getElementById('hasil-luas').innerHTML = '';
}

function hitungKelilingSegitiga() {
  var sisi1 = parseFloat(document.getElementById('input-sisi1').value);
  var sisi2 = parseFloat(document.getElementById('input-sisi2').value);
  var sisi3 = parseFloat(document.getElementById('input-sisi3').value);

  if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
    alert('Kamu Gagal memasukan Nilai, Karena dianggap tidak Valid!');
    return;
  }

  var keliling = sisi1 + sisi2 + sisi3;

  document.getElementById('hasil-keliling').innerHTML = keliling;
}

function resetKelilingSegitiga() {
  document.getElementById('input-sisi1').value = '';
  document.getElementById('input-sisi2').value = '';
  document.getElementById('input-sisi3').value = '';
  document.getElementById('hasil-keliling').innerHTML = '';
}
