let  but = document.querySelector("button")
let  inp = document.querySelector("input")
let  tasks = document.querySelector("ol")

but.addEventListener("click",()=>{
	inp = document.querySelector("input")
	let addOl = document.createElement("li")
	addOl.innerText = inp.value
	addOl.addEventListener("click",()=>{
	addOl.classList.toggle("crossed")
	})
	inp.value = " "
	inp.focus()
	tasks.appendChild(addOl)
})