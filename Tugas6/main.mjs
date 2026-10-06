import { index, store, destroy } from "./controller.mjs";

const main = () => {
  store({ nama: "Ruby", umur: 28, alamat: "Jl. Raya Sentul No. 20, Bogor, Jawa Barat", email: "ruby@mail.com"});
  store({ nama: "Ciya", umur: 29, alamat: "Jl. Margonda Raya No. 80, Depok, Jawa Barat", email: "ciya@mail.com"});
  
  console.log("\nSetelah ditambah:");
  index();
  destroy();
  console.log("\nSetelah dihapus:");
  index();
};

main();
