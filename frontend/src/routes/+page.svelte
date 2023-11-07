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

    async function addPoint(point: Point, radius: number) {
        const collision = await service.addPoint(point, radius);
        if (collision) {
            collisions = [collision, ...collisions];
        }
    }

    async function updateCollisions() {
        const result = await service.getCollisions();
        collisions = result ? result : [];
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
    <ResultsTable bind:collisions />
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
