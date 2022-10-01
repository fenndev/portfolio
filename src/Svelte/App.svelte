<script lang='ts'>
    import Router from 'svelte-spa-router';
    import routes from '../routes';
</script>

<main>
    <Router {routes}/>
</main>

<style lang="scss">
    @import '../global.scss';
    main {
        padding: 5vh 30%;
    }

    @media only screen and (max-width: 600px) {
        main {
            padding: 10%;
        }
    }
</style>