package butvinm.web.lab1.api.validation;

public class Validator {
    public static void validateNotNull(String objName, Object value)
        throws ValidationException {
        if (value == null) {
            throw new ValidationException(
                "value required.",
                objName,
                value
            );
        }
    }

    public static <T extends Comparable<T>> void validateRange(
        String objName,
        T value,
        T min,
        T max
    ) throws ValidationException {
        if (value.compareTo(min) < 0 || value.compareTo(max) > 0) {
            throw new ValidationException(
                "not in range [%s, %s].".formatted(
                    min,
                    max
                ),
                objName,
                value
            );
        }
    }
}
