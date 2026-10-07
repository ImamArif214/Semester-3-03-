const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nilai: ", function(nilai) {

    nilai = parseInt(nilai);

    if (nilai >= 70) {
        console.log("Nilai:", nilai);
        console.log("Status: Lulus");
    } else {
        console.log("Nilai:", nilai);
        console.log("Status: Tidak Lulus");
    }

    rl.close();
});