import React from "react";



function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="App-header">
          <p>
          Copyright ⓒ <a href="https://carmenmihaela.com/" target="_blank" rel="noopener noreferrer">Carmen</a> {year}
          </p>
          
        </footer>
    )
}



export default Footer