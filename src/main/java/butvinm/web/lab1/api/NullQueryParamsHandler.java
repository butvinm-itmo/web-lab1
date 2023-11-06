package butvinm.web.lab1.api;

import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.HttpHeaders;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.ExceptionMapper;
import jakarta.ws.rs.ext.Provider;

@Provider
public class NullQueryParamsHandler
    implements ExceptionMapper<NullPointerException> {
    @Context
    private HttpHeaders headers;

    public Response toResponse(NullPointerException exception) {
        return Response
            .status(404)
            .entity("Query validation error: " + exception.getMessage())
            .build();
    }
}
