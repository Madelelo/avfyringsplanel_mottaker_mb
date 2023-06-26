radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    pins.digitalWritePin(DigitalPin.P0, receivedNumber)
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
    pins.digitalWritePin(DigitalPin.P0, 0)
})
radio.setGroup(12)
basic.showIcon(IconNames.Yes)
