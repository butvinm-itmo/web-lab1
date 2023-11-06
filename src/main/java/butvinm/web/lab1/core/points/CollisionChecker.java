package butvinm.web.lab1.core.points;

import butvinm.web.lab1.core.points.models.Point;
import lombok.val;

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
        val inCircle = checkCircle(point, graphRadius);
        val inRectangle = checkRectangle(point, graphRadius);
        val inTriangle = checkTriangle(point, graphRadius);
        return inCircle || inRectangle || inTriangle;
    }

    private Boolean checkCircle(Point point, Float graphRadius) {
        val leftOp = point.x() * point.x() + point.y() * point.y();
        return leftOp <= graphRadius * graphRadius;
    }

    private Boolean checkRectangle(Point point, Float graphRadius) {
        val xUpperOY = point.x() >= 0;
        val xLower2R = point.x() <= 2 * graphRadius;
        val yUpperOX = point.y() >= 0;
        val yLower2R = point.y() <= 2 * graphRadius;
        return xUpperOY && xLower2R && yLower2R && yUpperOX;
    }

    private final Boolean checkTriangle(Point point, Float graphRadius) {
        val xLowerOY = point.x() <= 0;
        val yLowerOX = point.y() <= 0;
        val yUpperDiagonal = point.y() >= -point.x() - 2 * graphRadius;
        return xLowerOY && yLowerOX && yUpperDiagonal;
    }
}
