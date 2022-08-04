const img = document.getElementById("img-profile");
const name = document.getElementById("p-name");
const address = document.getElementById("p-address");
const email = document.getElementById("p-email");
const btnGenerate = document.getElementById("btn-random");

// async function callApi() {
//   const resp = await axios.get("https://randomuser.me/api/");
// }
btnGenerate.onclick = async () => {
  const resp = await axios.get("https://randomuser.me/api/");
};
