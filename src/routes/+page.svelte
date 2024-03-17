<script>
	import Hero from "$lib/components/Hero.svelte";
	import Inquiry from "$lib/components/Inquiry.svelte";
	import Projects from "$lib/components/Projects.svelte";
	export let data;
</script>

<Hero></Hero>
<Projects></Projects>
<Inquiry {data}></Inquiry>