package butvinm.web.lab1.api.validation;

import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.HttpHeaders;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;

@Provider
public class ValidationHandler
    implements ExceptionMapper<ValidationException> {
    @Context
    private HttpHeaders headers;

    public Response toResponse(ValidationException exception) {
        return Response
            .status(404)
            .entity(exception.getMessage())
            .build();
    }
}
