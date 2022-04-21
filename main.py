def on_gesture_tilt_right():
    basic.show_string("A= nazwa B= inne")
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_button_pressed_a():
    basic.show_string("Bitylo")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    pass
basic.forever(on_forever)
