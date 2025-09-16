<script lang="ts">
    import {page} from "$app/stores";
    import {modeStore} from "$lib/stores/modes";
    import {theme} from "$lib/theme";
    $:mode = $modeStore as "design" | "dev";

    const navItems = [
        {href: "/work", label: "Work"},
        {href: "/skills", label: "Skills"},
        {href: "/about", label: "About"},
        {href: "/contact", label: "Contact"}
    ]

    function toggleMode() {
        modeStore.toggle();
    }

    function isActive(href: string) {
        return $page.url.pathname.startsWith(href);
    }
</script>

<header class={`w-full fixed top-0 z-50 ${theme[mode].background}`}> 
    <nav class="max-w-6xlmx-auto flex items-center justify-between h-16 px-4">
        <!--Logo-->
        <a href="/" class="{theme[mode].text}">
            Jade-Keina
        </a>

        <!-- Menu Desktop -->
        <ul class="hidden md:flex items-center gap-6">
                                    <li>
                                <div class="checkbox-wrapper-25">
                                    <input
                                        type="checkbox"
                                        checked={mode === 'dev'}
                                        on:change={toggleMode}
                                    />
                                </div>
                        </li>
                        
            {#each navItems as item}
                <li>
                    <a
                            href={item.href}
                            class={`text-sm font-medium ${theme[mode].text} ${theme[mode].hover}
              ${isActive(item.href) ? "underline" : ""}`}
                    >
                        {item.label}
                    </a>
                </li>
            {/each}

        </ul>

        <!-- Menu Mobile (juste le burger pour l'instant) -->
        <button class="md:hidden text-2xl" on:click={() => alert("TODO: menu mobile")}>
            ☰
        </button>








    </nav>








<style>
    .checkbox-wrapper-25 input[type="checkbox"] {
        background-image: -webkit-linear-gradient(hsla(0,0%,0%,.1), hsla(0,0%,100%,.1)),
                                                -webkit-linear-gradient(left, #A0D5FD 50%, #BFA1DB 50%);
        background-size: 100% 100%, 200% 100%;
        background-position: 0 0, 15px 0;
        border-radius: 25px;
        box-shadow: inset 0 1px 4px hsla(0,0%,0%,.5),
                                    inset 0 0 10px hsla(0,0%,0%,.5),
                                    0 0 0 1px hsla(0,0%,0%,.1),
                                    0 -1px 2px 2px hsla(0,0%,0%,.25),
                                    0 2px 2px 2px hsla(0,0%,100%,.75);
        cursor: pointer;
        height: 25px;
        padding-right: 25px;
        width: 75px;
        -webkit-appearance: none;
        -webkit-transition: .25s;
    }

    .checkbox-wrapper-25 input[type="checkbox"]:after {
        background-color: #eee;
        background-image: -webkit-linear-gradient(hsla(0,0%,100%,.1), hsla(0,0%,0%,.1));
        border-radius: 25px;
        box-shadow: inset 0 1px 1px 1px hsla(0,0%,100%,1),
                                    inset 0 -1px 1px 1px hsla(0,0%,0%,.25),
                                    0 1px 3px 1px hsla(0,0%,0%,.5),
                                    0 0 2px hsla(0,0%,0%,.25);
        content: '';
        display: block;
        height: 25px;
        width: 50px;
    }

    .checkbox-wrapper-25 input[type="checkbox"]:checked {
        background-position: 0 0, 35px 0;
        padding-left: 25px;
        padding-right: 0;
    }
</style>
</header>