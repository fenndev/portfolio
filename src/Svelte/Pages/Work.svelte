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
        <img src="" alt="A preview of the UNE homepage.">
        <div>
            <h3>United Nations of Earth</h3>
            <p>A webpage for the United Nations of Earth, a fictional government from the video game Stellaris. Made following the <a href="https://www.un.org/styleguide">United Nations web style guide.</a></p>
        </div>
        <a href="http://">Live Site</a>
        <a href="http://">GitHub</a>
    </article>
    <article id='une'>
        <img src="" alt="A preview of the UNE homepage.">
        <div>
            <h3>United Nations of Earth</h3>
            <p>A webpage for the United Nations of Earth, a fictional government from the video game Stellaris. Made following the <a href="https://www.un.org/styleguide">United Nations web style guide.</a></p>
        </div>
        <a href="http://">Live Site</a>
        <a href="http://">GitHub</a>
    </article>
    <article id='une'>
        <img src="" alt="A preview of the UNE homepage.">
        <div>
            <h3>United Nations of Earth</h3>
            <p>A webpage for the United Nations of Earth, a fictional government from the video game Stellaris. Made following the <a href="https://www.un.org/styleguide">United Nations web style guide.</a></p>
        </div>
        <a href="http://">Live Site</a>
        <a href="http://">GitHub</a>
    </article>
    <article id='une'>
        <img src="" alt="A preview of the UNE homepage.">
        <div>
            <h3>United Nations of Earth</h3>
            <p>A webpage for the United Nations of Earth, a fictional government from the video game Stellaris. Made following the <a href="https://www.un.org/styleguide">United Nations web style guide.</a></p>
        </div>
        <a href="http://">Live Site</a>
        <a href="http://">GitHub</a>
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
        grid-template-columns: repeat(auto-fit, minmax(max(33%, 15rem), 1fr));
        justify-items: center;
        row-gap: 4rem;
    }
</style>