<script lang="ts">
    // Media
    export let img: string = "";          // si tu préfères une image
    export let srcMp4: string = "";       // ou une vidéo MP4
    export let srcWebm: string = "";      // optionnel
    export let poster: string = "";       // poster pour la vidéo

    // Textes
    export let title: string;
    export let summary: string = "";

    // Métadonnées
    export let technologies: string[] = [];
    export let duration: string = "";     // ex. "2 semaines"
    export let role: string = "";         // ex. "Front + API"
    export let year: string = "";         // ex. "2025"

    // Liens
    export let liveUrl: string = "";      // facultatif
    export let githubUrl: string = "";    // facultatif

    // Style (optionnel) pour s’adapter aux deux modes
    export let tone: "dev" | "design" = "dev";
</script>

<article
        class="w-full overflow-hidden rounded-3xl border transition-shadow duration-200
    shadow-sm hover:shadow-lg"
        style="
    border-color: rgba(10,10,10,.1);
    background: {tone === 'dev' ? 'rgba(255,255,255,0.6)' : 'rgba(226,157,136,0.12)'}; /* dev = léger 'papier' sur beige, design = léger rose */
    backdrop-filter: blur(4px);
  "
>
    <!-- media -->
    <div class="w-full overflow-hidden">
        {#if srcMp4 || srcWebm}
            <div class="aspect-[16/9]">
                <video
                        class="h-full w-full object-cover"
                        controls
                        playsinline
                        preload="metadata"
                        poster={poster}
                >
                    {#if srcWebm}<source src={srcWebm} type="video/webm" />{/if}
                    {#if srcMp4}<source src={srcMp4} type="video/mp4" />{/if}
                    Votre navigateur ne supporte pas la vidéo HTML5.
                </video>
            </div>
        {:else if img}
            <img src={img} alt={title} class="w-full aspect-[16/9] object-cover" />
        {/if}
    </div>

    <!-- contenu -->
    <div class="p-6 md:p-8">
        <h3 class="text-2xl font-bold leading-tight"
            style="color:{tone==='dev' ? '#0A0A0A' : '#EFE6E3'}">{title}</h3>

        {#if summary}
            <p class="mt-2 text-sm md:text-base"
               style="color:{tone==='dev' ? 'rgba(10,10,10,.75)' : 'rgba(239,230,227,.8)'}">
                {summary}
            </p>
        {/if}

        <!-- tags techno -->
        {#if technologies.length}
            <div class="mt-4 flex flex-wrap gap-2">
                {#each technologies as t}
          <span
                  class="px-2.5 py-1 text-xs md:text-sm rounded-full border"
                  style="
              border-color:{tone==='dev' ? '#BFA1DB' : '#A0D5FD'};
              color:{tone==='dev' ? '#6E54A3' : '#0A0A0A'};
              background:{tone==='dev' ? 'rgba(191,161,219,.15)' : 'rgba(160,213,253,.2)'};"
          >{t}</span>
                {/each}
            </div>
        {/if}

        <!-- méta -->
        {#if duration || role || year}
            <div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs md:text-sm">
                {#if duration}
                <div class="rounded-lg px-3 py-2 border"
                     style="border-color:rgba(10,10,10,.12); color:{tone==='dev' ? '#0A0A0A' : '#EFE6E3'}">
                    <span class="opacity-60">Durée&nbsp;:</span> {duration}
                </div>
                {/if}
                {#if role}
                <div class="rounded-lg px-3 py-2 border"
                     style="border-color:rgba(10,10,10,.12); color:{tone==='dev' ? '#0A0A0A' : '#EFE6E3'}">
                    <span class="opacity-60">Rôle&nbsp;:</span> {role}
                </div>
                {/if}
                {#if year}
                <div class="rounded-lg px-3 py-2 border"
                     style="border-color:rgba(10,10,10,.12); color:{tone==='dev' ? '#0A0A0A' : '#EFE6E3'}">
                    <span class="opacity-60">Année&nbsp;:</span> {year}
                </div>
                {/if}
            </div>
        {/if}

        <!-- liens -->
        {#if liveUrl || githubUrl}
            <div class="mt-5 flex flex-wrap gap-4">
                {#if liveUrl}
                <a href={liveUrl} target="_blank" rel="noreferrer"
                   class="text-sm underline underline-offset-4 hover:opacity-80"
                   style="color:{tone==='dev' ? '#0A0A0A' : '#A0D5FD'}">Live</a>
                {/if}
                {#if githubUrl}
                    <a href={githubUrl} target="_blank" rel="noreferrer"
                 class="text-sm underline underline-offset-4 hover:opacity-80"
                 style="color:{tone==='dev' ? '#6E54A3' : '#BFA1DB'}">GitHub</a>
                {/if}
            </div>
        {/if}
    </div>
</article>
