export type Point = { x: number; y: number };

export type Collision = {
    point: Point;
    collied: boolean;
    checkedAt: string;
    graphRadius: number;
};

export class PointsService {
    private endpoint = "api/points";

    apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    async getCollisions(): Promise<Collision[] | null> {
        try {
            const response = await fetch(`${this.apiUrl}${this.endpoint}`);
            return (await response.json()) as Collision[];
        } catch {
            return null;
        }
    }

    async addPoint(point: Point, radius: number): Promise<Collision | null> {
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
            return (await response.json()) as Collision;
        } catch {
            return null;
        }
    }
}
