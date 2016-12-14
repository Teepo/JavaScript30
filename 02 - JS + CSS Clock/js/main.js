(function() {

    const $s = document.querySelector('.second-hand');
    const $m = document.querySelector('.min-hand');
    const $h = document.querySelector('.hour-hand');

    const $sn = document.querySelector('.clock-numeric-item.s');
    const $mn = document.querySelector('.clock-numeric-item.m');
    const $hn = document.querySelector('.clock-numeric-item.h');

    setInterval(() => {

        let now = new Date();

        let sec  = now.getSeconds();
        let min  = now.getMinutes();
        let hour = now.getHours();

        let sDeg = (((sec * 360) / 60) + 90);
        let mDeg = (((min * 360) / 60) + 90);
        let hDeg = ((((hour * 90) / 360) * 120) + 90);

        $s.style.transform = "rotate(" + sDeg + "deg)";
        $m.style.transform = "rotate(" + mDeg + "deg)";
        $h.style.transform = "rotate(" + hDeg + "deg)";

        $sn.textContent = sec;
        $mn.textContent = min;
        $hn.textContent = hour;

    }, 60);

}());