export type Point = { x: number; y: number };

export type Collision = {
    point: Point;
    collied: boolean;
    checkedAt: string;
    graphRadius: number;
};

export type Result<T> = { ok: true; value: T } | { ok: false; error: string };

export class PointsService {
    private endpoint = "api/points";

    apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    async getCollisions(): Promise<Result<Collision[]>> {
        try {
            const response = await fetch(`${this.apiUrl}${this.endpoint}`);
            if (response.ok) {
                return { ok: true, value: await response.json() };
            } else {
                return { ok: false, error: await response.text() };
            }
        } catch (err) {
            return { ok: false, error: "Cannot make request." };
        }
    }

    async addPoint(point: Point, radius: number): Promise<Result<Collision>> {
        const queryParams = new URLSearchParams({
            x: point.x.toString(),
            y: point.y.toString(),
            radius: radius.toString(),
        });
        try {
            const response = await fetch(
                `${this.apiUrl}${this.endpoint}?${queryParams}`,
                {
                    method: "POST",
                }
            );
            if (response.ok) {
                return { ok: true, value: await response.json() };
            } else {
                return { ok: false, error: await response.text() };
            }
        } catch {
            return { ok: false, error: "Cannot make request." };
        }
    }
}
