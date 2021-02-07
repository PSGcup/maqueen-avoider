let strip: neopixel.Strip = null
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) >= 11) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB_RGB)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        strip.show()
    } else if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 10) {
        strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB_RGB)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 35)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 25)
        basic.pause(500)
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
