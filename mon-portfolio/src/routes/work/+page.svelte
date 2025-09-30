<script lang="ts">
    import { modeStore } from "$lib/stores/modes";
    import ProjectCase from "$lib/components/ProjectCase.svelte";
    $: mode = $modeStore; // "design" | "dev"
</script>

{#if mode === "design"}
    <!-- MODE DESIGN : fond noir (#0A0A0A), cartes avec ton “rose” -->
    <section class="w-full px-6 py-14 md:py-20" style="background:#0A0A0A;">
        <div class="mx-auto max-w-5xl">
            <h1 class="text-4xl md:text-5xl font-extrabold mb-2" style="color:#EFE6E3">Work</h1>
            <p class="mb-10 md:mb-12 text-sm md:text-base" style="color:rgba(239,230,227,.75)">
                Voici quelques projets Dev (aperçus vidéo + détails).
            </p>

            <div class="flex flex-col gap-10">
                <ProjectCase
                        tone="design"
                        title="EcoDeli — plateforme franchises"
                        summary="Front SvelteKit + API Node/Express, MySQL. Auth, CRUD, dashboard."
                        srcMp4="/videos/tuto.mp4"
                        poster="/images/ecodeli-poster.jpg"
                        technologies={["SvelteKit","Node","MySQL","Docker"]}
                        duration="1 mois"
                        role="Front + API"
                        year="2025"
                        githubUrl="https://github.com/jadekeina/DRIVN_COOK"
                />

                <ProjectCase
                        tone="design"
                        title="Driv’n Cook — réservation foodtrucks"
                        summary="UI responsive, gestion de créneaux, intégration API sandbox."
                        srcMp4="/videos/tuto.mp4"
                        poster="/images/drivncook-poster.jpg"
                        technologies={["UI","Formulaires","Fetch API"]}
                        duration="1 semaine"
                        role="Front"
                        year="2025"
                        githubUrl="https://github.com/…"
                />
            </div>
        </div>
    </section>
{:else}
    <!-- MODE DEV : fond beige (#EFE6E3), cartes ‘papier’ -->
    <section class="w-full px-6 py-14 md:py-20" style="background:#EFE6E3;">
        <div class="mx-auto max-w-5xl">
            <h1 class="text-4xl md:text-5xl font-extrabold mb-2" style="color:#0A0A0A">Work</h1>
            <p class="mb-10 md:mb-12 text-sm md:text-base" style="color:rgba(10,10,10,.7)">
                Voici quelques projets Dev (aperçus vidéo + détails).
            </p>

            <div class="flex flex-col gap-10">
                <ProjectCase
                        tone="dev"
                        title="EcoDeli — plateforme franchises"
                        summary="Front SvelteKit + API Node/Express, MySQL. Auth, CRUD, dashboard."
                        srcMp4="/videos/tuto.mp4"
                        poster="/images/ecodeli-poster.jpg"
                        technologies={["SvelteKit","Node","MySQL","Docker"]}
                        duration="1 mois"
                        role="Front + API"
                        year="2025"
                        githubUrl="https://github.com/jadekeina/ECODELI"
                />

                <ProjectCase
                        tone="dev"
                        title="Driv’n Cook — réservation foodtrucks"
                        summary="UI responsive, gestion de créneaux, intégration API sandbox."
                        srcMp4="/videos/tuto.mp4"
                        poster="/images/drivncook-poster.jpg"
                        technologies={["UI","Formulaires","Fetch API"]}
                        duration="1 semaine"
                        role="Front"
                        year="2025"
                        githubUrl="https://github.com/jadekeina/DRIVN_COOK"
                />
            </div>
        </div>
    </section>
{/if}
