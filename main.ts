input.onButtonPressed(Button.A, function () {
    if (faze == 0) {
        nombre_1 += 1
        basic.showNumber(nombre_1)
    }
    if (faze == 1) {
        nombre_2 += 1
        basic.showNumber(nombre_2)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    faze += 1
    if (faze == 2) {
        basic.showNumber(nombre_1 + nombre_2)
    }
})
let faze = 0
let nombre_2 = 0
let nombre_1 = 0
nombre_1 = 0
nombre_2 = 0
faze = 0
basic.forever(function () {
	
})
