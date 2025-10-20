<script lang="ts">

    import { modeStore } from "$lib/stores/modes";
    let formData = {
        nom: '',
        email: '',
        trouvePar: '',
        amelioration: ''
    };

    function handleSubmit(e: Event) {
        e.preventDefault();
        console.log('Formulaire envoyé:', formData);
        // Tu peux ajouter ta logique d'envoi ici
    };

    $: mode = $modeStore;
</script>

{#if mode === "design"}

{:else}

<section class="w-full min-h-screen px-6 py-14 md:py-20" style="background: #EFE6E3;">
    <div class="mx-auto max-w-4xl">

        <!-- Titre principal -->
        <h1 class="text-4xl md:text-5xl font-bold text-center mb-12" style="color: #4A1C40;">
            CONTACT
        </h1>

        <!-- Formulaire -->
        <form on:submit={handleSubmit} class="bg-white/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-gray-200/50 mb-16">

            <!-- Vos coordonnées -->
            <fieldset class="border-2 border-gray-300 rounded-2xl p-6 mb-8">
                <legend class="px-3 text-sm font-semibold" style="color: #4A1C40;">Vos coordonnées</legend>

                <div class="space-y-5">
                    <!-- Nom -->
                    <div>
                        <label for="nom" class="block text-sm font-medium mb-2" style="color: #4A1C40;">
                            Quel est votre nom ?
                        </label>
                        <input
                                type="text"
                                id="nom"
                                bind:value={formData.nom}
                                placeholder="Votre nom"
                                required
                                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white"
                        />
                    </div>

                    <!-- Email -->
                    <div>
                        <label for="email" class="block text-sm font-medium mb-2" style="color: #4A1C40;">
                            Quel est votre e-mail ?
                        </label>
                        <input
                                type="email"
                                id="email"
                                bind:value={formData.email}
                                placeholder="Votre adresse mail"
                                required
                                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white"
                        />
                    </div>
                </div>
            </fieldset>

            <!-- Comment m'avez vous trouvé ? -->
            <fieldset class="border-2 border-gray-300 rounded-2xl p-6 mb-8">
                <legend class="px-3 text-sm font-semibold" style="color: #4A1C40;">Comment m'avez vous trouvé ?</legend>

                <div class="space-y-3">
                    <p class="text-sm font-medium mb-4" style="color: #4A1C40;">
                        Comment m'avez-vous trouvé ? :
                    </p>

                    <label class="flex items-center gap-3 cursor-pointer">
                        <input
                                type="radio"
                                name="trouvePar"
                                value="linkedin"
                                bind:group={formData.trouvePar}
                                class="w-4 h-4 accent-purple-600"
                        />
                        <span class="text-sm">Sur LinkedIn</span>
                    </label>

                    <label class="flex items-center gap-3 cursor-pointer">
                        <input
                                type="radio"
                                name="trouvePar"
                                value="github"
                                bind:group={formData.trouvePar}
                                class="w-4 h-4 accent-purple-600"
                        />
                        <span class="text-sm">Sur GitHub</span>
                    </label>

                    <label class="flex items-center gap-3 cursor-pointer">
                        <input
                                type="radio"
                                name="trouvePar"
                                value="connaissance"
                                bind:group={formData.trouvePar}
                                class="w-4 h-4 accent-purple-600"
                        />
                        <span class="text-sm">Par une connaissance</span>
                    </label>

                    <label class="flex items-center gap-3 cursor-pointer">
                        <input
                                type="radio"
                                name="trouvePar"
                                value="autre"
                                bind:group={formData.trouvePar}
                                class="w-4 h-4 accent-purple-600"
                        />
                        <span class="text-sm">Autres...</span>
                    </label>
                </div>
            </fieldset>

            <!-- Votre avis sur le portfolio -->
            <fieldset class="border-2 border-gray-300 rounded-2xl p-6 mb-8">
                <legend class="px-3 text-sm font-semibold" style="color: #4A1C40;">Votre avis sur le portfolio</legend>

                <div>
                    <label for="amelioration" class="block text-sm font-medium mb-2" style="color: #4A1C40;">
                        Axes d'amélioration :
                    </label>
                    <textarea
                            id="amelioration"
                            bind:value={formData.amelioration}
                            placeholder="Vos commentaires..."
                            rows="5"
                            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white resize-none"
                    ></textarea>
                </div>
            </fieldset>

            <!-- Bouton envoyer -->
            <div class="flex justify-center">
                <button
                        type="submit"
                        class="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg"
                        style="background: #4A1C40;"
                >
                    Envoyer
                </button>
            </div>
        </form>

        <!-- Section ME CONTACTER -->
        <div class="bg-white/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-gray-200/50 text-center">
            <h2 class="text-3xl font-bold mb-6" style="color: #4A1C40;">
                ME CONTACTER
            </h2>

            <div class="space-y-4 mb-8">
                <p class="text-sm" style="color: #4A1C40;">
                    Vous pouvez <span class="underline">également</span> me contacter directement via email ou par téléphone :
                </p>

                <div class="space-y-2">
                    <p class="text-sm">
                        <span class="font-semibold">Email :</span>
                        <a href="mailto:jadekeina.pro@gmail.com" class="underline hover:opacity-70" style="color: #4A1C40;">
                            jadekeina.pro@gmail.com
                        </a>
                    </p>
                    <p class="text-sm" style="color: #4A1C40;">
                        <span class="font-semibold">Téléphone :</span> +33 6 16 03 32 16
                    </p>
                </div>
            </div>

            <a
                    href="/cv"
                    class="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border-2"
                    style="color: #4A1C40; border-color: #4A1C40;"
            >
                Consulter mon Curriculum Vitae
            </a>
        </div>
    </div>
</section>
{/if}