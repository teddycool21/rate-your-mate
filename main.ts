input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . # # # #
            . . . . #
            . . # # #
            . . . . .
            . . # . .
            `)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
    }
    rating = randint(0, 100)
    basic.showNumber(rating)
    basic.pause(1000)
    if (rating > 75) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        if (rating < 25) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        } else {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
                `)
        }
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # . # .
        . . . . .
        `)
})
let rating = 0
basic.showLeds(`
    . . . . .
    . # . # .
    # . . . #
    . # . # .
    . . . . .
    `)
