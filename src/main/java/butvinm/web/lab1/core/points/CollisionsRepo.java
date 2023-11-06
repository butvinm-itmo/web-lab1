package butvinm.web.lab1.core.points;

import butvinm.web.lab1.core.points.models.Collision;

public interface CollisionsRepo {
    Iterable<Collision> getCollisions();

    void addCollision(Collision collision);

    void clearCollisions();
}
