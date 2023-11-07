<script lang="ts">
    import type { Point } from "$lib/pointsService";
    import { onMount } from "svelte";
    import PointInput from "./PointInput.svelte";
    import RadiusInput from "./RadiusInput.svelte";

    export let point: Point = { x: 0, y: 0 };

    export let radius: number = 1;
    $: redraw(radius, point);

    const ticksGap = 20;

    let width, height: number;

    function canvasCenter(canvas: HTMLCanvasElement): Point {
        return { x: canvas.width / 2, y: canvas.height / 2 };
    }

    onMount(() => {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        point = canvasPointToPoint(canvasCenter(canvas), canvas);
        redraw(radius, point);
    });

    function redraw(radius: number, point: Point) {
        try {
            const canvas = document.getElementById(
                "canvas"
            ) as HTMLCanvasElement;
            const context = canvas.getContext("2d");
            if (!context) {
                return;
            }
            clearCanvas(context, canvas);
            drawAxes(context, canvas);
            drawShapes(context, canvas, radius);
            drawPoint(context, canvas, point);
        } catch {}
    }

    function clearCanvas(
        context: CanvasRenderingContext2D,
        canvas: HTMLCanvasElement
    ) {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    function drawAxes(
        context: CanvasRenderingContext2D,
        canvas: HTMLCanvasElement
    ) {
        const axisPadding = 5;

        // X-axis
        context.beginPath();
        context.moveTo(axisPadding, canvas.height / 2);
        context.lineTo(canvas.width - axisPadding, canvas.height / 2);
        context.strokeStyle = "black";
        context.stroke();

        // Y-axis
        context.beginPath();
        context.moveTo(canvas.width / 2, axisPadding);
        context.lineTo(canvas.width / 2, canvas.height - axisPadding);
        context.strokeStyle = "black";
        context.stroke();

        // Draw tick marks on the X-axis
        const xTicksCount = Math.floor((canvas.width - axisPadding) / ticksGap);
        for (let i = -xTicksCount; i < xTicksCount; i++) {
            const x = canvas.width / 2 + i * ticksGap;
            context.beginPath();
            context.moveTo(x, canvas.height / 2 - 5);
            context.lineTo(x, canvas.height / 2 + 5);
            context.strokeStyle = "black";
            context.stroke();
        }

        // Draw tick marks on the Y-axis
        const yTicksCount = Math.floor(
            (canvas.height - axisPadding) / ticksGap
        );
        for (let i = -yTicksCount; i < yTicksCount; i++) {
            const y = canvas.height / 2 + i * ticksGap;
            context.beginPath();
            context.moveTo(canvas.width / 2 - 5, y);
            context.lineTo(canvas.width / 2 + 5, y);
            context.strokeStyle = "black";
            context.stroke();
        }

        // Add arrowheads to the axes
        drawArrow(
            context,
            canvas.width - axisPadding,
            canvas.height / 2,
            Math.PI
        );
        drawArrow(context, canvas.width / 2, axisPadding, Math.PI / 2);
    }

    function drawArrow(
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        angle: number
    ) {
        context.beginPath();
        context.moveTo(x, y);
        const arrowSize = 10;
        context.lineTo(
            x + arrowSize * Math.cos(angle - Math.PI / 6),
            y + arrowSize * Math.sin(angle - Math.PI / 6)
        );
        context.lineTo(
            x + arrowSize * Math.cos(angle + Math.PI / 6),
            y + arrowSize * Math.sin(angle + Math.PI / 6)
        );
        context.lineTo(x, y);
        context.fillStyle = "black";
        context.fill();
    }

    function drawShapes(
        context: CanvasRenderingContext2D,
        canvas: HTMLCanvasElement,
        radius: number
    ) {
        const drawRadius = radius * ticksGap;
        const center = canvasCenter(canvas);

        const fillColor = "rgba(128, 128, 128, 0.5)";
        // Draw a circle
        context.fillStyle = fillColor;
        context.beginPath();
        context.arc(center.x, center.y, drawRadius, 0, Math.PI * 2);
        context.fill();

        // Draw a rectangle
        context.fillStyle = fillColor;
        context.fillRect(
            center.x,
            center.y - 2 * drawRadius,
            2 * drawRadius,
            2 * drawRadius
        );

        // Draw a triangle
        context.fillStyle = fillColor;
        context.beginPath();
        context.moveTo(center.x, center.y);
        context.lineTo(center.x, center.y + 2 * drawRadius);
        context.lineTo(center.x - 2 * drawRadius, center.y);
        context.closePath();
        context.fill();
    }

    function drawPoint(
        context: CanvasRenderingContext2D,
        canvas: HTMLCanvasElement,
        point: Point
    ) {
        const fillColor = "red";
        const pointRadius = 10;
        context.fillStyle = fillColor;
        const canvasPoint = pointToCanvasPoint(point, canvas);
        context.fillRect(
            canvasPoint.x - pointRadius / 2,
            canvasPoint.y - pointRadius / 2,
            pointRadius,
            pointRadius
        );
    }

    function pointToCanvasPoint(
        point: Point,
        canvas: HTMLCanvasElement
    ): Point {
        const center = canvasCenter(canvas);
        return {
            x: point.x * ticksGap + center.x,
            y: -point.y * ticksGap + center.y,
        };
    }

    function canvasPointToPoint(
        point: Point,
        canvas: HTMLCanvasElement
    ): Point {
        const center = canvasCenter(canvas);
        return {
            x: (point.x - center.x) / ticksGap,
            y: -(point.y - center.y) / ticksGap,
        };
    }
</script>

<div class="wrapper">
    <div class="canvas" bind:clientHeight={height} bind:clientWidth={width}>
        <canvas id="canvas" {width} {height} />
    </div>
    <div class="inputs">
        <RadiusInput bind:radius />
        <PointInput bind:point minX={-10} maxX={10} minY={-10} maxY={10} />
    </div>
</div>

<style>
    .canvas {
        border: 1px solid #000;
        height: 30rem;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .inputs {
        height: fit-content;
        display: flex;
        justify-content: space-between;
    }
</style>
