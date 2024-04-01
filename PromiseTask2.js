const PromiseOne = new Promise((resolve, reject) => {
  setTimeout(async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (response.ok) {
      let data = await response.json();
      resolve(data);
    } else {
      reject("Error when fetching data from Api");
    }
  }, 2500);
});

PromiseOne.then((data) => {
  data.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const heading = document.createElement("h3");
    heading.innerText = element.category;

    const paragraph = document.createElement("p");
    paragraph.innerText = element.description;

    card.appendChild(heading);
    card.appendChild(paragraph);

    document.getElementById("div").appendChild(card);
  });
}).catch((errr) => {
  const paragraph = document.createElement("p");
  paragraph.innerText = "Error: " + errr;
  document.getElementById("div").appendChild(paragraph);
});
