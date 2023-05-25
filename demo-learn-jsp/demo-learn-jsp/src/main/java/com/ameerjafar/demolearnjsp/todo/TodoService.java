package com.ameerjafar.demolearnjsp.todo;

import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

public class TodoService {
    private static List<Todo> list = new ArrayList<>();
    private static int totalCount = 0;
    static {
        list.add(new Todo(++totalCount, "aws", LocalDate.now().plusYears(1), false));
        list.add(new Todo(++totalCount, "devops", LocalDate.now().plusYears(2),false));
        list.add(new Todo(++totalCount, "full stack", LocalDate.now().plusYears(3),false));
    }
    public List<Todo> addTodo(String username, String description, LocalDate date, boolean done) {
        Todo todo = new Todo(++totalCount, description, date, done);
        list.add(todo);
        return list;
    }
    public List<Todo> giveallcourses(String name) {
        return list;
    }

    public void deleteById(int id) {
        Predicate<? super Todo> predicate = list -> list.getId() == id;
        list.removeIf(predicate);
    }

}
