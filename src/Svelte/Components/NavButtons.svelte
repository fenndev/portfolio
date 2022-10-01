<script lang='ts'>
    import {link} from 'svelte-spa-router';
</script>

<nav>
    <a href="/work" use:link>See my work</a>
    <a href="mailto:contact@fenndev.io">Get in Touch</a>
    <a href="/resume" use:link>Resume</a>
    <a href="https://github.com/fenndev">Github</a>
    <a href="https://www.linkedin.com/in/fenndev/">LinkedIn</a>
</nav>

<style lang="scss">
    @import '../../global.scss';

    nav {
        display: flex;
        flex-direction: row;
        min-width: 70%;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        gap: 1rem;
        flex-wrap: wrap;
        flex-shrink: 1;
    }

    a {
        font-family: $font-main;
        font-size: 1.2rem;
        color: $color-black;
        text-decoration: none;
        padding: 0.75rem;
        border: 4px solid $color-black;
        border-radius: 15px;
        width: 10rem;
        text-align: center;
    }

    a:hover {
        background-color: $color-mint;
    }
</style>