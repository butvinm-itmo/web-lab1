package butvinm.web.lab1.core.points.models;

import lombok.NonNull;

public record Point(
    @NonNull Float x,
    @NonNull Float y
) {
}
