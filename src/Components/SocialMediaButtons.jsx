import React from "react";
import {VscTwitter} from 'react-icons/vsc'
import {FaTumblr} from 'react-icons/fa'
import '../StyleSheets/SocialMediaButton.css'


function ButtonsSocialMedia() {
  return(
    <div id="buttons-container">

        <a href="https://twitter.com/intent/tweet" 
          id="tweet-quote" >
          <VscTwitter/>
        </a>

      <div className="Button">
        <a href="https://www.tumblr.com/login?redirect_to=https%3A%2F%2Fwww.tumblr.com%2Fwidgets%2Fshare%2Ftool%3Fposttype%3Dquote%26tags%3Dquotes%252Cfreecodecamp%26caption%3DGrandma%2BMoses%26content%3DLife%2Bis%2Bwhat%2Bwe%2Bmake%2Bit%252C%2Balways%2Bhas%2Bbeen%252C%2Balways%2Bwill%2Bbe.%26canonicalUrl%3Dhttps%253A%252F%252Fwww.tumblr.com%252Fbuttons%26shareSource%3Dtumblr_share_button" 
          id="tumblr-quote">
          <FaTumblr/>
        </a>
      </div>

    </div>
    
  )
}

export default ButtonsSocialMedia;