const WHITE_KEYS = ['z','x','c','v','b','n','m']
const BLACK_KEYS = ['s','d','g','h','j']


const keys = document.querySelectorAll('.key');
// const volumeSlider = document.getElementById(". column volume-slider"),


keys.forEach((key, index) => {
    key.addEventListener('click', () => playNote(key))
    
    });

    // const handleVolume = (e) => {
    //     audio.volume = e.target.value; // passing the range slider value as an audio volume
    // }
    document.addEventListener('keydown', e => {
        if (e.repeat) return
        const key = e.key
        const whiteKeyIndex = WHITE_KEYS.indexOf(key)
        const blackKeyIndex = BLACK_KEYS.indexOf(key)
        if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
        if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
    })
    function playNote(key) {
        const noteAudio = document.getElementById(key.dataset.note)
        noteAudio.currentTime = 0
        noteAudio.play()
        key.classList.add('active')
        noteAudio.addEventListener('ended', ()=> {
            key.classList.remove('active')
        })
    }

