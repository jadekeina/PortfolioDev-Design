<script lang="ts">

    import About from "../lib/section/about.svelte"
    import Contact from "../lib/section/contact.svelte"
    import Experiences from "../lib/section/experiences.svelte"
    import Hero from "../lib/section/hero.svelte"
    import Skills from "../lib/section/skills.svelte"
	import Work from "$lib/section/work.svelte";


</script>
<section id="hero"> <Hero/></section>
<section id="about"> <About/></section>
<section id="experiences"> <Experiences/></section>
<section id="work"> <Work></Work></section>
<section id="skills"> <Skills/></section>
<section id="contact"> <Contact/></section>

