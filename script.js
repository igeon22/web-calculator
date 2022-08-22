let resultBox = document.querySelector(".calc-box")
let buttons = document.querySelectorAll(".button")
let resetButton = document.querySelector("#reset")
let equalButton = document.querySelector("#equal")
let plusButton = document.querySelector("#plus")
let  minusButton = document.querySelector("#minus")
let divideButton = document.querySelector("#divide")
let multiplyButton = document.querySelector("#multiply")
let plusMinusButton = document.querySelector("#plus-minus")

let firstPart = 0
let secondPart = 0
let result = 0
let oldResult = null
let operation = ""


function display(){
	for(let i = 0;i<buttons.length;i++){
		buttons[i].addEventListener("click",()=>{
			resultBox.textContent += buttons[i].textContent
		})
	}
}





function operate(){
	firstPart = parseFloat(firstPart)
	secondPart= parseFloat(secondPart)
	if (operation == "add"){

		result = firstPart + secondPart
	}
	else if (operation=="sub"){
		result = firstPart - secondPart
	}
	else if (operation=="div"){
		result = firstPart / secondPart
	}
	else if (operation=="mul"){
		result = firstPart * secondPart
	}

}


function reset(){
	resultBox.textContent = ""
	firstPart = 0
	secondPart = 0
	result = 0
}

resetButton.addEventListener("click",()=>{
	reset()
})

equalButton.addEventListener("click",()=>{
	secondPart = resultBox.textContent
	operate()
	resultBox.textContent = result
	
})


plusButton.addEventListener("click",()=>{
	firstPart = resultBox.textContent 
	resultBox.textContent = ""
	operation = "add"
})

minusButton.addEventListener("click",()=>{
	firstPart = resultBox.textContent 
	resultBox.textContent = ""
	operation = "sub"
})

multiplyButton.addEventListener("click",()=>{
	firstPart = resultBox.textContent 
	resultBox.textContent = ""
	operation = "mul"
})

divideButton.addEventListener("click",()=>{
	firstPart = resultBox.textContent
	resultBox.textContent = ""
	operation = "div"
})

plusMinusButton.addEventListener("click",()=>{
	resultBox.textContent = (resultBox.textContent * -1)

})

display()