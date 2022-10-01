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