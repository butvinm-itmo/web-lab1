package butvinm.web.lab1.providers.mongo;

import java.io.Closeable;
import java.io.IOException;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;

import butvinm.web.lab1.core.points.CollisionsRepo;
import butvinm.web.lab1.core.points.models.Collision;

public class MongoCollisionsRepo implements CollisionsRepo, Closeable {
    private final static String COLLECTION_NAME = "collisions";

    private final MongoClient client;
    private final MongoDatabase database;
    private final MongoCollection<Collision> collection;

    public MongoCollisionsRepo(MongoClient client, String database) {
        this.client = client;
        this.database = this.client.getDatabase(database);
        this.collection = this.database.getCollection(
            COLLECTION_NAME,
            Collision.class
        );
    }

    @Override
    public Iterable<Collision> getCollisions() {
        return this.collection.find();
    }

    @Override
    public void addCollision(Collision collision) {
        this.collection.insertOne(collision);
    }

    @Override
    public void clearCollisions() {
        this.collection.drop();
    }

    @Override
    public void close() throws IOException {
        this.client.close();
    }
}
