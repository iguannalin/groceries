window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const container = document.getElementById("container");
  let groceries = {};
  let total = 2150;
  let w = window.innerWidth - 200;
  let h = window.innerHeight - 200;

  function getItem() {
    const gm = Object.keys(groceries);
    let itemIndex = getRandomInt(0, gm.length);
    while (total < groceries[gm[itemIndex]]) {
      itemIndex = getRandomInt(0, gm.length);
    }
    return groceries[gm[itemIndex]];
  }

  function displayItem(init = false) {
    const item = getItem();
    const dialog = document.createElement("dialog");
    const p = document.createElement("p");
    const form = document.createElement("form");
    const button = document.createElement("button");
    if (!init) p.innerHTML += `you spent $${item.regularPrice} on ${item.name}<br><br>`;
    p.innerHTML += `you have $${total} to spend`;
    dialog.appendChild(p);
    if (!init) button.innerHTML = "OK";
    else button.innerHTML = "let's shop";
    form.appendChild(button);
    dialog.appendChild(form);
    dialog.open = true;
    button.onclick = (e) => {
      e.preventDefault(); button.style.display = "none";
      displayItem();
    }
    if (!init) { dialog.style.left = `${getRandomInt(0,w)}px`; dialog.style.top = `${getRandomInt(0,h)}px` }
    else { dialog.style.left = `${(w-250)/2}px`; dialog.style.top = `${(h)/2}px` }
    container.appendChild(dialog);
    total = Math.round((total - item.regularPrice) * 100) / 100;
    console.log({item}, {total});
  }

  function startShopping() {
    displayItem(true);
  }
          

  fetch("https://seasons986.pythonanywhere.com/groceries").then((r) => r.json()).then((d) => {
    if (d) {
      d.pageProps.data.results.forEach((item) => {groceries[item.regularPrice] = item});
      console.log(groceries);
      startShopping();
    }
  })
});