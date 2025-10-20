<script lang="ts">
    import { modeStore } from "$lib/stores/modes";
    import portrait from "$lib/assets/img2 1.png";
    import portraitDesign from "$lib/assets/img1 1.png";
    $: mode = $modeStore;
</script>

{#if mode === "design"}
    <section class="relative bg-[#0A0A0A] text-white">
        <div class="mx-auto mr-[10em] pt-16 lg:pt-24">

            <!-- Ligne du haut : gros titre + textes + lien -->
            <div class="grid grid-cols-1 ml-[5em] lg:grid-cols-12 gap-8 items-start">
                <h1 class="lg:col-span-12 text-[#EFE6E3] text-[clamp(3rem,10vw,8rem)] font-extrabold leading-none tracking-tight">
                    GRAPHIC DESIGNER
                </h1>

                <!-- 2 colonnes de texte -->
                <p class="lg:col-span-5 text-[#EFE6E3]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
                <p class="lg:col-span-5 text-[#EFE6E3]">
                    Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's standard dummy text ever since
                </p>

                <!-- CTA à droite -->
                <div class="lg:col-span-2 lg:justify-self-end pt-2">
                    <a href="/contact" class="inline-flex items-center gap-2 text-gray-200 hover:text-white">
                        Get in touch <span aria-hidden>↠</span>
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
    <section class="relative min-h-screen bg-[#EFE6E3] text-gray-900 flex flex-col items-center justify-center px-6">

        <svg
                class="pointer-events-none absolute inset-0 w-full h-full"
                viewBox="0 0 1440 900" fill="none" aria-hidden="true"
        >
            <!-- vague 1 -->
            <path d="M-50 200 C 250 50, 550 350, 900 200 S 1550 100, 1600 260"
                  stroke="white" stroke-opacity="0.45" stroke-width="80"
                  fill="none" />
            <!-- vague 2 -->
            <path d="M-80 520 C 200 360, 560 640, 920 520 S 1580 440, 1640 600"
                  stroke="white" stroke-opacity="0.30" stroke-width="120"
                  fill="none" />
            <!-- option: léger flou global -->
            <filter id="blur">
                <feGaussianBlur stdDeviation="6" />
            </filter>
            <g filter="url(#blur)"></g>
        </svg>
        <span class="text-[13em] font-extrabold text-[#BFA1DB] z-10">FULL &nbsp;&nbsp; STACK </span>
        <img src={portrait} alt="Moi" class=" absolute w-[45em] rounded-xl z-5 -top-28" />
        <span class="text-[13em] font-extrabold text-[#BFA1DB] z-10">DEVELOPER</span>
    </section>
{/if}