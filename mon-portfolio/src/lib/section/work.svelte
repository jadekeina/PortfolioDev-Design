<script lang="ts">
    import { modeStore } from "$lib/stores/modes";
    import ProjectCase from "$lib/components/ProjectCase.svelte";
    import ellam from "$lib/assets/ellam.png";
    import smith from "$lib/assets/smith.png";
    import angel from "$lib/assets/angel.png";
    import tilipe from "$lib/assets/tilipe.png";
    import BCB1 from "$lib/assets/BCB1.png";
    import BCB2 from "$lib/assets/BCB2.png";
    import BCB3 from "$lib/assets/BCB3.png";
    $: mode = $modeStore;

</script>

{#if mode === "design"}
    <!-- MODE DESIGN -->
    <section class="w-full px-6 py-20 md:py-28" style="background:#0A0A0A;">
        <div class="mx-[4em] max-w-[130em]">
            <div class="mb-16 md:mb-20">
                <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight" style="color:#EFE6E3">Work</h1>
                <p class="text-lg md:text-xl max-w-2xl" style="color:rgba(239,230,227,.6)">
                    Une sélection de projets…
                </p>
            </div>

            <!-- FIX : utilise grid-cols-[...] -->
            <div class="grid grid-cols-12 gap-6 auto-rows-[240px]">
                <div class="col-span-8 row-span-2 rounded-xl bg-white/5 overflow-hidden relative group cursor-pointer">
                    <div class="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                        <img src={BCB1} alt="Bcb1" class="w-full h-full object-cover" />
                    </div>
                </div>
                <div class="col-span-4 row-span-1 rounded-xl bg-white/5 overflow-hidden relative group cursor-pointer">
                    <div class="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                        <img src={BCB2} alt="Bcb2" class="w-full h-full object-cover" />
                    </div>
                </div>
                <div class="col-span-4 row-span-1 rounded-xl bg-white/5 overflow-hidden relative group cursor-pointer">
                    <div class="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                        <img src={BCB3} alt="Bcb3" class="w-full h-full object-cover" />
                    </div>
                </div>
                <!-- posters -->
                <div class="col-span-3 row-span-2 rounded-xl bg-white/5 overflow-hidden relative group cursor-pointer">
                    <div class="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                        <img src={ellam} alt="Ellam poster" class="w-full h-full object-cover" />
                    </div>
                </div>
                <div class="col-span-3 row-span-2 rounded-xl bg-white/5 overflow-hidden relative group cursor-pointer">
                    <div class="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                        <img src={smith} alt="Smith poster" class="w-full h-full object-cover" />
                    </div>
                </div>
                <div class="col-span-3 row-span-2 rounded-xl bg-white/5 overflow-hidden relative group cursor-pointer">
                    <div class="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                        <img src={angel} alt="Angel poster" class="w-full h-full object-cover" />
                    </div>
                </div>
                <div class="col-span-3 row-span-2 rounded-xl bg-white/5 overflow-hidden relative group cursor-pointer">
                    <div class="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                        <img src={tilipe} alt="Tilipe poster" class="w-full h-full object-cover" />
                    </div>
                </div>

                <div class="col-span-6 row-span-2 rounded-xl bg-white/5"></div>
                <div class="col-span-6 row-span-2 rounded-xl bg-white/5"></div>
            </div>

        </div>
    </section>

{:else}
    <!-- MODE DEV -->
    <section class="w-full px-6 py-20 md:py-28" style="background:#EFE6E3;">
        <div class="mx-auto max-w-6xl">
            <!-- Header -->
            <div class="mb-16 md:mb-20">
                <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight" style="color:#0A0A0A">
                    Work
                </h1>
                <p class="text-lg md:text-xl max-w-2xl" style="color:rgba(10,10,10,.55)">
                    Des projets techniques qui démontrent expertise et innovation.
                </p>
            </div>

            <!-- Grille de projets -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                <ProjectCase
                        tone="dev"
                        title="EcoDeli"
                        summary="Système de réservation pour foodtrucks. UI responsive avec gestion de créneaux et intégration API sandbox."
                        list={[
                    "Conception d’un site web complet (Front-end & Back-end) pour la gestion d’une solution de livraison\n"+
                    " collaborative (annonces, trajets, prestataires, clients, paiements…).",
                    "Mise en place d’un système de gestion multi-rôles (admin, client, livreur, commerçant, prestataire).",
                    " Intégration d’un tableau de bord dynamique, d’une API RESTful et d’une architecture modulaire en\n"+
                    " microservices (Docker).",
                    " Développement d’un back-office sécurisé et d’un système de notifications & facturation automatique.",
                    "Gestion multilingue du site, mise en place de l’authentification, des uploads de documents et des\n"+
                    " paiements (Stripe)."


  ]}
                        srcMp4="/videos/test.mp4"
                        poster="/images/ecodeli-poster.jpg"
                        technologies={["React","Node.js","MySQL","Docker","Express","MySQL","TailwindCSS","i18n","JWT"]}
                        duration="3 mois"
                        role="Front + Back + API"
                        year="2025"
                        githubUrl="https://github.com/jadekeina/ECODELI"
                />

                <ProjectCase
                        tone="dev"
                        title="Driv’n Cook"
                        summary="Plateforme de gestion de franchises food-truck. Conçue pour automatiser l’onboarding des franchisés, centraliser la gestion des stocks, commandes et paiements."
                        list={[
    "Développement d’un tableau de bord complet pour les franchisés : gestion des menus, stocks, commandes et suivi des ventes.",
    "Création d’un processus d’onboarding automatisé permettant aux franchisés de s’inscrire, d’uploader leurs documents et d’être validés par un administrateur.",
    "Intégration d’une API REST pour la communication entre le front SvelteKit et le back Node/Express.",
    "Mise en place du système de paiements via Stripe (création de comptes, facturation automatique, historique des transactions).",
    "Implémentation de l’authentification sécurisée (JWT), et du stockage des données sur MySQL avec Sequelize.",
  ]}
                        srcMp4="/videos/tuto.mp4"
                        poster="/images/drivncook-poster.jpg"
                        technologies={[
    "SvelteKit",
    "Node.js",
    "Express",
    "MySQL",
    "Sequelize",
    "Stripe API",
    "Docker",
    "JWT",
    "TailwindCSS"
  ]}
                        duration="3 semaines"
                        role="Full-stack"
                        year="2025"
                        githubUrl="https://github.com/jadekeina/DRIVN_COOK"
                />

            </div>
        </div>
    </section>
{/if}