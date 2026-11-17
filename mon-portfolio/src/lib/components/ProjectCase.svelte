<script lang="ts">
    import { slide } from 'svelte/transition';

    // Media
    export let img: string = "";
    export let srcMp4: string = "";
    export let srcWebm: string = "";
    export let poster: string = "";

    // Textes
    export let title: string;
    export let summary: string = "";
    export let list: string[] = [];

    // Métadonnées
    export let technologies: string[] = [];
    export let duration: string = "";
    export let role: string = "";
    export let year: string = "";

    // Liens
    export let liveUrl: string = "";
    export let githubUrl: string = "";

    // Style
    export let tone: "dev" | "design" = "dev";

    let isHovered = false;
    let isOpen = false;
</script>

<article
        class="group relative overflow-hidden transition-all duration-500"
        style="
        border-radius: 20px;
        background: {tone === 'dev' ? 'linear-gradient(135deg, #FFFFFF 0%, #F8F6F4 100%)' : 'linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)'};
        box-shadow: {isHovered ? '0 10px 30px rgba(0,0,0,0.15)' : '0 4px 20px rgba(0,0,0,0.08)'};
        border: 1px solid {tone === 'dev' ? 'rgba(10,10,10,0.08)' : 'rgba(239,230,227,0.1)'};
    "
        on:mouseenter={() => isHovered = true}
        on:mouseleave={() => isHovered = false}
>
    <div class="relative overflow-hidden aspect-[16/9]">
        {#if srcMp4 || srcWebm}
            <video
                    class="w-full h-full object-cover transition-transform duration-700 {isHovered ? 'scale-105' : ''}"
                    autoplay loop muted playsinline {poster}
            >
                {#if srcWebm}<source src={srcWebm} type="video/webm" />{/if}
                {#if srcMp4}<source src={srcMp4} type="video/mp4" />{/if}
            </video>
        {:else if img}
            <img src={img} alt={title} class="w-full h-full object-cover transition-transform duration-700 {isHovered ? 'scale-105' : ''}" />
        {/if}

        <div class="absolute top-3 right-3 px-2 py-1 text-[10px] font-bold rounded-md bg-black/60 text-white backdrop-blur-sm">
            {year}
        </div>
    </div>

    <div class="p-5">
        <div class="flex justify-between items-start mb-2">
            <h3 class="text-xl font-bold {tone === 'dev' ? 'text-[#0A0A0A]' : 'text-[#EFE6E3]'}">{title}</h3>

            <button
                    on:click={() => isOpen = !isOpen}
                    class="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border border-current opacity-60 hover:opacity-100"
                    style="color: {tone === 'dev' ? '#6E54A3' : '#A0D5FD'}; transform: rotate({isOpen ? '180deg' : '0deg'})"
            >
                <span class="text-xl">↓</span>
            </button>
        </div>

        <p class="text-sm opacity-80 mb-4 {isOpen ? '' : 'line-clamp-2'}">
            {summary}
        </p>

        {#if isOpen}
            <div transition:slide={{ duration: 300 }} class="space-y-4 pt-2 border-t border-black/5 mt-4">
                {#if list?.length}
                    <ul class="list-disc pl-5 text-xs space-y-1 opacity-70">
                        {#each list as item}
                            <li>{item}</li>
                        {/each}
                    </ul>
                {/if}

                <div class="flex flex-wrap gap-2">
                    {#each technologies as tech}
                        <span class="px-2 py-0.5 text-[10px] font-bold rounded bg-black/5 border border-black/10">
                            {tech}
                        </span>
                    {/each}
                </div>

                <div class="flex gap-2 pt-2">
                    {#if githubUrl}
                        <a href={githubUrl} target="_blank" class="flex-1 text-center py-2 bg-[#0A0A0A] text-white text-xs rounded-lg hover:bg-gray-800 transition-colors">
                            Voir le Code
                        </a>
                    {/if}
                </div>
            </div>
        {/if}
    </div>
</article>