<script lang="ts">
    import { onMount } from "svelte";
    import { modeStore } from "$lib/stores/modes"; // 'design' | 'dev'

    type Item = {
        id: string;
        period: string;
        title: string;
        org?: string;
        location?: string;
        summary?: string;
        bullets?: string[];
        tech?: string[];
        links?: { label: string; href: string }[];
        side?: "left" | "right";
    };

    const itemsBase: Item[] = [
        {
            id: "workadventure-2025",
            period: "Janv. 2025 — Oct. 2025",
            title: "Alternance — Développeuse Full-Stack Junior",
            org: "WorkAdventure",
            summary:
                "Intégration d’un design system Svelte + Tailwind, composants réutilisables, API REST, tests E2E.",
            bullets: [
                "Refonte UI Svelte + Tailwind",
                "Composants modulaires",
                "API RESTful",
                "Tests E2E"
            ],
            tech: ["Svelte", "TypeScript", "Tailwind", "Git", "Docker", "Figma"]
        },
        {
            id: "freelance",
            period: "Projet",
            title: "Freelance Graphic Design - Developpeuse Full-Stack ",
            summary: "Réalisationn de mission en freelance ",
            bullets: [
                "Création de Logo et d'identité Visuelle",
                "Création de Flyer promotionnelle",
                "Carte De visite",
                "Refonte de site"
            ],
            tech: ["Adobe Illustrator", "Photoshop", "Figma", "VsCode", "Miro"],
        },
        {
            id: "hdmnetwork-2025",
            period: "Janv. 2025 — Oct. 2025",
            title: "Stage — Web Design / UI-UX",
            org: "HDM Network",
            summary:
                "Maquettes Figma (hi-fi), micro-itérations UX, handover propre pour dev.",
            tech: ["Figma", "Photoshop", "Illustrator"]
        },
    ];

    const items = itemsBase.map((it, i) => ({
        ...it,
        side: it.side ?? (i % 2 === 0 ? "left" : "right")
    })) as (Item & { side: "left" | "right" })[];

    // Action IntersectionObserver
    export function inview(node: HTMLElement, { threshold = 0.2, once = true } = {}) {
        const io = new IntersectionObserver(
            ([entry]) => {
                node.dataset.inview = entry.isIntersecting ? "true" : "false";
                if (once && entry.isIntersecting) io.unobserve(node);
            },
            { threshold }
        );
        io.observe(node);
        return { destroy() { io.disconnect(); } };
    }

    // Progress de la ligne centrale
    let sectionEl: HTMLElement;
    let progress = 0;
    function updateProgress() {
        if (!sectionEl) return;
        const rect = sectionEl.getBoundingClientRect();
        const total = Math.max(rect.height - window.innerHeight, 1);
        const passed = Math.min(Math.max(-rect.top, 0), total);
        progress = passed / total;
    }
    onMount(() => {
        updateProgress();
        const onScroll = () => updateProgress();
        const onResize = () => updateProgress();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
        };
    });

    $: mode = $modeStore; // 'design' | 'dev'
</script>

<section
        bind:this={sectionEl}
        class={`relative mx-auto w-full px-4 py-20
          ${mode === 'design' ? 'bg-[#0A0A0A] text-neutral-50' : 'bg-white text-[#0A0A0A]]'}`}
>
    <!-- Ligne centrale + progression -->
    <div class="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2
              bg-neutral-300/40 dark:bg-neutral-700/40">
        <div
                aria-hidden="true"
                class={`absolute left-0 top-0 w-px
              ${mode === 'design' ? 'bg-neutral-100' : 'bg-[#0A0A0A]'}`}
                style="height: {Math.round(progress * 100)}%"
        ></div>
    </div>

    <header class="mb-8 text-center">
        <h2 class="text-3xl font-semibold tracking-tight">Expériences</h2>
        <p class="mt-2 text-sm opacity-70">Alternance, stage et projets sélectionnés.</p>
    </header>

    {#each items as it, i (it.id)}
        <article
                use:inview
                data-side={it.side}
                class="
      timeline-item relative my-16 grid grid-cols-1 md:grid-cols-2 items-start
      opacity-0 translate-y-6 transition-[opacity,transform] duration-500 will-change-transform
      data-[inview=true]:opacity-100 data-[inview=true]:translate-y-0
      {it.side === 'left' ? '-translate-x-4' : 'translate-x-4'} data-[inview=true]:translate-x-0
    "
                style="transition-delay: {i * 70}ms"
        >
            <!-- Colonne GAUCHE -->
            <div class="md:pr-8">
                {#if it.side === 'left'}
                    <div class="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm text-neutral-900">
                        <h3 class="text-lg font-semibold">{it.title}</h3>
                        {#if it.org}<p class="text-sm opacity-80">{it.org}</p>{/if}
                        <p class="mt-1 text-xs uppercase tracking-wide opacity-60">{it.period}</p>

                        {#if it.summary}<p class="mt-3 text-sm leading-relaxed">{it.summary}</p>{/if}

                        {#if it.bullets?.length}
                            <ul class="mt-3 list-disc pl-5 text-sm">
                                {#each it.bullets as b}<li>{b}</li>{/each}
                            </ul>
                        {/if}

                        {#if it.tech?.length}
                            <div class="mt-3 flex flex-wrap gap-2">
                                {#each it.tech as tchip}
                                    <span class="rounded-md border border-neutral-300 px-2 py-0.5 text-xs">{tchip}</span>
                                {/each}
                            </div>
                        {/if}

                        {#if it.links?.length}
                            <div class="mt-3 flex flex-wrap gap-3">
                                {#each it.links as l}
                                    <a class="text-sm underline underline-offset-4 hover:opacity-80 decoration-neutral-300"
                                       rel="noopener" target="_blank" href={l.href}>
                                        {l.label}
                                    </a>
                                {/each}
                            </div>
                        {/if}
                    </div>
                {/if}
            </div>

            <!-- Point sur la LIGNE centrale -->
            <div aria-hidden="true"
                 class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:top-8">
                <span class="block h-3 w-3 rounded-full bg-neutral-900 ring-4 ring-white"></span>
            </div>

            <!-- Colonne DROITE -->
            <div class="md:pl-8">
                {#if it.side === 'right'}
                    <div class="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 shadow-sm text-neutral-900">
                        <h3 class="text-lg font-semibold">{it.title}</h3>
                        {#if it.org}<p class="text-sm opacity-80">{it.org}</p>{/if}
                        <p class="mt-1 text-xs uppercase tracking-wide opacity-60">{it.period}</p>

                        {#if it.summary}<p class="mt-3 text-sm leading-relaxed">{it.summary}</p>{/if}

                        {#if it.bullets?.length}
                            <ul class="mt-3 list-disc pl-5 text-sm">
                                {#each it.bullets as b}<li>{b}</li>{/each}
                            </ul>
                        {/if}

                        {#if it.tech?.length}
                            <div class="mt-3 flex flex-wrap gap-2">
                                {#each it.tech as tchip}
                                    <span class="rounded-md border border-neutral-300 px-2 py-0.5 text-xs">{tchip}</span>
                                {/each}
                            </div>
                        {/if}

                        {#if it.links?.length}
                            <div class="mt-3 flex flex-wrap gap-3">
                                {#each it.links as l}
                                    <a class="text-sm underline underline-offset-4 hover:opacity-80 decoration-neutral-300"
                                       rel="noopener" target="_blank" href={l.href}>
                                        {l.label}
                                    </a>
                                {/each}
                            </div>
                        {/if}
                    </div>
                {/if}
            </div>
        </article>
    {/each}



</section>

<style>
    @media (prefers-reduced-motion: reduce) {
        .timeline-item {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
        }
    }
</style>
