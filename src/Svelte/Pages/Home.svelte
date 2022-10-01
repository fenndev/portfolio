<script lang="ts">
    import {link} from 'svelte-spa-router';
</script>


<header>
    <h1><span id="dollar">$</span>: fenndev --info</h1>
    <h2>Hi, my name's Fenn.</h2>
    <p>I'm a full-stack software developer with a passion 
        for learning and continuous improvement.<span id="blink">_</span>
    </p>
</header>
<nav>
    <a href="/work" use:link>See my work</a>
    <a href="mailto:contact@fenndev.io">Get in Touch</a>
    <a href="/resume" use:link>Resume</a>
    <a href="https://github.com/fenndev">Github</a>
    <a href="https://www.linkedin.com/in/fenndev/">LinkedIn</a>
</nav>

<style lang="scss">
    @import '../../global.scss';
    
    h1, h2, p {
        max-width: 40ch;
    }

    h1 {
        font-family: $font-main-bold;
    }
     h2, p, a {
        font-family: $font-main;
     }

     nav {
        margin-top: 5vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 2rem;
        a {
            text-align: center;
            flex: 1 1 10rem;
            padding: 1.5rem;
            border-radius: 10px;
            border: 4px solid $color-black;
            color: $color-black;
            text-decoration: none;
        }
     }
</style>