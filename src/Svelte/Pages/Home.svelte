<script lang="ts">
    import {link} from 'svelte-spa-router';
    let svgFolder = '../../../public/icons/'
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
<section>
    <h3>Technology Experience</h3>
    <div class="image-grid">
        <img src="{svgFolder}/html5.svg" alt="">
        <img src="{svgFolder}/css.svg" alt="">
        <img src="{svgFolder}/javascript.svg" alt="">
        <img src="{svgFolder}/csharp.svg" alt="">
        <img src="{svgFolder}/react.svg" alt="">
        <img src="{svgFolder}/svelte.svg" alt="">
        <img src="{svgFolder}/vue.svg" alt="">
        <img src="{svgFolder}/mongodb.svg" alt="">
        <img src="{svgFolder}/typescript.svg" alt="">
        <img src="{svgFolder}/jest.svg" alt="">
        <img src="{svgFolder}/unity.svg" alt="">
        <img src="{svgFolder}/sass.svg" alt="">
        <img src="{svgFolder}/webpack.svg" alt="">
        <img src="{svgFolder}/electron.svg" alt="">
        <img src="{svgFolder}/nodejs.svg" alt="">
        <img src="{svgFolder}/git.svg" alt="">
    </div>
</section>
<footer>
    <p>© 2022 fenndev. All rights reserved.</p>
</footer>


<style lang="scss">
    @import '../../global.scss';
    
    h1, h2, p {
        max-width: 40ch;
    }

    h1 {
        font-family: $font-main-bold;
    }
    h2, h3, p, a {
        font-family: $font-main;
    }

    nav, section, footer, .image-grid {
        margin-top: 5vh;
    }

    nav {
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
        a:hover {
            border-color: $color-mint;
            color: $color-mint;
        }
     }

     section {
        text-align: center;

        h3 {
            font-size: 1.4rem;
        }
     }

     .image-grid {
        display: grid;
        //grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
        grid-template-columns: repeat(auto-fit, minmax(max(25%, 10rem), 1fr));
        justify-items: center;
        row-gap: 4rem;
     }

     footer {
        display: flex;
        justify-content: center;
        p {
            text-align: center;
            font-size: 0.8rem;
        }
     }
</style>