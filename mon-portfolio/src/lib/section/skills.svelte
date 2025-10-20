<script lang="ts">
    import { modeStore } from "$lib/stores/modes";
    import DefilementElement from "$lib/components/DefilementElement.svelte";
    $: mode = $modeStore; // "design" | "dev"

    import html5 from "$lib/assets/html5.svg";
    import css3 from "$lib/assets/css3.svg";
    import js   from "$lib/assets/javascript.svg";
    import bootstrap from "$lib/assets/bootstrap.svg";
    import c from "$lib/assets/c.svg";
    import clion from "$lib/assets/clion.png";
    import datagrip from "$lib/assets/datagrip.png";
    import docker from "$lib/assets/docker.svg";
    import git from "$lib/assets/git.svg"
    import mysql from "$lib/assets/mysql.svg";
    import nextjs from "$lib/assets/nextjs.svg";
    import nodejs from "$lib/assets/nodejs.svg";
    import oracle from "$lib/assets/oracle.svg";
    import phaser from "$lib/assets/phaser.png"
    import php from "$lib/assets/php.svg";
    import phpstorm from "$lib/assets/phpstorm.png";
    import python from "$lib/assets/python.svg";
    import react from "$lib/assets/react.svg"
    import svelte from "$lib/assets/svelte.svg";
    import typescript from "$lib/assets/typescript.svg";
    import vscode from "$lib/assets/vscode.svg";
    import xd from "$lib/assets/xd.svg";
    import PremierePro from "$lib/assets/PremierePro.svg";
    import photoshop from "$lib/assets/photoshop.svg"
    import express from "$lib/assets/express.svg";
    import javascript from "$lib/assets/javascript.svg";
    import InDesign from "$lib/assets/inDesign.svg";
    import illustrator from "$lib/assets/illustrator.svg";
    import afterEffect from "$lib/assets/AfterEffect.svg";

    const row1 = [
        { src: html5, alt: "HTML5" },
        { src: css3, alt: "CSS3" },
        { src: js,   alt: "JavaScript" },
        { src: react, alt: "React" },
        {src: bootstrap, alt: "Bootstrap" },
        {src: c, alt: "CSS" },
    ];

    const row2 = [
        {src: datagrip, alt: "DataGrip" },
        {src: git, alt: "Git" },
        {src: mysql, alt: "Mysql" },
        {src: docker, alt: "Docker" },
        {src: php, alt: "PHP" },
        {src: phpstorm, alt: "PHP" },
    ];

    const row3 = [
        {src: nextjs, alt: "NextJS" },
        {src: nodejs, alt: "Nodejs" },
        {src: oracle, alt: "Oracle" },
        {src: clion, alt: "Clion" },
        {src: phaser, alt: "Phaser" },
        {src: svelte, alt: "Svelte" },
        {src: typescript, alt: "Typescript" },
    ]

    const row4 = [
        {src: vscode, alt: "VSCode" },
        {src: javascript, alt: "JavaScript" },
        {src: python, alt: "Python" },
    ]

    const row5 = [
        { src: afterEffect,   alt: "afterEffect" },
        {src: xd, alt: "xd" },
        {src:PremierePro, alt: "PremierePro" },
        {src:photoshop, alt: "Photoshop" },
        {src: express, alt: "Express" },
        {src:InDesign, alt: "InDesign" },
        {src:illustrator, alt: "Illustrator" },
    ]
    const row6 = [
        { text: "Bienveillante" },
        { text: "Autonome" },
        { text: "Curieuse" },
        { text: "Créative" },
        { text: "Rigoureuse" },
        { text: "Persévérante" },
        { text: "Empathique" },
        { text: "Communicative" },
        { text: "Organisée" },
        { text: "Esprit d'équipe" },
    ];


</script>

{#if mode === "design"}

    <section class="relative w-full min-h-[140vh]  py-16">

        <div class="mx-auto">
            <h1 class="text-6xl font-extrabold text-[#BFA1DB] text-center">SKILLS</h1>

            <h2 class="text-center font-bold text-3xl mt-10">HARD SKILLS</h2>

            <div class="mt-14 relative flex items-center justify-center">
                <div class=" absolute self-center  inset-0 -z-10  p-30 bg-gradient-to-b from-[#A0D5FD] to-[#BFA1DB] blur-3xl"></div>
                <DefilementElement items={row5} duration={10} />
            </div>

            <h2 class="text-center font-bold text-3xl mt-50 ">SOFT SKILLS</h2>
            <div class="mt-24 p-30 bg-gradient-to-b from-[#E29D88] to-[#BFA1DB] blur-3xl">
                <DefilementElement items={row3} duration={35}  />
            </div>

            <h2 class="text-center font-bold text-2xl mt-10 ">USEFUL SOFTWARE</h2>
            <div class="mt-24 p-40 borderbg-[#0A0A0A]">

                <!-- ➜ ici ton rendu pour Notion / Miro / Dribbble, etc. -->
            </div>
        </div>
    </section>

{:else}

    <section class="relative w-full min-h-[140vh]  py-16">


        <div class="mx-auto">
            <h1 class="text-6xl font-extrabold text-[#BFA1DB] text-center">SKILLS</h1>

            <h2 class="text-center font-bold text-3xl mt-10">HARD SKILLS</h2>

            <div class="mt-14 relative flex flex-col justify-center ">
                <div class=" absolute  inset-0 -z-10 gap-50  p-30 bg-gradient-to-b from-[#A0D5FD] to-[#BFA1DB] blur-3xl"></div>
                <div>   <DefilementElement items={row1} duration={10}/> </div>
                <div>   <DefilementElement items={row2} duration={10} rtl/> </div>
                <div>   <DefilementElement items={row3} duration={10}/> </div>
            </div>


            <h2 class="text-center font-bold text-3xl mt-50 ">SOFT SKILLS</h2>

            <div class="mt-14 relative flex flex-col justify-center ">
                <div class=" absolute  inset-0 -z-10  p-30 bg-gradient-to-b from-[#E29D88] to-[#BFA1DB]  blur-3xl"></div>
                <div>   <DefilementElement items={row6} duration={10}/> </div>

            </div>
            <div class="mt-24 p-30 bg-gradient-to-b from-[#E29D88] to-[#BFA1DB] blur-3xl">
                <DefilementElement items={row3} duration={35}/>
            </div>

            <h2 class="text-center font-bold text-2xl mt-10 ">USEFUL SOFTWARE</h2>
            <div class="mt-24 p-40 borderbg-[#0A0A0A]">

                <!-- ➜ ici ton rendu pour Notion / Miro / Dribbble, etc. -->
            </div>
        </div>


    </section>

{/if}