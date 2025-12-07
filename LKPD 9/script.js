console.log("Hello, World!");
document.getElementById("tes").addEventListener("click", function(){
  let karbit = document.getElementById("karbit");
  let rng = Math.floor(Math.random()*101);
  let persen = document.getElementById("persenan").innerHTML=rng + "%";
  let nam = document.getElementById("nama").value;
  if (nam.trim() === ""){
    document.getElementById("hasil").innerHTML="Nama harus diisi!";
    document.getElementById("persenan").innerHTML="";
  } else if (rng<=5){
    document.getElementById("hasil").innerHTML=nam+", kamu setia banget";
    karbit.src="sipaling setia.png"
  } else if (rng<=25){
    document.getElementById("hasil").innerHTML=nam +", kamu lumayan setia!";
    karbit.src="pura-pura setia.png"
  } else if (rng<=50){
    document.getElementById("hasil").innerHTML="Bit.";
    karbit.src="bit.png";
  } else if (rng<=75){
document.getElementById("hasil").innerHTML="Cuih, karbit lu, "+nam+".";
karbit.src="wahkarbit.png";
  } else {
document.getElementById("hasil").innerHTML=nam + ", kamu adalah titisan Soekarno!";
karbit.src="sukarno.png";
  };
});