package butvinm.web.lab1.cdi;

import com.mongodb.client.MongoClients;

import butvinm.web.lab1.Config;
import butvinm.web.lab1.core.points.CollisionsRepo;
import butvinm.web.lab1.providers.mongo.MongoCollisionsRepo;
import jakarta.enterprise.context.Dependent;
import jakarta.enterprise.inject.Produces;
import lombok.val;

@Dependent
public class CollisionsRepoProvider {
    @Produces
    public CollisionsRepo getMongoRepo() {
        val client = MongoClients.create(Config.MONGODB_URL);
        return new MongoCollisionsRepo(client, Config.MONGODB_DATABASE);
    }
}
