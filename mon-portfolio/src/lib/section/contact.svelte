<script lang="ts">
    import { modeStore } from "$lib/stores/modes";
    import { onMount } from 'svelte';

    let formData = {
        nom: '',
        email: '',
        trouvePar: '',
        amelioration: ''
    };

    let isSubmitting = false;
    let submitStatus: 'idle' | 'success' | 'error' = 'idle';
    let emailjs: any;

    // Charger EmailJS
    onMount(async () => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.onload = () => {
            emailjs = (window as any).emailjs;
            // Remplace par ta PUBLIC KEY
            emailjs.init('A19W4Pn3zvlmMUB8x');
        };
        document.head.appendChild(script);
    });

    async function handleSubmit(e: Event) {
        e.preventDefault();

        if (!emailjs) {
            alert('EmailJS n\'est pas encore chargé, veuillez réessayer');
            return;
        }

        isSubmitting = true;
        submitStatus = 'idle';

        try {
            // Prépare les données pour EmailJS
            const templateParams = {
                from_name: formData.nom,
                from_email: formData.email,
                trouve_par: formData.trouvePar || 'Non spécifié',
                message: formData.amelioration || 'Aucun commentaire'
            };

            // Envoie l'email
            // Remplace YOUR_SERVICE_ID et YOUR_TEMPLATE_ID
            const response = await emailjs.send(
                'service_0192xhm',      // Ex: service_abc123
                'template_s10jpgg',     // Ex: template_xyz789
                templateParams
            );

            console.log('SUCCESS!', response.status, response.text);
            submitStatus = 'success';

            // Réinitialiser le formulaire
            formData = { nom: '', email: '', trouvePar: '', amelioration: '' };

            // Masquer le message après 5 secondes
            setTimeout(() => {
                submitStatus = 'idle';
            }, 5000);

        } catch (error) {
            console.error('FAILED...', error);
            submitStatus = 'error';
        } finally {
            isSubmitting = false;
        }
    }

    $: mode = $modeStore;
</script>

{#if mode === "design"}
    <section class="w-full min-h-screen px-6 py-14 md:py-20" style="background: #0A0A0A;">
        <div class="mx-auto max-w-4xl">

            <!-- Titre principal -->
            <h1 class="text-4xl md:text-5xl font-bold text-center mb-12" style="color: #A0D5FD;">
                CONTACT
            </h1>

            <!-- Messages de statut -->
            {#if submitStatus === 'success'}
                <div class="mb-6 p-4 rounded-lg bg-green-100 border border-green-400 text-green-700 text-center animate-bounce">
                    ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
                </div>
            {/if}

            {#if submitStatus === 'error'}
                <div class="mb-6 p-4 rounded-lg bg-red-100 border border-red-400 text-red-700 text-center">
                    ❌ Une erreur est survenue. Veuillez réessayer ou me contacter directement.
                </div>
            {/if}

            <!-- Formulaire -->
            <form on:submit={handleSubmit} class="bg-white/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-gray-200/50 mb-16">

                <!-- Vos coordonnées -->
                <fieldset class="border-2 border-gray-300 rounded-2xl p-6 mb-8">
                    <legend class="px-3 text-sm font-semibold" style="color: #A0D5FD;">Vos coordonnées</legend>

                    <div class="space-y-5">
                        <!-- Nom -->
                        <div>
                            <label for="nom" class="block text-sm font-medium mb-2" style="color: #A0D5FD;">
                                Quel est votre nom ? *
                            </label>
                            <input
                                    type="text"
                                    id="nom"
                                    bind:value={formData.nom}
                                    placeholder="Votre nom"
                                    required
                                    disabled={isSubmitting}
                                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white disabled:opacity-50"
                            />
                        </div>

                        <!-- Email -->
                        <div>
                            <label for="email" class="block text-sm font-medium mb-2" style="color: #A0D5FD;">
                                Quel est votre e-mail ? *
                            </label>
                            <input
                                    type="email"
                                    id="email"
                                    bind:value={formData.email}
                                    placeholder="Votre adresse mail"
                                    required
                                    disabled={isSubmitting}
                                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white disabled:opacity-50"
                            />
                        </div>
                    </div>
                </fieldset>

                <!-- Comment m'avez vous trouvé ? -->
                <fieldset class="border-2 border-gray-300 rounded-2xl p-6 mb-8">
                    <legend class="px-3 text-sm font-semibold" style="color: #A0D5FD;">Comment m'avez vous trouvé ?</legend>

                    <div class="space-y-3">
                        <p class="text-sm font-medium mb-4" style="color: #A0D5FD;">
                            Comment m'avez-vous trouvé ? :
                        </p>

                        <label class="flex items-center gap-3 cursor-pointer">
                            <input
                                    type="radio"
                                    name="trouvePar"
                                    value="LinkedIn"
                                    bind:group={formData.trouvePar}
                                    disabled={isSubmitting}
                                    class="w-4 h-4 accent-purple-600"
                            />
                            <span class="text-sm">Sur LinkedIn</span>
                        </label>

                        <label class="flex items-center gap-3 cursor-pointer">
                            <input
                                    type="radio"
                                    name="trouvePar"
                                    value="GitHub"
                                    bind:group={formData.trouvePar}
                                    disabled={isSubmitting}
                                    class="w-4 h-4 accent-purple-600"
                            />
                            <span class="text-sm">Sur GitHub</span>
                        </label>

                        <label class="flex items-center gap-3 cursor-pointer">
                            <input
                                    type="radio"
                                    name="trouvePar"
                                    value="Par une connaissance"
                                    bind:group={formData.trouvePar}
                                    disabled={isSubmitting}
                                    class="w-4 h-4 accent-purple-600"
                            />
                            <span class="text-sm">Par une connaissance</span>
                        </label>

                        <label class="flex items-center gap-3 cursor-pointer">
                            <input
                                    type="radio"
                                    name="trouvePar"
                                    value="Autre"
                                    bind:group={formData.trouvePar}
                                    disabled={isSubmitting}
                                    class="w-4 h-4 accent-purple-600"
                            />
                            <span class="text-sm">Autres...</span>
                        </label>
                    </div>
                </fieldset>

                <!-- Votre avis sur le portfolio -->
                <fieldset class="border-2 border-gray-300 rounded-2xl p-6 mb-8">
                    <legend class="px-3 text-sm font-semibold" style="color: #A0D5FD;">Votre avis sur le portfolio</legend>

                    <div>
                        <label for="amelioration" class="block text-sm font-medium mb-2" style="color: #A0D5FD;">
                            Axes d'amélioration :
                        </label>
                        <textarea
                                id="amelioration"
                                bind:value={formData.amelioration}
                                placeholder="Vos commentaires..."
                                rows="5"
                                disabled={isSubmitting}
                                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white resize-none disabled:opacity-50"
                        ></textarea>
                    </div>
                </fieldset>

                <!-- Bouton envoyer -->
                <div class="flex justify-center">
                    <button
                            type="submit"
                            disabled={isSubmitting}
                            class="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            style="background: #A0D5FD;"
                    >
                        {#if isSubmitting}
                            <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Envoi en cours...
                        {:else}
                            Envoyer
                        {/if}
                    </button>
                </div>
            </form>

            <!-- Section ME CONTACTER -->
            <div class="bg-white/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-gray-200/50 text-center">
                <h2 class="text-3xl font-bold mb-6" style="color: #A0D5FD;">
                    ME CONTACTER
                </h2>

                <div class="space-y-4 mb-8">
                    <p class="text-sm" style="color: #A0D5FD;">
                        Vous pouvez <span class="underline">également</span> me contacter directement via email ou par téléphone :
                    </p>

                    <div class="space-y-2">
                        <p class="text-sm">
                            <span class="font-semibold">Email :</span>
                            <a href="mailto:jadekeina.pro@gmail.com" class="underline hover:opacity-70" style="color: #A0D5FD;">
                                jadekeina.pro@gmail.com
                            </a>
                        </p>
                        <p class="text-sm" style="color: #A0D5FD;">
                            <span class="font-semibold">Téléphone :</span> +33 6 16 03 32 16
                        </p>
                    </div>
                </div>

                <a
                        href="/cv/jade-keina-cv.pdf"
                        download="Jade-Keina-CV.pdf"
                        class="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border-2"
                        style="color: #A0D5FD; border-color: #A0D5FD;"
                >
                    Consulter mon Curriculum Vitae
                </a>
            </div>
        </div>
    </section>
{:else}

    <section class="w-full min-h-screen px-6 py-14 md:py-20" style="background: #EFE6E3;">
        <div class="mx-auto max-w-4xl">

            <!-- Titre principal -->
            <h1 class="text-4xl md:text-5xl font-bold text-center mb-12" style="color: #4A1C40;">
                CONTACT
            </h1>

            <!-- Messages de statut -->
            {#if submitStatus === 'success'}
                <div class="mb-6 p-4 rounded-lg bg-green-100 border border-green-400 text-green-700 text-center animate-bounce">
                    ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
                </div>
            {/if}

            {#if submitStatus === 'error'}
                <div class="mb-6 p-4 rounded-lg bg-red-100 border border-red-400 text-red-700 text-center">
                    ❌ Une erreur est survenue. Veuillez réessayer ou me contacter directement.
                </div>
            {/if}

            <!-- Formulaire -->
            <form on:submit={handleSubmit} class="bg-white/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-lg border border-gray-200/50 mb-16">

                <!-- Vos coordonnées -->
                <fieldset class="border-2 border-gray-300 rounded-2xl p-6 mb-8">
                    <legend class="px-3 text-sm font-semibold" style="color: #4A1C40;">Vos coordonnées</legend>

                    <div class="space-y-5">
                        <!-- Nom -->
                        <div>
                            <label for="nom" class="block text-sm font-medium mb-2" style="color: #4A1C40;">
                                Quel est votre nom ? *
                            </label>
                            <input
                                    type="text"
                                    id="nom"
                                    bind:value={formData.nom}
                                    placeholder="Votre nom"
                                    required
                                    disabled={isSubmitting}
                                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white disabled:opacity-50"
                            />
                        </div>

                        <!-- Email -->
                        <div>
                            <label for="email" class="block text-sm font-medium mb-2" style="color: #4A1C40;">
                                Quel est votre e-mail ? *
                            </label>
                            <input
                                    type="email"
                                    id="email"
                                    bind:value={formData.email}
                                    placeholder="Votre adresse mail"
                                    required
                                    disabled={isSubmitting}
                                    class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white disabled:opacity-50"
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
                                    value="LinkedIn"
                                    bind:group={formData.trouvePar}
                                    disabled={isSubmitting}
                                    class="w-4 h-4 accent-purple-600"
                            />
                            <span class="text-sm">Sur LinkedIn</span>
                        </label>

                        <label class="flex items-center gap-3 cursor-pointer">
                            <input
                                    type="radio"
                                    name="trouvePar"
                                    value="GitHub"
                                    bind:group={formData.trouvePar}
                                    disabled={isSubmitting}
                                    class="w-4 h-4 accent-purple-600"
                            />
                            <span class="text-sm">Sur GitHub</span>
                        </label>

                        <label class="flex items-center gap-3 cursor-pointer">
                            <input
                                    type="radio"
                                    name="trouvePar"
                                    value="Par une connaissance"
                                    bind:group={formData.trouvePar}
                                    disabled={isSubmitting}
                                    class="w-4 h-4 accent-purple-600"
                            />
                            <span class="text-sm">Par une connaissance</span>
                        </label>

                        <label class="flex items-center gap-3 cursor-pointer">
                            <input
                                    type="radio"
                                    name="trouvePar"
                                    value="Autre"
                                    bind:group={formData.trouvePar}
                                    disabled={isSubmitting}
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
                                disabled={isSubmitting}
                                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white resize-none disabled:opacity-50"
                        ></textarea>
                    </div>
                </fieldset>

                <!-- Bouton envoyer -->
                <div class="flex justify-center">
                    <button
                            type="submit"
                            disabled={isSubmitting}
                            class="px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            style="background: #4A1C40;"
                    >
                        {#if isSubmitting}
                            <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Envoi en cours...
                        {:else}
                            Envoyer
                        {/if}
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
                        href="/cv/jade-keina-cv.pdf"
                        download="Jade-Keina-CV.pdf"
                        class="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 border-2"
                        style="color: #4A1C40; border-color: #4A1C40;"
                >
                    Consulter mon Curriculum Vitae
                </a>
            </div>
        </div>
    </section>
{/if}