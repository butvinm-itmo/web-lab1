<script lang="ts">
    import type { Point } from "$lib/pointsService";

    export let point: Point;
    export let minX: number;
    export let maxX: number;
    export let minY: number;
    export let maxY: number;
</script>

<div class="wrapper">
    <div>
        <label for="x">X:</label>
        <input
            id="x"
            type="number"
            min={minX}
            max={maxX}
            bind:value={point.x}
        />
    </div>
    <div>
        <label for="y">Y:</label>
        <input
            id="y"
            type="number"
            min={minY}
            max={maxY}
            bind:value={point.y}
        />
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    input {
        width: 10rem;
    }
</style>
