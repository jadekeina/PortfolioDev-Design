<script lang="ts">
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
</script>

<article
        class="group relative overflow-hidden transition-all duration-500 hover:-translate-y-2"
        style="
        border-radius: 20px;
        background: {tone === 'dev' ? 'linear-gradient(135deg, #FFFFFF 0%, #F8F6F4 100%)' : 'linear-gradient(135deg, #2A2A2A 0%, #1A1A1A 100%)'};
        box-shadow: {tone === 'dev'
            ? '0 4px 20px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)'
            : '0 4px 20px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.3)'};
        border: 1px solid {tone === 'dev' ? 'rgba(10,10,10,0.08)' : 'rgba(239,230,227,0.1)'};
    "
        on:mouseenter={() => isHovered = true}
        on:mouseleave={() => isHovered = false}
>
    <!-- Vidéo compacte style carte -->
    <div class="relative overflow-hidden" style="border-radius: 20px 20px 0 0;">
        {#if srcMp4 || srcWebm}
            <div class="relative" style="aspect-ratio: 3/2;">
                <video
                        class="w-full h-full object-cover transition-transform duration-700"
                        class:scale-110={isHovered}
                        autoplay
                        loop
                        muted
                        playsinline
                        disablepictureinpicture
                        {poster}
                        style="pointer-events: none;"
                >
                    {#if srcWebm}<source src={srcWebm} type="video/webm" />{/if}
                    {#if srcMp4}<source src={srcMp4} type="video/mp4" />{/if}
                </video>

                <!-- Overlay gradient -->
                <div
                        class="absolute inset-0 transition-opacity duration-500"
                        style="
                        background: linear-gradient(to top, {tone === 'dev' ? '#FFFFFF' : '#1A1A1A'} 0%, transparent 50%);
                        opacity: {isHovered ? 0.6 : 0.3};
                    "
                />

                <!-- Badge année -->
                <div
                        class="absolute top-4 right-4 px-3 py-1.5 text-xs font-bold backdrop-blur-md"
                        style="
                        border-radius: 8px;
                        background: {tone === 'dev' ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.7)'};
                        color: {tone === 'dev' ? '#0A0A0A' : '#EFE6E3'};
                        border: 1px solid {tone === 'dev' ? 'rgba(10,10,10,0.1)' : 'rgba(239,230,227,0.2)'};
                    "
                >
                    {year}
                </div>
            </div>
        {:else if img}
            <div style="aspect-ratio: 3/2;">
                <img
                        src={img}
                        alt={title}
                        class="w-full h-full object-cover transition-transform duration-700"
                        class:scale-110={isHovered}
                />
            </div>
        {/if}
    </div>

    <!-- Contenu carte -->
    <div class="p-6 space-y-4">
        <!-- Titre -->
        <h3
                class="text-2xl font-bold tracking-tight leading-tight"
                style="color: {tone === 'dev' ? '#0A0A0A' : '#EFE6E3'};"
        >
            {title}
        </h3>

        <!-- Description -->
        {#if summary}
            <p
                    class="text-sm leading-relaxed line-clamp-3"
                    style="color: {tone === 'dev' ? 'rgba(10,10,10,0.7)' : 'rgba(239,230,227,0.7)'};"
            >
                {summary}
            </p>
        {/if}

        {#if list?.length}
            <ul class="mt-3 list-disc pl-5 text-sm leading-relaxed marker:text-neutral-400">
                {#each list as item}
                    <li>{item}</li>
                {/each}
            </ul>
        {/if}



        <!-- Technologies -->
        {#if technologies.length}
            <div class="flex flex-wrap gap-2">
                {#each technologies as tech}
                    <span
                            class="px-2.5 py-1 text-xs font-semibold transition-all duration-300"
                            style="
                            border-radius: 6px;
                            background: {tone === 'dev' ? 'rgba(110,84,163,0.1)' : 'rgba(160,213,253,0.15)'};
                            color: {tone === 'dev' ? '#6E54A3' : '#A0D5FD'};
                            border: 1px solid {tone === 'dev' ? 'rgba(110,84,163,0.2)' : 'rgba(160,213,253,0.3)'};
                        "
                    >
                        {tech}
                    </span>
                {/each}
            </div>
        {/if}

        <!-- Métadonnées compactes -->
        {#if duration || role}
            <div class="flex gap-4 text-xs">
                {#if duration}
                    <div style="color: {tone === 'dev' ? 'rgba(10,10,10,0.6)' : 'rgba(239,230,227,0.6)'};">
                        <span class="opacity-60">⏱</span> {duration}
                    </div>
                {/if}
                {#if role}
                    <div style="color: {tone === 'dev' ? 'rgba(10,10,10,0.6)' : 'rgba(239,230,227,0.6)'};">
                        <span class="opacity-60">👤</span> {role}
                    </div>
                {/if}
            </div>
        {/if}

        <!-- Liens -->
        {#if liveUrl || githubUrl}
            <div class="flex gap-3 pt-2">
                {#if liveUrl}
                    <a
                            href={liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            class="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold transition-all duration-300 hover:scale-105"
                            style="
                            border-radius: 8px;
                            background: {tone === 'dev' ? '#6E54A3' : '#A0D5FD'};
                            color: {tone === 'dev' ? '#FFFFFF' : '#0A0A0A'};
                        "
                    >
                        <span>🔗</span> Live
                    </a>
                {/if}
                {#if githubUrl}
                    <a
                            href={githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            class="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold transition-all duration-300 hover:scale-105"
                            style="
                            border-radius: 8px;
                            background: {tone === 'dev' ? 'rgba(10,10,10,0.05)' : 'rgba(239,230,227,0.1)'};
                            color: {tone === 'dev' ? '#0A0A0A' : '#EFE6E3'};
                            border: 1px solid {tone === 'dev' ? 'rgba(10,10,10,0.1)' : 'rgba(239,230,227,0.2)'};
                        "
                    >
                        <span>⚡</span> Code
                    </a>
                {/if}
            </div>
        {/if}
    </div>

    <!-- Effet brillant au survol (comme les cartes Pokémon holographiques) -->
    <div
            class="absolute inset-0 pointer-events-none transition-opacity duration-500"
            style="
            opacity: {isHovered ? 0.15 : 0};
            background: {tone === 'dev'
                ? 'radial-gradient(circle at 50% 50%, rgba(110,84,163,0.3) 0%, transparent 70%)'
                : 'radial-gradient(circle at 50% 50%, rgba(160,213,253,0.3) 0%, transparent 70%)'};
            border-radius: 20px;
        "
    />
</article>