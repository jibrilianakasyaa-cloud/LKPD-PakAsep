function enter(){
  let masukan = document.getElementById("tebakan");
  let no = [0, 1, 2, 3, 4, 5]
    let rng=Math.floor(Math.random() * no.length);
    let jawa = no[rng];
  if (masukan.value==rng){
    alert("Kamu benar!");
  } else if
    (masukan.value>5){
      alert("1 sampe 5 tod")
  }
    else{
      alert("Kamu salah... " + "Jawabannya adalah "+ jawa);
  }
}