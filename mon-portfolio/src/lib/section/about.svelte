<script lang="ts">

    import { modeStore } from "$lib/stores/modes";
    $: mode = $modeStore;
</script>

{#if mode === 'design'}
    <div class="flex justify-center items-center bg-[#A0D5FD] min-h-[40em] px-4">

        <div class="w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden border border-white/20">

            <div class="bg-[#E8E8E8] h-10 flex items-center px-4 relative">
                <div class="flex gap-2 z-10">
                    <div class="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-xs text-gray-500 font-medium">Terminal — -zsh — 80×24</span>
                </div>
            </div>

            <div class="p-8 lg:p-12 text-gray-800 text-xs lg:text-xl leading-relaxed font-sans">
                <p class="mb-6">
                    Je suis <span class="text-[#BFA1DB]  font-bold">étudiante en informatique</span> et
                    <span class="text-[#BFA1DB]  font-bold">graphiste freelance</span>.
                    Le design est d’abord devenu un moyen d’exprimer mes idées, puis une façon d’aider les autres à
                    <span class="text-black font-extrabold">clarifier les leurs</span>.
                </p>

                <p class="mb-6">
                    J’aime <span class="text-black font-extrabold underline decoration-blue-500/30 underline-offset-4">comprendre un projet</span> avant de le dessiner :
                    son intention, son message et ce qu’il doit transmettre.
                    Mon objectif n’est pas seulement de créer quelque chose de beau, mais quelque chose de
                    <span class="text-[#E29D88] font-bold">juste et cohérent</span>.
                </p>

                <p class="mb-8">
                    Chaque collaboration est pour moi un <span class="text-black font-extrabold italic">échange</span> —
                    je conçois des visuels pensés pour <span class="italic font-medium">durer</span>,
                    <span class="italic font-medium">évoluer</span> et représenter fidèlement ceux qui les portent.
                </p>

                <div class="flex items-center gap-2">
                    <span class="font-mono text-[#BFA1DB] font-bold">$</span>
                    <div class="w-2.5 h-5 bg-[#BFA1DB] animate-pulse"></div>
                </div>
            </div>
        </div>
    </div>




{:else}
    <div class="flex justify-center items-center bg-[#BFA1DB] min-h-[45em] py-20 px-4">
        <div class="w-full max-w-4xl h-[500px] bg-[#0d0d0d] rounded-lg overflow-hidden shadow-2xl border border-gray-800 flex flex-col">

            <div class="bg-[#2d2d2d] h-9 flex items-center justify-between px-4">
                <div class="flex items-center gap-2">
                    <span class="font-mono text-xs text-gray-400">PS > kali@kali: /home/kali</span>
                </div>
                <div class="flex gap-2">
                    <div class="w-3 h-3 rounded-full bg-[#444]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#444]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#444]"></div>
                </div>
            </div>

            <div class="relative flex-grow p-6 font-mono text-sm lg:text-base overflow-y-auto">

                <div class="absolute inset-0 z-0 flex items-center justify-center opacity-10 pointer-events-none">
                    <img src="/src/lib/assets/kali-logo.png" alt="" class="w-2/3 object-contain" />
                </div>

                <div class="relative z-10 space-y-6">

                    <div>
                        <div class="flex flex-wrap items-center gap-1">
                            <span class="text-[#2ecc71]">┌──(</span>
                            <span class="text-[#3498db] font-bold">kali㉿kali</span>
                            <span class="text-[#2ecc71]">)-[</span>
                            <span class="text-white">/home/jade</span>
                            <span class="text-[#2ecc71]">]</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-[#2ecc71]">└─</span>
                            <span class="text-[#e91e63] font-bold">$</span>
                            <span class="text-gray-100 italic">whoami</span>
                        </div>
                        <p class="mt-2 text-gray-300 leading-relaxed pl-4 border-l-2 border-[#BFA1DB]/50">
                            Étudiante en <span class="text-white font-semibold">école d'ingénieur informatique</span> (2 ans).
                            Anciennement <span class="text-[#BFA1DB]">Dev Full-stack</span> (API, Web), je pivote vers la Sécurité Offensive.
                            Mon approche : comprendre comment on construit pour mieux savoir comment on infiltre.
                        </p>
                    </div>

                    <div>
                        <div class="flex flex-wrap items-center gap-1">
                            <span class="text-[#2ecc71]">┌──(</span>
                            <span class="text-[#3498db] font-bold">kali㉿kali</span>
                            <span class="text-[#2ecc71]">)-[</span>
                            <span class="text-white">/audit/skills</span>
                            <span class="text-[#2ecc71]">]</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-[#2ecc71]">└─</span>
                            <span class="text-[#e91e63] font-bold">$</span>
                            <span class="text-gray-100 italic">cat capabilities.log</span>
                        </div>
                        <div class="mt-2 text-gray-400 pl-4 border-l-2 border-[#BFA1DB]/50 space-y-2">
                            <p>
                                <span class="text-[#2ecc71] font-bold">✔ INFRA:</span> Réseaux, Virtualisation (VMware), Déploiement d'environnements sécurisés.
                            </p>
                            <p>
                                <span class="text-[#2ecc71] font-bold">✔ PENTEST:</span> Reconnaissance (Passive/Active), Analyse de vulnérabilités, Exploitation & Post-exploitation.
                            </p>
                            <p class="text-xs italic opacity-80">
                                Maîtrise de la chaîne d'attaque pour une défense plus résiliente.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div class="flex flex-wrap items-center gap-1">
                            <span class="text-[#2ecc71]">┌──(</span>
                            <span class="text-[#3498db] font-bold">kali㉿kali</span>
                            <span class="text-[#2ecc71]">)-[</span>
                            <span class="text-white">/skills</span>
                            <span class="text-[#2ecc71]">]</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <span class="text-[#2ecc71]">└─</span>
                            <span class="text-[#e91e63] font-bold">$</span>
                            <span class="text-gray-100 italic">ls --tech-stack</span>
                        </div>
                        <p class="mt-2 text-gray-400 leading-relaxed pl-4 border-l-2 border-gray-800 text-sm italic">
                            Développement Web, API, Réseaux (IP/Virtualisation) & IA.
                            Ma force ? Comprendre le code pour mieux le protéger.
                        </p>
                    </div>

                    <div class="flex items-center gap-2">
                        <span class="text-[#2ecc71]">└─</span>
                        <span class="text-[#e91e63] font-bold">$</span>
                        <span class="w-2 h-5 bg-[#BFA1DB] animate-pulse"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

{/if}


<style>
    /* From Uiverse.io by Kemboi-Dun */
    .container {
        width: 650px;
        height: 450px;
    }

    .terminal_toolbar {
        display: flex;
        height: 30px;
        align-items: center;
        padding: 0 8px;
        box-sizing: border-box;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background: #212121;
        justify-content: space-between;
    }

    .butt {
        display: flex;
        align-items: center;
    }

    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin-right: 5px;
        font-size: 8px;
        height: 12px;
        width: 12px;
        box-sizing: border-box;
        border: none;
        border-radius: 100%;
        background: linear-gradient(#7d7871 0%, #595953 100%);
        text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.2);
        box-shadow: 0px 0px 1px 0px #41403A, 0px 1px 1px 0px #474642;
    }

    .btn-color {
        background: #ee411a;
    }

    .btn:hover {
        cursor: pointer;
    }

    .btn:focus {
        outline: none;
    }


    .add_tab {
        border: 1px solid #fff;
        color: #fff;
        padding: 0 6px;
        border-radius: 4px 4px 0 0;
        border-bottom: none;
        cursor: pointer;
    }

    .user {
        color: #d5d0ce;
        margin-left: 6px;
        font-size: 14px;
        line-height: 15px;
    }

    .terminal_body {
        background: rgba(0, 0, 0, 0.6);
        height: calc(100% - 30px);
        padding-top: 2px;
        margin-top: -1px;
        font-size: 17px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
    }

    .terminal_promt {
        display: flex;
        width: 100%;
        height: 100%;

    }

    .terminal_promt span {
        margin-left: 4px;
    }

    .terminal_user {
        color: #1eff8e;
        width: 150px;
    }

    .terminal_location {
        color: #4878c0;
    }

    .terminal_bling {
        color: #dddddd;

    }

    .terminal_cursor {
        display: block;
        height: 14px;
        width: 5px;
        margin-left: 10px;
        animation: curbl 1200ms linear infinite;
    }

    @keyframes curbl {

        0% {
            background: #ffffff;
        }

        49% {
            background: #ffffff;
        }

        60% {
            background: transparent;
        }

        99% {
            background: transparent;
        }

        100% {
            background: #ffffff;
        }
    }

    .card {
        width: 45em;
        height: 354px;
        margin: 0 auto;
        background-color: #F8FBFE;
        border-radius: 8px;
        z-index: 1;
    }

    .tools {
        display: flex;
        align-items: center;
        padding: 9px;
    }

    .circle {
        padding: 0 4px;
    }

    .box {
        display: inline-block;
        align-items: center;
        width: 10px;
        height: 10px;
        padding: 1px;
        border-radius: 50%;
    }

    .red {
        background-color: #ff605c;
    }

    .yellow {
        background-color: #ffbd44;
    }

    .green {
        background-color: #00ca4e;
    }
</style>