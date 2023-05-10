let ask = true;

while (ask) {
  //menentukan player
  let player = prompt("Tentukan Pilihan Anda: Gajah, Orang, Semut");

  //menentukan pilihan computer

  let com = Math.random();

  if (com < 0.35) {
    com = "Gajah";
  } else if (com >= 0.35 && com < 0.65) {
    com = "Orang";
  } else {
    com = "Semut";
  }

  //menentukan kondisi
  let result = "";

  if (player == com) {
    result = "SERI !";
  } else if (player == "Gajah") {
    // if (com == "Orang") {
    //   result = "MENANG !";
    // } else {
    //   result = "KALAH !";
    // }
    result = com == "Orang" ? "MENANG !" : "KALAH!";
  } else if (player == "Orang") {
    // if (com == "Gajah") {
    //   result = "KALAH !";
    // } else {
    //   result = "MENANG !";
    // }
    result = com == "Gajah" ? "KALAH !" : "MENANG!";
  } else if (player == "Semut") {
    // if (com == "Gajah") {
    //   result = "MENANG !";
    // } else {
    //   result = "KALAH !";
    // }
    result = com == "Gajah" ? "MENANG !" : "KALAH !";
  } else {
    while (player != "Gajah" && player != "Semut" && player != "Orang") {
      player = prompt(player + " tidak ada dalam pilihan. Pilih: Gajah, Semut, atau Orang");
    }
  }

  alert("Kamu memilih: " + player + " & komputer memilih: " + com + "\nMaka hasilnya adalah: " + result);

  ask = confirm("Apakah ingin bermain lagi?");
}

let thank = "Terimakasih";
alert(thank);
//menentukan hasil
