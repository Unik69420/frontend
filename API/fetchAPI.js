const URL = "https://dog.ceo/api/breeds/image/random";
const btn = document.querySelector("#btn");
const factPara = document.querySelector("#fact");
const image = document.querySelector("#img");
const getFacts = async () => {
  let response = await fetch(URL);
  let data = await response.json();
  //   console.log(data);
  const dogImage = data.message;
  image.src = dogImage;
};
// function getFacts() {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       factPara.innerText = data[2].text;
//     });
// }
btn.addEventListener("click", getFacts);
