function tampilJam() {
    const waktu = new Date();

    let jam = waktu.getHours();
    let menit = waktu.getMinutes();
    let detik = waktu.getSeconds();

    let hari = waktu.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // Tambah 0 jika angka < 10
    jam = jam < 10 ? "0" + jam : jam;
    menit = menit < 10 ? "0" + menit : menit;
    detik = detik < 10 ? "0" + detik : detik;

    document.getElementById("jam").innerHTML =
        "Waktu Sekarang: " + hari + " | " + jam + ":" + menit + ":" + detik;
}


setInterval(tampilJam, 1000);