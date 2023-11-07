package butvinm.web.lab1.core.points.models;

import java.time.LocalDateTime;

import lombok.NonNull;

public record Collision(
    @NonNull Point point,
    @NonNull Float graphRadius,
    @NonNull Boolean collied,
    @NonNull LocalDateTime checkedAt
) {
}
