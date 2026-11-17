<script lang="ts">
    import { onMount } from 'svelte';

	import '../app.css';
	import Header from '$lib/components/Header.svelte';
    import { modeStore } from "$lib/stores/modes";

    $: mode = $modeStore;

    let showButton = false;

    onMount(() => {
        const handleScroll = () => {
            showButton = window.scrollY > 300;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>

<div class="min-h-screen">
    <Header />
    <main class="pt-16">
        <slot />
        {#if showButton}
            <button
                    on:click={scrollToTop}
                    class="fixed bottom-8 right-8 z-[100] p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
                    style="background-color: {mode === 'design' ? '#A0D5FD' : '#BFA1DB'};"
                    aria-label="Retour en haut"
            >
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-white group-hover:-translate-y-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        {/if}
    </main>
</div>


