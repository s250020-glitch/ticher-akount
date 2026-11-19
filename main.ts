music.play(music.tonePlayable(6500, music.beat(BeatFraction.Quarter)), music.PlaybackMode.LoopingInBackground)
basic.forever(function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 450), music.PlaybackMode.LoopingInBackground)
})
basic.forever(function () {
    music.changeTempoBy(25)
})
