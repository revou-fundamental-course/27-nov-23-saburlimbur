document.addEventListener('DOMContentLoaded', function () {
  const inputTinggi = document.getElementById('input-tinggi'); // untk nama ID
  const buttonHitung = document.querySelector('.btn-hitung'); //query selector untk nama class
  const resetButton = document.querySelector('.btn-reset');

  buttonHitung.addEventListener('click', function () {
    hitungLuasSegitiga();
  });

  resetButton.addEventListener('click', function () {
    resetForm();
  });

  function hitungLuasSegitiga() {
    const tinggi = parseFloat(inputTinggi.value);

    if (!isNaN(tinggi) && tinggi > 0) {
      const luas = 0.5 * tinggi;
      alert('Luas Segitiga : ' + luas);
    } else {
      alert('Masukan tinggi segitiga yang benar');
    }
  }
  function resetForm() {
    tinggiInput.value = '';
  }
});


document.addEventListener('DOMContentLoaded', function () {
  const inputAlas = document.getElementById('input-alas'); 
  const inputTinggi = document.getElementById('input-tinggi');
  const buttonHitung = document.querySelector('.btn-hitung');
  const resetButton = document.querySelector('.btn-reset');
  const hasilLuas = document.getElementById('hasil-luas');

  buttonHitung.addEventListener('click', function () {
    hitungLuasSegitiga(); // menghitung
  });

  resetButton.addEventListener('click', function () {
    resetForm(); // mereset
  });

  function hitungLuasSegitiga() {
    const alas = parseFloat(inputAlas.value);
    const tinggi = parseFloat(inputTinggi.value);

    if (!isNaN(alas) && !isNaN(tinggi) && alas > 0 && tinggi > 0) {
      const luasSegitiga = 0.5 * alas * tinggi;
      hasilLuas.innerHTML = "Luas Segitiga: " + luasSegitiga.toFixed(2) + " cm<sup>2</sup>";
      hasilLuas.style.display = "block";
    } else {
      alert('Masukan nilai dengan benar');
    }
  }

  function resetForm() {
    inputAlas.value = '';
    inputTinggi.value = '';
    hasilLuas.innerHTML = '';
    hasilLuas.style.display = 'none';
  }
});
