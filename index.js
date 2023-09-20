window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  fetch("https://www.wholefoodsmarket.com/_next/data/cIPmXap6kWkre23RzNwD-/products/all-products.json?featured=on-sale&category=all-products").then((r) => r.json()).then((d) => {
    if (d) console.log(d.data.results);
  })
});