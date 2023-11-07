<script lang="ts">
    export let radius: number;
</script>

<div>
    <p>Radius:</p>
    <label for="radius">{radius}</label>
    <input id="radius" type="range" min="1" max="5" bind:value={radius} />
</div>
