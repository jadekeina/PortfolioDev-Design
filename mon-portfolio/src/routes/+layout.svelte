<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="min-h-screen">
    <Header />
    <main class="pt-16">
        <slot />
    </main>
</div>


