<script lang="ts">
    import { modeStore } from "$lib/stores/modes";
    import DefilementElement from "$lib/components/DefilementElement.svelte";
    $: mode = $modeStore; // "design" | "dev"

    const row1 = [
        { src: "../lib/assets/html5-original", alt: "HTML5" },
        { src: "/icons/svg/css3.svg", alt: "CSS3" },
        { src: "/icons/svg/javascript.svg", alt: "JavaScript" },
    ];
</script>

{#if mode === "design"}

<section class="relative w-full min-h-[140vh]  py-16">

    <div class="mx-auto">
        <h1 class="text-6xl font-extrabold text-[#BFA1DB] text-center">SKILLS</h1>

        <h2 class="text-center font-bold text-3xl mt-10">HARD SKILLS</h2>
        <div class="mt-14 p-30 bg-gradient-to-b from-[#A0D5FD] to-[#BFA1DB] blur-3xl">

            <!-- ➜ ici tes 2 lignes de logos défilants gauche→droite / droite→gauche -->
        </div>

        <h2 class="text-center font-bold text-3xl mt-10 ">SOFT SKILLS</h2>
        <div class="mt-24 p-30 bg-gradient-to-b from-[#E29D88] to-[#BFA1DB] blur-3xl">

            <!-- ➜ ici ton autre défilement -->
        </div>

        <h2 class="text-center font-bold text-2xl mt-10 ">USEFUL SOFTWARE</h2>
        <div class="mt-24 p-40 borderbg-[#0A0A0A]">

            <!-- ➜ ici ton rendu pour Notion / Miro / Dribbble, etc. -->
        </div>
    </div>


</section>

{:else}

    <section class="relative w-full min-h-[140vh]  py-16">

        <div class="mx-auto">
            <h1 class="text-6xl font-extrabold text-[#BFA1DB] text-center">SKILLS</h1>

            <h2 class="text-center font-bold text-3xl mt-10">HARD SKILLS</h2>
            <div class="mt-14 p-30 bg-gradient-to-b from-[#A0D5FD] to-[#BFA1DB] blur-3xl">

                <!-- ➜ ici tes 2 lignes de logos défilants gauche→droite / droite→gauche -->
            </div>

            <h2 class="text-center font-bold text-3xl mt-10 ">SOFT SKILLS</h2>
            <div class="mt-24 p-30 bg-gradient-to-b from-[#E29D88] to-[#BFA1DB] blur-3xl">

                <!-- ➜ ici ton autre défilement -->
            </div>

            <h2 class="text-center font-bold text-2xl mt-10 ">USEFUL SOFTWARE</h2>
            <div class="mt-24 p-40 borderbg-[#0A0A0A]">

                <!-- ➜ ici ton rendu pour Notion / Miro / Dribbble, etc. -->
            </div>
        </div>


    </section>

{/if}