<script lang="ts">
    import { modeStore } from "$lib/stores/modes";
    $: mode = $modeStore;
</script>

{#if mode==='design'}


    {:else}
    <div class="flex justify-center items-center bg-[#BFA1DB]/90 h-[35em]">
    <div class="container">
        <div class="terminal_toolbar">
            <div class="butt">
                <button class="btn btn-color butt--exit" type="button" aria-label="Close window"></button>
                <button class="btn" type="button" aria-label="Minimize window"></button>
                <button class="btn" type="button" aria-label="Maximize window"></button>
            </div>
            <p class="user">jade-keinap@admin: ~</p>
            <div class="add_tab">
                +
            </div>
        </div>
        <div class="terminal_body">
            <div class="terminal_promt flex flex-col">
                <div>
                    <span class="terminal_user">@Qui-est-tu?:</span>
                    <span class="terminal_location">~</span>
                    <span class="terminal_bling">$</span>
                    <span class="terminal_bling"> Salut, je suis Jade-Keina Pognon, étudiante en informatique depuis maintenant 4 ans, </span>

                </div>
                <div>
                    <span class="w-200 text-[#1eff8e]">@Que-sais-tu-faire?:</span>
                    <span class="terminal_location">~</span>
                    <span class="terminal_bling">$</span>
                    <span class="terminal_cursor"></span>
                </div>
                <div>
                    <span class="w-200 text-[#1eff8e]">@Quel-sont-tes-projets?:</span>
                    <span class="terminal_location">~</span>
                    <span class="terminal_bling">$</span>
                    <span class="terminal_cursor"></span>
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
</style>