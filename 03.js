const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan kalimat: ", function(kalimat) {

    let hasil = "";

    for (let i = kalimat.length - 1; i >= 0; i--) {
        hasil += kalimat[i];
    }

    console.log("Hasil:", hasil);

    rl.close();     
});