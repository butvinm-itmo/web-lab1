package butvinm.web.lab1;

public class Config {
    public final static String MONGODB_URL = System.getenv("MONGODB_URL");

    public final static String MONGODB_DATABASE = System.getenv(
        "MONGODB_DATABASE"
    );
}
