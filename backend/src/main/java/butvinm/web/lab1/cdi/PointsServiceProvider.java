package butvinm.web.lab1.cdi;

import butvinm.web.lab1.core.points.CollisionsRepo;
import butvinm.web.lab1.core.points.PointsService;
import jakarta.enterprise.context.Dependent;
import jakarta.enterprise.inject.Produces;
import jakarta.inject.Inject;

@Dependent
public class PointsServiceProvider {
    @Inject
    CollisionsRepo repo;

    @Produces
    public PointsService getPointsService() {
        return new PointsService(this.repo);
    }
}
