package butvinm.web.lab1.core.points;

import butvinm.web.lab1.core.points.models.Point;

/**
 *                  / \
 *                   |
 *                2R |_______
 *                   |       |
 *                  ---      |
 *        -2R  -R /  |  \ R  | 2R
 * ----------\---|---0___|___|------------->
 *             \  \  |  /
 *               \  ---
 *                 \ |
 *                   \
 *               -2R |
 *
 */
public class CollisionChecker {
    public Boolean checkCollision(Point point, Float graphRadius) {
        final var inCircle = checkCircle(point, graphRadius);
        final var inRectangle = checkRectangle(point, graphRadius);
        final var inTriangle = checkTriangle(point, graphRadius);
        return inCircle || inRectangle || inTriangle;
    }

    private Boolean checkCircle(Point point, Float graphRadius) {
        final var leftOp = point.x() * point.x() + point.y() * point.y();
        return leftOp <= graphRadius * graphRadius;
    }

    private Boolean checkRectangle(Point point, Float graphRadius) {
        final var xUpperOY = point.x() >= 0;
        final var xLower2R = point.x() <= 2 * graphRadius;
        final var yUpperOX = point.y() >= 0;
        final var yLower2R = point.y() <= 2 * graphRadius;
        return xUpperOY && xLower2R && yLower2R && yUpperOX;
    }

    private final Boolean checkTriangle(Point point, Float graphRadius) {
        final var xLowerOY = point.x() <= 0;
        final var yLowerOX = point.y() <= 0;
        final var yUpperDiagonal = point.y() >= -point.x() - 2 * graphRadius;
        return xLowerOY && yLowerOX && yUpperDiagonal;
    }
}
