const t={buttonStart:document.querySelector("button[data-start]"),buttonStop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};t.buttonStart.addEventListener("click",(function(){t.buttonStart.setAttribute("disabled",!0),t.buttonStop.removeAttribute("disabled"),e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.buttonStop.addEventListener("click",(function(){t.buttonStop.setAttribute("disabled",!0),t.buttonStart.removeAttribute("disabled"),clearInterval(e)}));let e=null;
//# sourceMappingURL=01-color-switcher.44e01a50.js.map