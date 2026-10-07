const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let totalKalori = 0;

function pilihOlahraga() {

    console.log("\n=== PILIH OLAHRAGA ===");
    console.log("1. Push-up");
    console.log("2. Lari");
    console.log("3. Plank");

    rl.question("Pilih olahraga (1-3): ", function(pilihan) {

        rl.question("Masukkan waktu (menit): ", function(waktu) {

            pilihan = parseInt(pilihan);
            waktu = parseInt(waktu);

            let kalori = 0;

            switch (pilihan) {

                case 1:
                    kalori = (waktu / 30) * 200;
                    console.log("Olahraga: Push-up");
                    break;

                case 2:
                    kalori = (waktu / 5) * 60;
                    console.log("Olahraga: Lari");
                    break;

                case 3:
                    kalori = waktu * 5;
                    console.log("Olahraga: Plank");
                    break;

                default:
                    console.log("Pilihan tidak tersedia");
                    rl.close();
                    return;
            }

            console.log("Waktu:", waktu, "menit");
            console.log("Kalori terbakar:", kalori, "kalori");

            totalKalori += kalori;

            rl.question("\nTambah olahraga lagi? (y/n): ", function(jawab) {

                if (jawab == "y") {
                    pilihOlahraga();
                } else {
                    console.log("\nTotal kalori terbakar:", totalKalori, "kalori");
                    rl.close();
                }

            });
        });
    });
}

pilihOlahraga();