<script lang="ts">
    export let command: string;
    export let greet: string;
    export let details: string;
</script>

<h1><span id="dollar">$</span>: fenndev {command}</h1>
<p><span id='greet'>{greet}</span><br>
    {details}<span id="blink">_</span>
</p>

<style lang="scss">
    @import '../../global.scss';

    h1, p {
        max-width: 40ch;
    }

    h1 {
        font-family: $font-main-bold;
    }
    p {
        font-family: $font-main;
    }

    #greet {
        font-size: 1.5rem;
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