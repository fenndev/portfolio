<script lang="ts">

</script>

<header>
    <h1><span id="dollar">$</span>: fenndev --work</h1>
    <h2>Below you'll find some samples of work and projects that I've done.</h2>
    <p>I look forward to adding many more projects and examples to this space in the future!<span id="blink">_</span>
    </p>
</header>
<section>
    <article>
        <div>
            <h3>United Nations of Earth</h3>
            <p>A webpage for the United Nations of Earth, a fictional government from the video game Stellaris. Made following the <a href="https://www.un.org/styleguide">United Nations web style guide.</a></p>
        </div>
        <a class="link-button" href="http://">Live Site</a>
        <a class="link-button" href="http://">GitHub</a>
    </article>
    <article>
        <div>
            <h3>To-Dah!</h3>
            <p>A to-do list application made with vanilla Javascript.</p>
        </div>
        <a class="link-button" href="http://">Live Site</a>
        <a class="link-button" href="http://">GitHub</a>
    </article>
    <article>
        <div>
            <h3>weather.ly</h3>
            <p>A web-based weather application.</p>
        </div>
        <a class="link-button" href="http://">Live Site</a>
        <a class="link-button" href="http://">GitHub</a>
    </article>
    <article>
        <div>
            <h3>Etch-a-Sketch</h3>
            <p>An Etch-a-Sketch application written in vanilla HTML, CSS, and Javascript.</p>
        </div>
        <a class="link-button" href="https://fenndev.github.io/etch-a-sketch/">Live Site</a>
        <a class="link-button" href="https://github.com/fenndev/etch-a-sketch">GitHub</a>
    </article>
</section>

<style lang="scss">
    @import '../../global.scss';

    h1, h2, p {
        max-width: 40ch;
    }

    h1 {
        font-family: $font-main-bold;
    }
    h2, h3, p, a, img {
        font-family: $font-main;
    }

    section, footer {
        margin-top: 5vh;
    }

    article {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        .link-button {
            text-align: center;
            padding: .5rem;
            border-radius: 10px;
            border: 4px solid $color-black;
            color: $color-black;
            text-decoration: none;
        }
        .link-button:hover {
            border-color: $color-mint;
            color: $color-mint;
        }
    }

    section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(max(25%, 10rem), 1fr));
        justify-items: center;
        row-gap: 4rem;
        column-gap: 4rem;
    }
</style>