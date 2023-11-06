package butvinm.web.lab1.helpers;

import java.util.ArrayList;
import java.util.List;

public class Iterables {
    public static <T> List<T> toList(Iterable<T> iterable) {
        final List<T> list = new ArrayList<>();
        for (var item : iterable) {
            list.add(item);
        }
        return list;
    }
}
