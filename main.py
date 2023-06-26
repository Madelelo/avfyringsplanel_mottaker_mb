def on_received_number(receivedNumber):
    pins.digital_write_pin(DigitalPin.P0, receivedNumber)
    basic.show_icon(IconNames.HAPPY)
    basic.pause(2000)
    pins.digital_write_pin(DigitalPin.P0, 0)
radio.on_received_number(on_received_number)

radio.set_group(12)
basic.show_icon(IconNames.YES)