import users from "./data.mjs";

const index = () => {
  const hasil = users.map(
    (u, i) => `${i + 1}. ${u.nama} | ${u.umur} | ${u.alamat} | ${u.email}`
  );
  console.log(hasil.join("\n"));
};

const store = (user) => {
  users.push(user);
  console.log(`Data ${user.nama} berhasil ditambahkan.`);
};

const destroy = () => {
  const dihapus = users.pop();
  console.log(`\nData ${dihapus.nama} berhasil dihapus.`);
};

export { index, store, destroy };