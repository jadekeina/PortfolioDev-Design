<script lang="ts">
    import { onMount } from "svelte";

    type ImageItem = { src: string; alt: string };
    type TextItem  = { text: string };
    type MarqueeItem = ImageItem | TextItem;

    export let items: MarqueeItem[] = [];
    export let duration = 30;
    export let rtl = false;

    let ulEl: HTMLUListElement;

    onMount(() => {
        const clone = ulEl.cloneNode(true) as HTMLUListElement;
        clone.setAttribute("aria-hidden", "true");
        ulEl.parentNode?.insertBefore(clone, ulEl.nextSibling);
    });
</script>

<div class="w-full inline-flex flex-nowrap overflow-hidden marquee-mask"
     style={`--marquee-duration:${duration}s`}>
    <ul bind:this={ulEl}
        class={`flex items-center [&_li]:mx-8 ${rtl ? 'animate-marquee-rtl' : 'animate-marquee'}`}>
        {#each items as it}
            <li>
                {#if 'src' in it}
                    <img src={it.src} alt={it.alt} class="h-15 w-auto" />
                {:else}
                    <span class="text-xl font-semibold">{it.text}</span>
                {/if}
            </li>
        {/each}
    </ul>
</div>
