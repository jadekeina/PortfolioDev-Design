<script lang="ts">
    import {modeStore} from "$lib/stores/modes";

    export let mode: "design" | "dev" = "dev";
</script>

<!-- wrapper plein écran, pas d'interactions -->
<div class="absolute inset-0 -z-10 overflow-hidden">
    <!-- fond de base -->
    <div class={mode === "design" ? "w-full h-full bg-[#0A0A0A]" : "w-full h-full bg-[#EFE6E3]"}></div>

    <!-- bande 1 : A0D5FD -> BFA1DB (haut) -->
    <div
            class="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[140%] h-[28vh] blur-[200px] opacity-90"
            style="top: 12vh; background: linear-gradient(90deg, #A0D5FD 0%, #BFA1DB 100%); border-radius: 9999px;"
    ></div>

    <!-- bande 2 : E29D88 -> BFA1DB (milieu) -->
    <div
            class="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[140%] h-[30vh] blur-[200px] opacity-90"
            style="top: 42vh; background: linear-gradient(90deg, #E29D88 0%, #BFA1DB 100%); border-radius: 9999px;"
    ></div>

    <!-- bande 3 : A0D5FD -> BFA1DB (bas) -->
    <div
            class="pointer-events-none absolute left-1/2 -translate-x-1/2 w-[140%] h-[26vh] blur-[200px] opacity-85"
            style="top: 70vh; background: linear-gradient(90deg, #A0D5FD 0%, #BFA1DB 100%); border-radius: 9999px;"
    ></div>

    <!-- arrondi noir bas (comme ton mock) -->
    {#if mode === "dev"}
        <div class="absolute left-0 right-0 bottom-0 h-[26vh] bg-black rounded-t-[36px]"></div>
    {/if}
</div>
