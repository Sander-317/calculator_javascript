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

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {

    }


}



const numberButtons = document.querySelectorAll(".calculator__buttons__number")
const operationButtons = document.querySelectorAll(".calculator__buttons__operator")
const equalsButton = document.querySelector(".calculator__buttons__equals")
const deleteButton = document.querySelector(".calculator__buttons__del")
const allClearButton = document.querySelector(".calculator__buttons__all-clear")
const previousOperandTextElement = document.querySelector(".calculator__output__previous-operand")
const currentOperandTextElement = document.querySelector(".calculator__output__current-operand")