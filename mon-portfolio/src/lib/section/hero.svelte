<script lang="ts">
    import { onMount } from 'svelte';


    let displayText = "";
    let displayText2 = "";
    let fullText = "CYBER SÉCURITÉ et Réseaux";
    let fullText2 = "GRAPHIC DESIGNER";
    let isDeleting = false;
    let isDeleting2 = false;
    let speed = 150;
    let fullNote = "Avec une solide base en développement Fullstack";

    import { modeStore } from "$lib/stores/modes";
    import portrait from "$lib/assets/img2 1.png";
    import portraitDesign from "$lib/assets/img1 1.png";
    $: mode = $modeStore;

    async function typeEffect2() {
        if (!isDeleting2 && displayText2.length < fullText2.length) {

            displayText2 = fullText2.substring(0, displayText2.length + 1);
            speed = 150;
        } else if (isDeleting2 && displayText2.length > 0) {

            displayText2 = fullText2.substring(0, displayText2.length - 1);
            speed = 100;
        } else {

            isDeleting2 = !isDeleting2;
            speed = 1500;
        }
        setTimeout(typeEffect2, speed);
    }

    async function typeEffect() {
        if (!isDeleting && displayText.length < fullText.length) {

            displayText = fullText.substring(0, displayText.length + 1);
            speed = 150;
        } else if (isDeleting && displayText.length > 0) {

            displayText = fullText.substring(0, displayText.length - 1);
            speed = 100;
        } else {

            isDeleting = !isDeleting;
            speed = 1500;
        }
        setTimeout(typeEffect, speed);
    }

    onMount(() => {
        typeEffect();
        typeEffect2();
    });

</script>

{#if mode === "design"}
    <section class="relative bg-[#0A0A0A] text-white">
        <div class="mx-auto mr-[10em] pt-16 lg:pt-24">

            <!-- Ligne du haut : gros titre + textes + lien -->
            <div class="grid grid-cols-1 ml-[5em] lg:grid-cols-12 gap-8 items-start">
                <h1 class="lg:col-span-12 text-[#EFE6E3] text-[clamp(3rem,10vw,8rem)] font-extrabold leading-none tracking-tight">
                    {displayText2}<span class="animate-pulse">|</span>
                </h1>

                <!-- 2 colonnes de texte -->
                <p class="lg:col-span-5 text-[#EFE6E3]">
                    Le design est pour moi une manière de traduire une idée en émotion visuelle.
                </p>
                <p class="lg:col-span-5 text-[#EFE6E3]">
                    Étudiante en informatique et graphiste freelance, je crée des identités et visuels pensés pour être aussi beaux qu’efficaces. Chaque projet est une collaboration, pas seulement une livraison.
                </p>

                <!-- CTA à droite -->
                <div class="lg:col-span-2 lg:justify-self-end pt-2">
                    <a href="#about" class="inline-flex items-center gap-2 text-gray-200 hover:text-white">
                        En voir plus<span aria-hidden>↠</span>
                    </a>
                </div>
            </div>

            <!-- Capsule beige quadrillée + photo + formes décor -->
            <div class="relative mt-10 lg:mt-14">
                <!-- SVG: capsule + quadrillage -->
                <!-- Capsule beige + quadrillage (gauche droit, droite arrondi) -->
                <svg
                        class="w-full h-[28rem] lg:h-[34rem]"
                        viewBox="0 0 1440 560"
                        fill="none"
                        aria-hidden="true"
                        preserveAspectRatio="none"
                >
                    <defs>
                        <!-- grille -->
                        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M 80 0 H 0 V 80" stroke="#1f1f1f" stroke-width="2" />
                        </pattern>

                        <!-- forme demi-pilule : bord gauche droit, bord droit arrondi -->
                        <!-- rayon d’arc = 260 (ajuste r pour plus/moins d’arrondi) -->
                        <clipPath id="halfPill">
                            <path d="
        M 0 0
        H 1180
        a 260 260 0 0 1 260 260
        v 40
        a 260 260 0 0 1 -260 260
        H 0
        Z
      " />
                        </clipPath>
                    </defs>

                    <!-- fond beige dans la demi-pilule -->
                    <path
                            d="M 0 0 H 1180 a 260 260 0 0 1 260 260 v 40 a 260 260 0 0 1 -260 260 H 0 Z"
                            fill="#EBDDD8"
                    />

                    <!-- quadrillage, découpé par la demi-pilule -->
                    <rect x="0" y="0" width="1440" height="560" clip-path="url(#halfPill)" fill="url(#grid)" />
                </svg>

                <div class="pointer-events-none absolute inset-0">
                    <!-- disque -->
                    <div class="absolute -top-12 left-[12%] size-40 rounded-full bg-[#A0D5FD]"></div>
                    <!-- rectangle arrondi incliné -->
                    <div class="absolute top-[8%] right-[9%] h-40 w-56 rounded-2xl bg-[#E29D88]  rotate-6"></div>
                    <!-- rectangle arrondi incliné en bas gauche -->
                    <div class="absolute bottom-[16%] left-[10%] h-40 w-64 rounded-2xl bg-[#BFA1DB]  -rotate-6"></div>
                    <!-- disque bas droit -->
                    <div class="absolute bottom-[16%] right-[10%] h-20 w-64 rounded-2xl bg-[#A6DF90]  rotate-15"></div>
                </div>

                <img
                        src={portraitDesign}
                        alt="Jade-Keina"
                        class="absolute z-10 left-1/2 -translate-x-1/2 -bottom-0.5 w-[26rem] lg:w-[32rem] object-cover"
                />
            </div>

        </div>
    </section>

{:else}
    <section class="relative min-h-screen bg-[#DBCDF0]/30 text-[#2D2D2D] flex  items-start justify-start overflow-hidden">



        <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center z-10">

            <div class="relative flex justify-center lg:justify-start">
                <img
                        src={portrait}
                        alt="Jade-Keina"
                        class="w-[90%] lg:w-[100%] max-w-[700px] object-contain"
                />
            </div>

            <div class="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">

                <div class="flex flex-col gap-4 pt-8  items-center w-[33em]">


                <div class="font-serif italic text-2xl lg:text-3xl text-gray-700">
                    Jade-Keina Pognon
                </div>
                <div class="font-serif text-xl lg:text-2xl text-gray-600">
                    Étudiante en
                </div>
                </div>


                <h1 class="text-3xl lg:text-7xl font-black leading-[1] uppercase leading-[0.8] text-[#BFA1DB]/80 tracking-tighter relative">
                    {displayText}<span class="animate-pulse">|</span>
                </h1>

                <div class="relative mt-6 z-20">
                    <p class="font-handwriting pen-writing text-xl text-[#5A4E7D]">
                        Avec une solide base en développement Fullstack
                    </p>

                </div>

                <div class="flex gap-4 pt-8 justify-center items-center w-[33em]">
                    <a href="https://www.linkedin.com/in/jade-keina-pognon-656552293/" class="w-16 h-16 rounded-full bg-[#BFA1DB] flex items-center justify-center text-white hover:scale-110 transition-transform">
                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href="https://github.com/jadekeina" class="w-16 h-16 rounded-full bg-[#BFA1DB] flex items-center justify-center text-white hover:scale-110 transition-transform">
                        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </section>


{/if}

<style>
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap');

    .font-handwriting {
        font-family: 'Caveat', cursive;
        font-weight: 300;
        display: inline-block;
    }

    .pen-writing {
        position: relative;
        overflow: hidden;
        white-space: nowrap;
    }

    .pen-writing::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: #F5F0FB;
        animation: write 3s steps(40) forwards;
        animation-delay: 1.5s;
    }

    @keyframes write {
        to {
            width: 0;
        }
    }
</style>