let menu = document.querySelectorAll(".menu-item");
let tombolBeli = document.querySelectorAll(".buy-button");
let tombolBayar = document.querySelector("#pay-button");
let inputUang = document.querySelector("#paid-amount");

for (let i = 0; i < tombolBeli.length; i++) {
    tombolBeli[i].addEventListener("click", function () {
        let jumlah = tombolBeli[i].querySelector(".buy-count");
        jumlah.textContent = Number(jumlah.textContent) + 1;
    });
}

tombolBayar.addEventListener("click", function () {
    let totalBelanja = 0;
    let jumlahBarang = 0;
    let rincianBelanja = "";

    for (let i = 0; i < menu.length; i++) {
        let nama = menu[i].querySelector("img").alt;
        let harga = Number(menu[i].dataset.price);
        let jumlah = Number(menu[i].querySelector(".buy-count").textContent);

        if (jumlah > 0) {
            let subtotal = harga * jumlah;
            rincianBelanja += nama + " x " + jumlah + " = Rp" + subtotal + "\n";
            totalBelanja += subtotal;
            jumlahBarang += jumlah;
        }
    }

    if (jumlahBarang === 0) {
        alert("Belum ada barang yang dibeli.");
        return;
    }

    if (inputUang.value === "") {
        alert("Masukkan jumlah uang yang dibayar.");
        return;
    }

    let uangDibayar = Number(inputUang.value);

    if (uangDibayar < totalBelanja) {
        alert(
            "Data Belanja\n" +
            rincianBelanja +
            "Total belanja: Rp" + totalBelanja + "\n" +
            "Uang dibayar: Rp" + uangDibayar + "\n" +
            "Uang kurang: Rp" + (totalBelanja - uangDibayar)
        );
        return;
    }

    alert(
        "Data Belanja\n" +
        rincianBelanja +
        "Total belanja: Rp" + totalBelanja + "\n" +
        "Uang dibayar: Rp" + uangDibayar + "\n" +
        "Kembalian: Rp" + (uangDibayar - totalBelanja)
    );

    for (let i = 0; i < tombolBeli.length; i++) {
        tombolBeli[i].querySelector(".buy-count").textContent = "0";
    }

    inputUang.value = "";
});