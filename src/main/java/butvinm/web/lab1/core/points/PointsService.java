package butvinm.web.lab1.core.points;

import java.time.LocalDateTime;

import butvinm.web.lab1.core.points.models.Collision;
import butvinm.web.lab1.core.points.models.Point;

public class PointsService {
    private final CollisionsRepo repo;

    public PointsService(CollisionsRepo repo) {
        this.repo = repo;
    }

    public Iterable<Collision> getCollisions() {
        return repo.getCollisions();
    }

    public Collision addCollision(
        Float x,
        Float y,
        Float graphRadius
    ) {
        final var collision = new Collision(
            new Point(x, y),
            graphRadius,
            true,
            LocalDateTime.now()
        );
        this.repo.addCollision(collision);
        return collision;
    }

    public void clearCollisions() {
        this.repo.clearCollisions();
    }
}
