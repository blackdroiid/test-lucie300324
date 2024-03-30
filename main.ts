basic.forever(function () {
    music.play(music.stringPlayable("A C5 G C5 F C5 E D ", 120), music.PlaybackMode.LoopingInBackground)
    basic.showString("Bonjour")
    basic.showString("Raphael")
    basic.showString("C’est l’heure ")
    music.play(music.stringPlayable("G F G A - F E D ", 120), music.PlaybackMode.LoopingInBackground)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showString("On cendore pas ")
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.LoopingInBackground)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        # # # # #
        `)
    basic.showString("C’est leur de décolérer ")
})
