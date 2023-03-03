import React from 'react'
import "../NavBar/NavBar.css";

export const NavBar = () => {
  return (
    <>
            <a href="https://front.codes/" class="logo" target="_blank">
		        <img src="#" alt=""/>
	        </a>
            <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	        <label for="menu-icon"></label>
  	        <nav class="nav"> 		
  		        <ul class="pt-5">
  			        <li><a href="#">Inicio</a></li>
  			        <li><a href="#">Nike</a></li>
  			        <li><a href="#">Adidas</a></li>
  			        <li><a href="#">Camisetas</a></li>
  			        <li><a href="#">Pelotas</a></li>
  		        </ul>
  	        </nav>
   </>        
  )
}


