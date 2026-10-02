// Revani - STTNF
class Kendaraan {
  constructor(nama, plat) {
    this.nama = nama;
    this.plat = plat;
    this.disewa = false;
  }

  info() {
    return `${this.nama} (${this.plat})`;
  }
}

class Mobil extends Kendaraan {
  constructor(nama, plat, jumlahPenumpang) {
    super(nama, plat);
    this.jumlahPenumpang = jumlahPenumpang;
  }

  info() {
    return `Mobil ${this.nama} (${this.plat}) - ${this.jumlahPenumpang} penumpang`;
  }
}

class Motor extends Kendaraan {
  constructor(nama, plat, tipe) {
    super(nama, plat);
    this.tipe = tipe;
  }

  info() {
    return `Motor ${this.nama} (${this.plat}) - ${this.tipe}`;
  }
}

class Bus extends Kendaraan {
  constructor(nama, plat, kapasitas) {
    super(nama, plat);
    this.kapasitas = kapasitas;
  }

  info() {
    return `Bus ${this.nama} (${this.plat}) - kapasitas ${this.kapasitas}`;
  }
}

class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null;
  }

  sewaKendaraan(kendaraan) {
    if (this.kendaraanDisewa) {
      console.log(`${this.nama} masih menyewa kendaraan lain.`);
      return;
    }
    if (kendaraan.disewa) {
      console.log(`${kendaraan.nama} sedang disewa pelanggan lain.`);
      return;
    }
    kendaraan.disewa = true;
    this.kendaraanDisewa = kendaraan;
    console.log(`${this.nama} berhasil menyewa ${kendaraan.info()}`);
  }

  kembalikanKendaraan() {
    if (!this.kendaraanDisewa) {
      console.log(`${this.nama} tidak sedang menyewa kendaraan.`);
      return;
    }
    console.log(`${this.nama} mengembalikan ${this.kendaraanDisewa.info()}`);
    this.kendaraanDisewa.disewa = false;
    this.kendaraanDisewa = null;
  }
}

class SistemTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  tampilkanPenyewa() {
    const penyewa = this.daftarPelanggan.filter(p => p.kendaraanDisewa);
    console.log("\nDaftar Pelanggan yang Sedang Menyewa Kendaraan:");
    if (penyewa.length === 0) {
      console.log("Tidak ada pelanggan yang sedang menyewa.");
      return;
    }
    penyewa.forEach((p, i) => {
      console.log(`${i + 1}. ${p.nama} | ${p.nomorTelepon} | ${p.kendaraanDisewa.info()}`);
    });
  }
}

const sistem = new SistemTransportasi();

const mobil = new Mobil("Mercy", "B 3512 RR", 7);
const motor = new Motor("Fazio", "F 1811 RW", "Matic");
const bus = new Bus("Hino", "D 2611 KJ", 15);

const p1 = new Pelanggan("Revani", "081234567890");
const p2 = new Pelanggan("Karina", "085611223344");
const p3 = new Pelanggan("Giselle", "087788990011");

sistem.tambahPelanggan(p1);
sistem.tambahPelanggan(p2);
sistem.tambahPelanggan(p3);

p1.sewaKendaraan(mobil);
p2.sewaKendaraan(motor);
p3.sewaKendaraan(mobil);

sistem.tampilkanPenyewa();

p1.kembalikanKendaraan();

sistem.tampilkanPenyewa();