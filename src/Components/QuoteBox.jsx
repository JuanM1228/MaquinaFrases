import React from "react";
import '../StyleSheets/QuoteBox.css';
import ButtonsSocialMedia from "./SocialMediaButtons";


function QuoteBox() {
  return(
    <div id="quote-box">
      <h1 id="text">“Un hombre que se atreve a perder una hora no ha descubierto el valor de la vida” asd asd asd asd asd asd asd</h1>
      <p id="author">Charles Darwin</p>
      <div id="Buttons">
        <ButtonsSocialMedia />
        <button id="new-quote">New quote</button>
      </div>
    </div>
  )
}

export default QuoteBox;