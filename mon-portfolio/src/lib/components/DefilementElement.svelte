<script lang="ts">
    import { onMount } from "svelte";
    let logosEl: HTMLUListElement;         // ↙︎ remplace x-ref
    export let items: { src: string; alt: string }[] = [];
    export let duration = 30;              // secondes
    export let rtl = false;                // sens inverse (droite → gauche)

    onMount(() => {
        const ul = logosEl;
        const clone = ul.cloneNode(true) as HTMLUListElement;
        clone.setAttribute("aria-hidden", "true");   // a11y
        ul.parentNode?.insertBefore(clone, ul.nextSibling);
    });
</script>

<div
        class="w-full inline-flex flex-nowrap overflow-hidden marquee-mask"
        style={`--marquee-duration:${duration}s`}
>
    <ul
            bind:this={logosEl}
            class={`flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none ${rtl ? 'animate-marquee-rtl' : 'animate-marquee'}`}
    >
        {#each items as it}
            <li><img src={it.src} alt={it.alt} /></li>
        {/each}
    </ul>
</div>
