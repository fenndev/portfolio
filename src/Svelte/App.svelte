<script lang='ts'>
    import Router from 'svelte-spa-router';
    import routes from '../routes';
</script>

<main>
    <Router {routes}/>
</main>

<style lang="scss">
    main {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
    @media (min-width: 768px) {
        main {
            align-items: center;
            justify-content: center;
        }
    }
    
</style>