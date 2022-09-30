<h1><span id="dollar">$</span>: fenndev --info</h1>
<h2>Hi, my name's Fenn.</h2>
<h3>I'm a full-stack software developer with a passion for learning and
    continuous improvement.<span id="blink">_</span>
</h3>

<style lang="scss">
    @import '../../global.scss';

    h1 {
        font-family: $font-main-bold;
    }
    h2, h3 {
        font-family: $font-main;
    }

    #dollar {
        color: $color-mint;
    }

    #blink {
        animation: blink 0.5s infinite;
    }
    @keyframes blink {
        0%, 100% { opacity: 0; }
        50% { opacity: 1; }
    }
</style>