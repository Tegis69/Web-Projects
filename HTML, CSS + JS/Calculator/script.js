class Calculator {
    constructor(previousOpText, currentOpText) {
        this.currentOpText = currentOpText;
        this.previousOpText = previousOpText;
        this.clear();
    }

    clear() {
        this.currentOp = '';
        this.previousOp = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOp = this.currentOp.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === '.' && this.currentOp.includes('.')) return;
        this.currentOp = this.currentOp.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOp === '') return;
        if (this.previousOp !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOp = this.currentOp;
        this.currentOp = '';

    }

    compute() {
        let computation;
        const current = parseFloat(this.currentOp);
        const prev = parseFloat(this.previousOp);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current
                break;
            case '-':
                computation = prev - current
                break;
            case '÷':
                computation = prev / current
                break;
            case '*':
                computation = prev * current
                break;
            default:
                return;
        }
        this.currentOp = computation;
        this.operation = undefined;
        this.previousOp = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const intigerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let intigerDisplay
        if (isNaN(intigerDigits)) {
            intigerDisplay = ''
        } else {
            intigerDisplay = intigerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${intigerDisplay}.${decimalDigits}`
        } else {
            return intigerDisplay
        }
    }

    updateDisplay() {
        this.currentOpText.innerText = this.getDisplayNumber(this.currentOp);
        if (this.operation != null) {
            this.previousOpText.innerText =
                `${this.getDisplayNumber(this.previousOp)} ${this.operation} `
        } else {
            this.previousOpText.innerText = '';
        }

    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const AllClearButton = document.querySelector('[data-all-clear]')
const previousOpText = document.querySelector('[data-previous-op]')
const currentOpText = document.querySelector('[data-current-op]')

const calculator = new Calculator(previousOpText, currentOpText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
})

AllClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
})