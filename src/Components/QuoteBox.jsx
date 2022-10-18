import React from "react";
import '../StyleSheets/QuoteBox.css';
import ButtonsSocialMedia from "./SocialMediaButtons";


function QuoteBox() {

  const colors = [
    '#CF0A0A',
    '#00ABB3',
    '#425F57',
    '#256D85',
    '#42855B',
    '#7DCE13',
    '#B2A4FF',
    '#0078AA',
    '#CCD6A6',
    '#ABC9FF',
    '#F7EC09',
    '#371B58',
  ]

  const Data = () =>{
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then((response) => response.json())
    .then((json) => console.log(json.quotes.length))
  }

  return(
    <div id="quote-box">
      <h1 id="text">“Un hombre que se atreve a perder una hora no ha descubierto el valor de la vida”</h1>
      <p id="author">Charles Darwin</p>
      <div id="Buttons">
        <ButtonsSocialMedia />
        <button id="new-quote" onClick={Data}>New quote</button>
      </div>
    </div>
  )
}

export default QuoteBox;