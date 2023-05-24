// JS menghitung luas
function hitungLuas() {
    var sisiLuas = parseFloat(document.getElementById('sisi-luas').value);
    var luas = sisiLuas * sisiLuas;
    
    if (isNaN(luas)) {
      document.getElementById('output_luas').innerHTML = "Masukkan panjang sisi yang valid!";
    } else {
      document.getElementById('output_luas').innerHTML = "L = S x S" + "<br>L = " + sisiLuas + " x " + sisiLuas + "<br>L = " + luas.toFixed(2);
    }
  }
  function resetForm() {
    document.getElementById('sisi-luas').value = "";
    document.getElementById('output_luas').innerHTML = "";
  }

  // JS menghitung keliiling
  function hitungKeliling() {
    var sisiKeliling = parseFloat(document.getElementById('sisi-keliling').value);
    var keliling = 4 * sisiKeliling;
    
    if (isNaN(keliling)) {
      document.getElementById('output_keliling').innerHTML = "Masukkan panjang sisi yang valid!";
    } else {
      document.getElementById('output_keliling').innerHTML = "K = 4 x S" + "<br>K = 4 x " + sisiKeliling + "<br>K = " + keliling.toFixed(2);
    }
  }
  function resetFormKeliling() {
    document.getElementById('sisi-keliling').value = "";
    document.getElementById('output_keliling').innerHTML = "";
  }