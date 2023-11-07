<script lang="ts">
    import {
        PointsService,
        type Collision,
        type Point,
    } from "$lib/pointsService";
    import { onMount } from "svelte";
    import Canvas from "./Canvas.svelte";
    import ResultsTable from "./ResultsTable.svelte";

    const service = new PointsService("");

    let collisions: Collision[];
    let point: Point;
    let radius: number;

    let errorMessage: string | null;

    async function addPoint(point: Point, radius: number) {
        const res = await service.addPoint(point, radius);
        if (res.ok) {
            collisions = [res.value, ...collisions];
            errorMessage = null;
        } else {
            errorMessage = `Cannot add point: ${res.error}`;
        }
    }

    async function updateCollisions() {
        const res = await service.getCollisions();
        if (res.ok) {
            collisions = res.value;
            errorMessage = null;
        } else {
            errorMessage = `Cannot add point: ${res.error}`;
        }
    }
    onMount(updateCollisions);
</script>

<svelte:head>
    <title>Web Lab 1</title>
    <meta name="description" content="Web Lab 1" />
</svelte:head>

<div class="wrapper">
    <Canvas bind:point bind:radius />
    <button on:click={async () => await addPoint(point, radius)}>
        Click Me
    </button>
    {#if errorMessage}
        <p class="error">{errorMessage}</p>
    {/if}
    <ResultsTable bind:collisions />
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .error {
        color: red;
    }
</style>
