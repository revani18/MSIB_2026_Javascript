// Revani - STTNF
// List 5 Data Produk Awal
let produkList = [
    { id: 1, nama: "Laptop", harga: 12000000 },
    { id: 2, nama: "Smartphone", harga: 5000000 },
    { id: 3, nama: "Headphone", harga: 750000 },
    { id: 4, nama: "Keyboard", harga: 350000 },
    { id: 5, nama: "Monitor", harga: 2500000 }
];

// Event Listener
const eventHandler = new EventTarget();

eventHandler.addEventListener("tambahProduk", function(event) {
    tambahProduk(event.detail.id, event.detail.nama, event.detail.harga);
    console.log(`\nProduk "${event.detail.nama}" berhasil ditambahkan.`);
});

eventHandler.addEventListener("hapusProduk", function(event) {
    hapusProduk(...event.detail);
    console.log(`\nProduk dengan id ${event.detail.join(", ")} berhasil dihapus.`);
});

eventHandler.addEventListener("tampilkanProduk", function() {
    console.log("\nDaftar Produk:");
    tampilkanProduk();
});

// Menambahkan Produk dengan Spread Operator
function tambahProduk(id, nama, harga) {
    produkList = [...produkList, { id, nama, harga }];
}

// Menghapus Produk dengan Rest Parameter
function hapusProduk(...id) {
    produkList = produkList.filter(produk => !id.includes(produk.id));
}

// Menampilkan Semua Produk dengan Destructuring
function tampilkanProduk() {
    produkList.forEach(({ id, nama, harga }) => {
        console.log(`ID: ${id} | Nama: ${nama} | Harga: Rp${harga.toLocaleString("id-ID")}`);
    });
}

// Tampil Semua Produk
eventHandler.dispatchEvent(new Event("tampilkanProduk"));

// Tambah Produk
eventHandler.dispatchEvent(new CustomEvent("tambahProduk", {
    detail: { id: 6, nama: "Tablet", harga: 7000000 }
}));
eventHandler.dispatchEvent(new Event("tampilkanProduk"));

// Hapus Produk
eventHandler.dispatchEvent(new CustomEvent("hapusProduk", {
    detail: [2]
}));
eventHandler.dispatchEvent(new Event("tampilkanProduk"));