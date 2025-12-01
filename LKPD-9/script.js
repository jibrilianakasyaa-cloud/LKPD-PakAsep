function enter(){
  let masukan = document.getElementById("tebakan").value.trim();
  let no = [0, 1, 2, 3, 4, 5]
    let rng=Math.floor(Math.random() * no.length);
    let jawa = no[rng];
  if (masukan.value==rng){
    alert("Kamu benar!");
  } else if
    (masukan>5 || masukan==="" || masukan<0){
      alert("Isi kotaknya, dan/atau pastikan angka hanya dari 0 sampai 5!")
  }
    else{
      alert("Kamu salah... " + "Jawabannya adalah "+ jawa);
  }
}