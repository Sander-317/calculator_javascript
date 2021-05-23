class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()

    }

    clear() { 
        this.currentOperand = " "
        this.previousOperand = " "
        this.operation = undefined

    }

    delete() {

    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }

    chooseOperation(operation) {
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = " "

    }

    compute() {

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand

    }


}



const numberButtons = document.querySelectorAll(".calculator__buttons__number")
const operationButtons = document.querySelectorAll(".calculator__buttons__operator")
const equalsButton = document.querySelector(".calculator__buttons__equals")
const deleteButton = document.querySelector(".calculator__buttons__del")
const allClearButton = document.querySelector(".calculator__buttons__all-clear")
const previousOperandTextElement = document.querySelector(".calculator__output__previous-operand")
const currentOperandTextElement = document.querySelector(".calculator__output__current-operand")



const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})