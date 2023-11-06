package butvinm.web.lab1.core.points;

import static org.junit.jupiter.api.Assertions.*;

import java.util.stream.Stream;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

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
public class CollisionCheckerTest {
    private final CollisionChecker checker = new CollisionChecker();

    public static Stream<Arguments> getTestData() {
        return Stream.of(
            Arguments.of(0f, 0f, 0f, true),
            Arguments.of(0f, 0f, 1f, true),
            Arguments.of(0f, 0f, 2f, true),
            Arguments.of(1f, 1f, 1f, true),
            Arguments.of(1f, 1f, 1f, true),
            Arguments.of(-0.25f, 0.25f, 1f, true),
            Arguments.of(-1f, -0.25f, 1f, true),
            Arguments.of(-2f, 0f, 1f, true),
            Arguments.of(2f, 0f, 1f, true),
            Arguments.of(0f, 2f, 1f, true),
            Arguments.of(0f, -2f, 1f, true),
            Arguments.of(-0.5f, -0.5f, 1f, true),
            Arguments.of(-0.8f, 0.8f, 1f, false),
            Arguments.of(3f, 3f, 1f, false),
            Arguments.of(-2f, -2f, 1f, false),
            Arguments.of(4f, 0f, 1f, false)
        );
    }

    @ParameterizedTest
    @MethodSource("getTestData")
    public void test(Float x, Float y, Float graphRadius, Boolean expected) {
        assertEquals(
            expected,
            checker.checkCollision(new Point(x, y), graphRadius)
        );
    }
}
