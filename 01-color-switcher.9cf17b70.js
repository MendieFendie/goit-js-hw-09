!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector(".buttons");n.style.position="absolute",n.style.top="50%",n.style.left="44%",t.style.textTransform="uppercase",e.style.textTransform="uppercase",t.style.fontSize="25px",e.style.fontSize="25px",t.style.padding="25px",e.style.padding="25px",t.style.marginRight="10px",t.classList.add("btn"),e.classList.add("btn");var a=null;e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,a=setInterval((function(){!function(){function t(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}document.body.style.backgroundColor=t()}()}),1e3)})),e.addEventListener("click",(function(){clearInterval(a),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.9cf17b70.js.map
