<script lang="ts">
    import type { Collision } from "$lib/pointsService";

    export let collisions: Collision[] = [];

    function datetimeFmt(datetime: string): string {
        const [date, time] = datetime.split("T");
        return `${date} ${time.slice(0, 8)} UTC`;
    }
</script>

<table class="results">
    <tr>
        <th>X</th>
        <th>Y</th>
        <th>Collied</th>
        <th>Radius</th>
        <th>Time</th>
    </tr>
    {#each collisions as collision}
        <tr class="row">
            <td>{collision.point.x}</td>
            <td>{collision.point.y}</td>
            <td>{collision.collied}</td>
            <td>{collision.graphRadius}</td>
            <td>{datetimeFmt(collision.checkedAt)}</td>
        </tr>
    {/each}
</table>

<style>
    table {
        width: 100%;
        margin-bottom: 20px;
        border: 1px solid #dddddd;
        border-collapse: collapse;
    }
    table th {
        font-weight: bold;
        padding: 5px;
        background: #efefef;
        border: 1px solid #dddddd;
    }
    table td {
        border: 1px solid #dddddd;
        padding: 5px;
    }
</style>
