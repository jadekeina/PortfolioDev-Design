<script lang="ts">
    export let className = "";
    export let color = "#BFA1DB";
    export let width = 220;
</script>

<svg
        class={`pointer-events-none ${className}`}
        viewBox="0 0 220 80"
        width={width}
        height={(80/220)*width}
        fill="none"
        aria-hidden="true"
        style="filter: drop-shadow(0 2px 2px rgba(0,0,0,.25));"
>
    <!-- ligne un peu irrégulière -->
    <path d="M10 50 C 60 20, 120 20, 180 40"
          stroke={color}
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"/>
    <!-- pointe -->
    <path d="M170 28 L205 38 L175 56"
          stroke={color}
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"/>
</svg>
