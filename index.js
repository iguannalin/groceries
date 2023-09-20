window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  // <dialog open>
  //           <p>Greetings, one and all!</p>
  //           <form method="dialog">
  //             <button>OK</button>
  //           </form>
  //         </dialog>
          

  fetch("https://seasons986.pythonanywhere.com/groceries").then((r) => r.json()).then((d) => {
    if (d) console.log(d.pageProps.data.results);
  })
});