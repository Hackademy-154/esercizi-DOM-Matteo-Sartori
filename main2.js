// Crea un file html con le seguenti caratteristiche:

// un input per il titolo
// una textarea per inserire un paragrafo
// un bottone per creare l’articolo
// Al click sul bottone, crea un articolo popolato dai valori prelevati dai due input

// inserire nell’articolo anche la data di pubblicazione tramite questa istruzione → Date - JavaScript | MDN

// let date = new Date();

// let formatDate = date.toLocaleDateString()

// EXTRA:

// fai in modo che, cliccando sul bottone crea articolo, se titolo o paragrafo sono vuoti, esca un alert che informi l’utente del problema
// fai in modo che, una volta creato l’articolo, gli input vengano puliti

{
  /*     
    <input type="text" id="inputTitolo" name="inputTitolo" required />
    <textarea name="inputTextArea" id="inputTextArea"></textarea>
    <button id="buttonCrea">Aggiungi</button> */
}
let wrapper = document.querySelector("#wrapper");
let titolo = document.querySelector("#inputTitolo");
let textArea = document.querySelector("#inputTextArea");
let bottoneCrea = document.querySelector("#buttonCrea");

bottoneCrea.addEventListener("click", () => {
  let nuovoDiv = document.createElement("div");

  if (titolo.value == "" || textArea.value == "") {
    alert("Compila tutti i campi");
    titolo.value = "";
    textArea.value = "";
  } else {
    nuovoDiv.innerHTML = `
    <h1>${titolo.value}</h1>
    <p>${textArea.value}</p>
    `;
    wrapper.appendChild(nuovoDiv);
    titolo.value = "";
    textArea.value = "";
  }
});
