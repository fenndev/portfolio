<script lang="ts">

</script>

<header>
    <h1><span id="dollar">$</span>: fenndev --work</h1>
    <h2>Below you'll find some samples of work and projects that I've done.</h2>
    <p>I look forward to adding many more projects and examples to this space in the future!<span id="blink">_</span>
    </p>
</header>
<section>
    <article id='une'>
        <img src="" alt="A preview of the UNE homepage.">
        <div>
            <h3>United Nations of Earth</h3>
            <p>A webpage for the United Nations of Earth, a fictional government from the video game Stellaris. Made following the <a href="https://www.un.org/styleguide">United Nations web style guide.</a></p>
        </div>
        <a href="http://">Live Site</a>
        <a href="http://">GitHub</a>
    </article>
    <article id='todah'>
        <img src="" alt="A preview of the To-Dah! app.">
        <div>
            <h3>To-Dah!</h3>
            <p>A to-do list application made with vanilla Javascript.</p>
        </div>
        <a href="http://">Live Site</a>
        <a href="http://">GitHub</a>
    </article>
    <article id='une'>
        <img src="" alt="A preview of the weather.ly app.">
        <div>
            <h3>weather.ly</h3>
            <p>A web-based weather application.</p>
        </div>
        <a href="http://">Live Site</a>
        <a href="http://">GitHub</a>
    </article>
    <article id='etch-a-sketch'>
        <img src="" alt="A preview of my Etch-a-Sketch application.">
        <div>
            <h3>Etch-a-Sketch</h3>
            <p>An Etch-a-Sketch application written in vanilla HTML, CSS, and Javascript.</p>
        </div>
        <a href="https://fenndev.github.io/etch-a-sketch/">Live Site</a>
        <a href="https://github.com/fenndev/etch-a-sketch">GitHub</a>
    </article>
    <article id='dovey'>
        <img src="" alt="A preview of a website made for a Twitch streamer.">
        <div>
            <h3>Clockwork Dovey</h3>
            <p>A webpage made for a Twitch streamer.</p>
        </div>
        <a href="https://fenndev.github.io/dovey-site/">Live Site</a>
        <a href="https://github.com/fenndev/dovey-site">GitHub</a>
    </article>
    <article id='strange'>
        <img src="" alt="A preview of an online card game site.">
        <div>
            <h3>Strangers: The Card Game</h3>
            <p>A website hosting a card game that I designed and programmed, with Stable Diffusion and Midjourney helping to create the illustrations.</p>
        </div>
        <a href="http://">Live Site</a>
        <a href="https://github.com/fenndev/card-test">GitHub</a>
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

    section {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(max(25%, 10rem), 1fr));
        justify-items: center;
        row-gap: 4rem;
        column-gap: 4rem;
    }
</style>