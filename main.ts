radio.onReceivedNumber(function (receivedNumber) {
    serial.writeValue("z", radio.receivedPacket(RadioPacketProperty.SignalStrength))
    basic.pause(1000)
    led.plot(input.runningTime(), radio.receivedPacket(RadioPacketProperty.SignalStrength))
})
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0)
})
