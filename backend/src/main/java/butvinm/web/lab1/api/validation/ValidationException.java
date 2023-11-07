package butvinm.web.lab1.api.validation;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = false)
public class ValidationException extends Exception {
    private final String validationMessage;

    private final String objName;

    private final Object value;

    @Override
    public String getMessage() {
        return "Validation failed for %s with value %s: %s".formatted(
            objName,
            value,
            validationMessage
        );
    }
}
