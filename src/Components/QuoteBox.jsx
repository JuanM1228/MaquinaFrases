import React from "react";
import { useState } from 'react';
import '../StyleSheets/QuoteBox.css';
import ButtonsSocialMedia from "./SocialMediaButtons";


function QuoteBox() {
  let [colorSelected, setColorSelected] = useState('#CF0A0A');
  let [phraseSelected, setPhraseSelected] = useState('Un hombre que se atreve a perder una hora no ha descubierto el valor de la vida');
  let [author, setAuthor] = useState('Charles Darwin');
 
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
    '#E14D2A',
    '#001253',
    '#371B58',
  ]
 
  const Data = () =>{
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then((response) => response.json())
    .then((json) => {
      const lengthJson = json.quotes.length + 1
      phraseSelected = json.quotes[Math.floor(Math.random() * lengthJson)].quote
      author = json.quotes[Math.floor(Math.random() * lengthJson)].author
      const indexColorSelected = Math.floor(Math.random() * 12)
      colorSelected = colors[indexColorSelected]
      document.body.style.background = colorSelected
      setColorSelected(colorSelected)
      setPhraseSelected(phraseSelected)
      setAuthor(author)
    })
  }
  
  return(
    <div id="quote-box">
      <h1 id="text" style={{color:colorSelected}}>{phraseSelected}</h1>
      <p id="author" style={{color:colorSelected}} >{author}</p>
      <div id="Buttons">
        <ButtonsSocialMedia style = {colorSelected}/>
        <button id="new-quote" onClick={Data} style= {{backgroundColor: colorSelected}}>New quote</button>
      </div>
    </div>
  )
}

export default QuoteBox;