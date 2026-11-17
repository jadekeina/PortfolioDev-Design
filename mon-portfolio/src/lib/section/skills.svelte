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
    import InDesign from "$lib/assets/inDesign.svg";
    import illustrator from "$lib/assets/illustrator.svg";
    import ligthroom from "$lib/assets/lightroom.png";
    import afterEffect from "$lib/assets/AfterEffect.svg";
    import notion from "$lib/assets/notion.png";
    import miro from "$lib/assets/miro.png"
    import canva from "$lib/assets/canva.png";
    import figma from "$lib/assets/figma.png";
    import dribble from "$lib/assets/dribbble.png";
    import behance from "$lib/assets/behance.png";
    import kali from "$lib/assets/kali.png";
    import nmap from "$lib/assets/nmap.png";
    import wazuh from "$lib/assets/wazuh.png";
    import linux from "$lib/assets/linux.png";
    import debian from "$lib/assets/debian.png";
    import ubuntu from "$lib/assets/ubuntu.png";
    import windowsServer from "$lib/assets/windows-server.png";
    import powershell from "$lib/assets/powershell.png";
    import vmware from "$lib/assets/vmware.png";

    // Bandeau 1 : Cybersécurité
    const rowCyber = [
        { src: kali, alt: "Kali Linux" },
        { src: nmap, alt: "Nmap" },
        { src: wazuh, alt: "Wazuh" },
    ];

    // Bandeau 2 : Systèmes & Réseaux
    const rowSys1 = [
        { src: linux, alt: "Linux" },
        { src: debian, alt: "Debian" },
        { src: ubuntu, alt: "Ubuntu" },
    ];
    const rowSys2 = [
        { src: windowsServer, alt: "Windows Server" },
        { src: powershell, alt: "PowerShell" },
        { src: vmware, alt: "VMware" },
    ];


    // Outils sans logo disponible → en texte, comme tes soft skills
    const rowOutils = [
        { text: "Nikto" },
        { text: "Gobuster" },
        { text: "Hydra" },
        { text: "ModSecurity" },
        { text: "iptables / UFW" },
        { text: "Active Directory" },
        { text: "OSINT" },
    ];

    const row1 = [
        { src: html5, alt: "HTML5" },
        { src: css3, alt: "CSS3" },
        { src: js,   alt: "JavaScript" },
        { src: react, alt: "React" },
        //{src: c, alt: "C" },
    ];

    const row3 = [
        {src: git, alt: "Git" },
        {src: mysql, alt: "Mysql" },
        {src: docker, alt: "Docker" },
        //{src: php, alt: "PHP" },
        {src: python, alt: "Python" },

    ];

    const row2 = [
        {src: svelte, alt: "Svelte" },
        {src: bootstrap, alt: "Bootstrap" },
        {src: svelte, alt: "Svelte" },
        {src: typescript, alt: "Typescript" },
    ]

    const row5 = [

        {src:illustrator, alt: "Illustrator" },
        {src:PremierePro, alt: "PremierePro" },
        {src:photoshop, alt: "Photoshop" },
        {src: express, alt: "Express" },

    ]

    const row4 = [
        { src: afterEffect,   alt: "afterEffect" },
        {src: xd, alt: "xd" },
        {src:InDesign, alt: "InDesign" },
        {src:ligthroom, alt: "ligthroom" },
    ]
    const row6 = [
        { text: "Bienveillante" },
        { text: "Autonome" },
        { text: "Curieuse" },
        { text: "Rigoureuse" },
        { text: "Persévérante" },
        { text: "Empathique" },
        { text: "Communicative" },
        { text: "Organisée" },
        { text: "Esprit d'équipe" },
    ];

    const row7 = [
        {src: clion, alt: "Clion" },
        {src: phpstorm, alt: "PHP" },
        {src: datagrip, alt: "DataGrip" },
        {src: vscode, alt: "VSCode" },
        {src: clion, alt: "Clion" },

    ]

    const row8 = [
        { text: "Créative" },
        { text: "Imaginative" },
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

            <div class="mt-14 relative flex flex-col justify-center ">
                <div class="absolute  inset-0 -z-10 gap-50  p-25 bg-gradient-to-b from-[#A0D5FD] to-[#BFA1DB] blur-3xl"></div>
                <div><DefilementElement items={row5} duration={10} /> </div>
                <div><DefilementElement items={row4} duration={10} rtl /> </div>

            </div>

            <h2 class="text-center font-bold text-3xl mt-50 ">SOFT SKILLS</h2>
            <div class="mt-14 relative flex flex-col justify-center ">
                <div class=" absolute  inset-0 -z-10   p-10 bg-gradient-to-b from-[#E29D88] to-[#BFA1DB]  blur-3xl"></div>
                <div>   <DefilementElement items={row6} duration={20}/> </div>

            </div>


            <h2 class="text-center font-bold text-2xl mt-10 ">USEFUL SOFTWARE</h2>
            <div class="mt-14 flex flex-row justify-center gap-10 items-center" >
                <div class="transition bg-[#0A0A0A]/40 w-[10em] h-[10em] hover:w-[12em] hover:h-[12em]  rounded-2xl flex items-center justify-center "> <img class="w-[9em] self-center justify-center"  alt="canva" src={canva}> </div>
                <div class="transition bg-[#0A0A0A]/40 w-[10em] h-[10em] hover:w-[12em]   hover:h-[12em] rounded-2xl flex items-center justify-center"> <img class="w-[9em] self-center justify-center"  alt="figma"  src={figma}> </div>
                <div class="transition bg-[#0A0A0A]/40 w-[10em] h-[10em] hover:w-[12em]   hover:h-[12em] rounded-2xl flex items-center justify-center"><img class="w-[7em] self-center justify-center" alt="dribble" src={dribble}></div>
                <div class="transition bg-[#0A0A0A]/40 w-[10em] h-[10em] hover:w-[12em] hover:h-[12em]  rounded-2xl flex items-center justify-center"> <img class="w-[7em] self-center justify-center" alt="behance"  src={behance}> </div>
                <div class="transition bg-[#0A0A0A]/40 w-[10em] h-[10em] hover:w-[12em]   hover:h-[12em] rounded-2xl flex items-center justify-center"><img class="w-[7em] self-center justify-center" alt="notion"  src={notion}></div>
                <div class="transition bg-[#0A0A0A]/40 w-[10em] h-[10em] hover:w-[12em]   hover:h-[12em] rounded-2xl flex items-center justify-center"> <img class="w-[7em] self-center justify-center" alt="miro"  src={miro}></div>

            </div>
        </div>
    </section>

{:else}
    <section class="relative w-full min-h-[140vh] py-16">
        <div class="mx-auto">
            <h1 class="text-6xl font-extrabold text-[#BFA1DB] text-center">SKILLS</h1>

            <h2 class="text-center font-bold text-3xl mt-10">CYBERSÉCURITÉ</h2>
            <div class="mt-14 relative flex flex-col justify-center">
                <div class="absolute inset-0 -z-10 p-30 bg-gradient-to-b from-[#A0D5FD] to-[#BFA1DB] blur-3xl"></div>
                <div><DefilementElement items={rowCyber} duration={20} /></div>
                <div><DefilementElement items={rowOutils} duration={25} rtl /></div>
            </div>

            <h2 class="text-center font-bold text-3xl mt-20">SYSTÈMES & RÉSEAUX</h2>
            <div class="mt-14 relative flex flex-col justify-center">
                <div class="absolute inset-0 -z-10 p-10 bg-gradient-to-b from-[#A0D5FD] to-[#BFA1DB] blur-3xl"></div>
                <div><DefilementElement items={rowSys1} duration={20} /></div>
                <div><DefilementElement items={rowSys2} duration={20} /></div>
            </div>

            <h2 class="text-center font-bold text-3xl mt-20">DÉVELOPPEMENT</h2>
            <div class="mt-14 relative flex flex-col justify-center">
                <div class="absolute inset-0 -z-10 p-10 bg-gradient-to-b from-[#BFA1DB] to-[#A0D5FD] blur-3xl"></div>
                <div><DefilementElement items={row1} duration={25} rtl /></div>
                <div><DefilementElement items={row2} duration={25} rtl /></div>
                <div><DefilementElement items={row3} duration={25} rtl /></div>
            </div>

            <h2 class="text-center font-bold text-3xl mt-20">SOFT SKILLS</h2>
            <div class="mt-14 relative flex flex-col justify-center">
                <div class="absolute inset-0 -z-10 p-10 bg-gradient-to-b from-[#E29D88] to-[#BFA1DB] blur-3xl"></div>
                <div><DefilementElement items={row6} duration={20} /></div>
            </div>

            <h2 class="text-center font-bold text-2xl mt-20">USEFUL SOFTWARE</h2>
            <div class="mt-14 flex flex-row justify-center gap-10 items-center">
                {#each [
                    { src: kali, alt: "Kali Linux" },
                    { src: wazuh, alt: "Wazuh" },
                    { src: vmware, alt: "VMware" },
                    { src: vscode, alt: "VS Code" },
                    { src: notion, alt: "Notion" },
                ] as soft}
                    <div class="transition bg-[#0A0A0A]/40 w-[10em] h-[10em] hover:w-[12em] hover:h-[12em] rounded-2xl flex items-center justify-center">
                        <img class="w-[7em]" alt={soft.alt} src={soft.src}>
                    </div>
                {/each}
            </div>
        </div>
    </section>
{/if}


<style>
.transition{

    transition:
            height 0.5s ,
            width 0.5s ,
            transform 2s ;
}


</style>