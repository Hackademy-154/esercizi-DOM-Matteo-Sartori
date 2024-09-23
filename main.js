// Lavora con il DOM:

// crea una pagina HTML con 3 paragrafi e 3 bottoni.
// Il primo bottone dovra’ cambiare il colore del testo dei paragrafi in modo casuale.
// ogni paragrafo dovra' avere un colore diverso.
// il secondo dovra’ rendere il testo dei paragrafi in grassetto.
// il terzo dovra’ far scomparire e ricomparire i paragrafi.
// TIPS:

// ricordati della proprieta’ display: none in CSS!
// i colori su CSS sono formati da R, G e B. Quindi puoi settare un colore random semplicemente randomizzando questi tre valori e mettendoli insieme. Scopri come.

let wrapper = document.querySelector("#wrapper");

let nuovoDiv = document.createElement("div");

nuovoDiv.innerHTML = `
        <p class="color">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni optio
          fuga incidunt, necessitatibus provident quaerat! Fugiat officia,
          asperiores minus, deleniti in similique, reprehenderit accusantium est
          omnis harum eum natus odio.
        </p>
        <p class="color">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni optio
          fuga incidunt, necessitatibus provident quaerat! Fugiat officia,
          asperiores minus, deleniti in similique, reprehenderit accusantium est
          omnis harum eum natus odio.
        </p>
        <p class="color">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni optio
          fuga incidunt, necessitatibus provident quaerat! Fugiat officia,
          asperiores minus, deleniti in similique, reprehenderit accusantium est
          omnis harum eum natus odio.
        </p>
        <button id="togli">Toglie e Metti</button>
        <button id="grassetto">Metti Grassetto</button>
        <button id="colore">Cambia Colore</button>
`;

wrapper.appendChild(nuovoDiv);
let paragrafi = document.querySelectorAll(".color");
let togli = document.querySelector("#togli");
let grassetto = document.querySelector("#grassetto");
let colore = document.querySelector("#colore");

togli.addEventListener("click", function (event) {
  paragrafi.forEach((el) => el.classList.toggle("d-none"));
});

grassetto.addEventListener("click", function (event) {
  paragrafi.forEach((el) => el.classList.toggle("fw-bold"));
});

let boolean = false;

colore.addEventListener("click", () => {
  paragrafi.forEach((el) => {
    if (!boolean) {
      let red = Math.floor(Math.random() * 255);
      let green = Math.floor(Math.random() * 255);
      let blue = Math.floor(Math.random() * 255);
      el.style.backgroundColor = `rgb(${red},${green},${blue})`;
    } else {
      el.style.backgroundColor = "";
    }
  });

  boolean = !boolean;
});
