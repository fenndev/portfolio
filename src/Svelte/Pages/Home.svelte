<script lang="ts">
    import Intro from '../Components/Intro.svelte';
    import NavButtons from '../Components/NavButtons.svelte';
</script>

<div class="intro">
    <Intro/>
    <NavButtons />
</div>

<style lang='scss'>
    @media (min-width: 768px) {
        .intro {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
    }
</style>