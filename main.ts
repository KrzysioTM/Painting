let y1 = 0
input.onButtonPressed(Button.A, function () {
    y1 += 1
})
input.onButtonPressed(Button.AB, function () {
    y1 += 2
})
input.onButtonPressed(Button.B, function () {
    y1 += -1
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
basic.forever(function () {
    if (y1 == 1) {
        led.plot(0, 0)
    }
    if (y1 == 2) {
        led.plot(0, 1)
    }
    if (y1 == 3) {
        led.plot(0, 2)
    }
    if (y1 == 4) {
        led.plot(0, 3)
    }
    if (y1 == 5) {
        led.plot(0, 4)
    }
})
basic.forever(function () {
    if (y1 == -5) {
        led.unplot(0, 4)
    }
    if (y1 == -4) {
        led.unplot(0, 3)
    }
    if (y1 == -3) {
        led.unplot(0, 2)
    }
    if (y1 == -2) {
        led.unplot(0, 1)
    }
    if (y1 == -1) {
        led.unplot(0, 0)
    }
})
