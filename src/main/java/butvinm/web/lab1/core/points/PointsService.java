package butvinm.web.lab1.core.points;

import java.time.LocalDateTime;

import butvinm.web.lab1.core.points.models.Collision;
import butvinm.web.lab1.core.points.models.Point;
import lombok.NonNull;

public class PointsService {
    private final CollisionChecker checker;

    private final CollisionsRepo repo;

    @NonNull
    public PointsService(CollisionsRepo repo) {
        this.repo = repo;
        this.checker = new CollisionChecker();
    }

    public Iterable<Collision> getCollisions() {
        return repo.getCollisions();
    }

    public Collision addCollision(
        Float x,
        Float y,
        Float graphRadius
    ) {
        final var point = new Point(x, y);
        final var collision = new Collision(
            point,
            graphRadius,
            checker.checkCollision(point, graphRadius),
            LocalDateTime.now()
        );
        this.repo.addCollision(collision);
        return collision;
    }

    public void clearCollisions() {
        this.repo.clearCollisions();
    }
}
