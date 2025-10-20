<script lang="ts">
    import {page} from "$app/stores";
    import {modeStore} from "$lib/stores/modes";
    import {theme} from "$lib/theme";
    $:mode = $modeStore as "design" | "dev";

    const navItems = [
        {href: "#about", label: "About"},
        {href: "#experiences", label: "Experiences"},
        {href: "#work", label: "Work"},
        {href: "#skills", label: "Skills"},
        {href: "#contact", label: "Contact"},
    ]

    let isHoveringSwitch = false;

    function toggleMode() {
        modeStore.toggle();
    }

    function isActive(href: string) {
        return $page.url.pathname.startsWith(href);
    }
</script>

<header class={`w-full fixed top-0 z-50 ${theme[mode].background}`}>
    <nav class="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        <!--Logo-->
        <a href="/" class="{theme[mode].text} font-bold text-lg">
            Jade-Keina
        </a>

        <!-- Menu Desktop -->
        <ul class="hidden md:flex items-center gap-6">
            <li class="relative flex items-center gap-3">
                <!-- Flèche crayon toujours visible -->
                <div class="flex items-center gap-2">
                    <!-- SVG Flèche dessinée style crayon -->
                    <svg
                            width="60"
                            height="40"
                            viewBox="0 0 60 40"
                            class="transition-all duration-300"
                            style="
                            filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1));
                            transform: scale({isHoveringSwitch ? 1.1 : 1}) rotate({isHoveringSwitch ? -2 : 0}deg);
                        "
                    >
                        <!-- Flèche courbée style dessin à main levée -->
                        <path
                                d="M 5 20 Q 15 15, 25 18 Q 35 21, 45 19 L 42 15 M 45 19 L 42 23"
                                stroke="{mode === 'dev' ? '#BFA1DB' : '#A0D5FD'}"
                                stroke-width="2.5"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                style="
                                paint-order: stroke;
                                stroke-dasharray: 1000;
                                stroke-dashoffset: 0;
                            "
                        />
                    </svg>

                    <!-- Texte mode -->
                    <span
                            class="font-handwriting text-base whitespace-nowrap transition-all duration-300"
                            style="
                            color: {mode === 'dev' ? '#BFA1DB' : '#A0D5FD'};
                            transform: scale({isHoveringSwitch ? 1.15 : 1}) translateY({isHoveringSwitch ? '-2px' : '0'});
                            text-shadow: 0 1px 2px rgba(0,0,0,0.1);
                        "
                    >
                        {mode === 'dev' ? 'Mode Design' : 'Mode Dev'}
                    </span>
                </div>

                <!-- Toggle switch -->
                <div
                        class="checkbox-wrapper-25"
                        on:mouseenter={() => isHoveringSwitch = true}
                        on:mouseleave={() => isHoveringSwitch = false}
                >
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

        <!-- Menu Mobile -->
        <button class="md:hidden text-2xl" on:click={() => alert("TODO: menu mobile")}>
            ☰
        </button>
    </nav>
</header>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');

    .font-handwriting {
        font-family: 'Caveat', cursive;
        font-weight: 600;
        letter-spacing: 0.5px;
    }

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
        transition: transform .2s ease;
    }

    .checkbox-wrapper-25 input[type="checkbox"]:hover {
        transform: scale(1.05);
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