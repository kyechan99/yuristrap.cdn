var checkbox=document.querySelector("input[name=mode]");"dark"===localStorage.toggled&&(document.documentElement.setAttribute("data-theme","dark"),checkbox.checked=!0),checkbox.addEventListener("change",function(){this.checked?(trans(),document.documentElement.setAttribute("data-theme","dark"),localStorage.toggled="dark"):(trans(),document.documentElement.setAttribute("data-theme","light"),localStorage.toggled="")});let trans=()=>{document.documentElement.classList.add("transition"),window.setTimeout(()=>{document.documentElement.classList.remove("transition")},100)};