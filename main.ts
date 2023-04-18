input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("smile")
})
radio.onReceivedString(function (receivedString) {
    let sad = 0
    basic.showIcon(IconNames.Happy)
    if (sad) {
        basic.clearScreen()
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendString("sad")
})
radio.setGroup(69)
basic.forever(function () {
	
})
