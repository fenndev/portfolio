<script lang="ts">
    import Intro from '../Components/Intro.svelte';
    import NavButtons from '../Components/NavButtons.svelte';
</script>

<div class="intro">
    <Intro 
    command={"--info"}
    greet={"Hi, my name's Fenn."}
    details={"I'm a full-stack software developer with a passion for learning and continuous improvement."}
    />
    <NavButtons />
</div>

<style lang='scss'>
    @media (min-width: 768px) {
        :root {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .intro {
            display: flex;
            flex-direction: column;
            text-align: left;
        }
    }
</style>