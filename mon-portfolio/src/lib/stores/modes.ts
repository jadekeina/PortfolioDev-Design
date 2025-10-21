import { writable } from "svelte/store";

type Mode = "design" | "dev";

function createModeStore() {
    // valeur par défaut
    let initial: Mode = "dev";

    if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const fromUrl = params.get("mode");
        const fromLS = localStorage.getItem("site-mode") as Mode | null;

        if (fromUrl === "design" || fromUrl === "dev") {
            initial = fromUrl;
            localStorage.setItem("site-mode", initial);
        } else if (fromLS === "design" || fromLS === "dev") {
            initial = fromLS;
        }
        document.documentElement.setAttribute("data-sitemode", initial);
    }

    const { subscribe, set, update } = writable<Mode>(initial);

    return {
        subscribe,
        set: (m: Mode) => {
            set(m);
            if (typeof window !== "undefined") {
                localStorage.setItem("site-mode", m);
                document.documentElement.setAttribute("data-sitemode", m);
            }
        },
        toggle: () =>
            update((prev) => {
                const next = prev === "design" ? "dev" : "design";
                if (typeof window !== "undefined") {
                    localStorage.setItem("site-mode", next);
                    document.documentElement.setAttribute("data-sitemode", next);
                }
                return next;
            }),
    };
}

export const modeStore = createModeStore();
