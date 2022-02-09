// Name and Code to Update Name
let yourName = "Edward Ziemba"
const credit = document.querySelector('#credit')
credit.textContent = `Created by ${yourName}`

// Quantity Data
let gb = 0 // Gingerbread
let cc = 0 // ChocolateChip
let sugar = 0 // Sugar Sprinkle

function sumQuantities() {
    return gb + cc + sugar
}

// UI Elements
// GingerBread Elements
let plusGbButton = document.querySelector('#add-gb')
let subtractGbButon = document.querySelector('#minus-gb')
let gbQuantityDisplay = document.querySelector('#qty-gb')

// ChocolateChip Elements
let plusCcButton = document.querySelector('#add-cc')
let subractCcButton = document.querySelector('#minus-cc')
let ccQuantityDisplay = document.querySelector('#qty-cc')

// Sugar Sprinkle Elements
let plusSugarbutton = document.querySelector('#add-sugar')
let subtractSugarButton = document.querySelector('#minus-sugar')
let sugarQuantityDisplay = document.querySelector('#qty-sugar')

// Quantity Total
let quanitiyTotalDisplay = document.querySelector('#qty-total')

// Quantity Changing Functions
function addGbQuantity() {
    gb++
    gbQuantityDisplay.textContent = gb
    quanitiyTotalDisplay.textContent = sumQuantities()
}

function minusGbQuantity() {
    if (gb <= 0) {
        return
    }
    gb--
    gbQuantityDisplay.textContent = gb
    quanitiyTotalDisplay.textContent = sumQuantities()
}

function addCcQuantity() {
    cc++
    ccQuantityDisplay.textContent = cc
    quanitiyTotalDisplay.textContent = sumQuantities()
}

function minusCcQuantity() {
    if (cc <= 0) {
        return
    }
    cc--
    ccQuantityDisplay.textContent = cc
    quanitiyTotalDisplay.textContent = sumQuantities()
}

function addSugarQuantity() {
    sugar++
    sugarQuantityDisplay.textContent = sugar
    quanitiyTotalDisplay.textContent = sumQuantities()
}

function minusSugarQuantity() {
    if (sugar <= 0) {
        return
    }
    sugar--
    sugarQuantityDisplay.textContent = sugar
    quanitiyTotalDisplay.textContent = sumQuantities()
}

// Add Event Listeners
plusGbButton.addEventListener('click', addGbQuantity)
subtractGbButon.addEventListener('click', minusGbQuantity)
plusCcButton.addEventListener('click', addCcQuantity)
subractCcButton.addEventListener('click', minusCcQuantity)
plusSugarbutton.addEventListener('click', addSugarQuantity)
subtractSugarButton.addEventListener('click', minusSugarQuantity)