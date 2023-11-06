package butvinm.web.lab1.api.points;

import java.util.List;

import butvinm.web.lab1.core.points.PointsService;
import butvinm.web.lab1.core.points.models.Collision;
import butvinm.web.lab1.helpers.Iterables;
import jakarta.inject.Inject;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.MediaType;

@Path("points")
public class PointsResource {
    @Inject
    PointsService service;

    @GET
    @Produces({ MediaType.APPLICATION_JSON })
    public List<Collision> getCollisions() {
        return Iterables.toList(this.service.getCollisions());
    }

    @POST
    @Produces({ MediaType.APPLICATION_JSON })
    public Collision addCollision(
        @QueryParam("x") Float x,
        @QueryParam("y") Float y,
        @QueryParam("radius") Float graphRadius
    ) {
        return this.service.addCollision(x, y, graphRadius);
    }

    @DELETE
    public void clearCollisions() {
        this.service.clearCollisions();
    }
}
