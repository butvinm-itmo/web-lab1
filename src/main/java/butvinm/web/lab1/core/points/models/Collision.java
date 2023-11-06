package butvinm.web.lab1.core.points.models;

import java.time.LocalDateTime;

public record Collision(
    Point point,
    Float graphRadius,
    Boolean collied,
    LocalDateTime checkedAt
) {
}
