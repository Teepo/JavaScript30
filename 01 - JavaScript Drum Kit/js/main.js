class Drum {

    /**
     * @param uint keyCode
     *
     *
     */
    constructor(keyCode) {

        let $audio = document.querySelector('audio[data-key="' + keyCode + '"]');
        let $dom   = document.querySelector('.key[data-key="' + keyCode + '"]');

        if ($audio === null)
            return false;

        $dom.classList.add('playing');
        $audio.addEventListener('ended', () => {
            $dom.classList.remove('playing');
        });

        $audio.currentTime = 0;
        $audio.play();
    }
}

(function() {

    window.addEventListener('keydown', e => {

        new Drum(e.keyCode);
    });
}());