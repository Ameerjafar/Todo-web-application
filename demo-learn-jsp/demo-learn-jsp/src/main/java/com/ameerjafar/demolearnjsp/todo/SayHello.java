package com.ameerjafar.demolearnjsp.todo;

import com.ameerjafar.demolearnjsp.Authentication;
import jakarta.validation.Valid;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.naming.Binding;
import java.time.LocalDate;
import java.util.List;
import java.util.function.Predicate;


@Controller
public class SayHello {
    private Authentication authentication;
    private TodoService todoService = new TodoService();

    public SayHello(Authentication authentication) {
        this.authentication = authentication;
    }

    @RequestMapping(value = "login", method = RequestMethod.GET)
    public String helper() {
        return "login";
    }
    @RequestMapping(value = "login", method = RequestMethod.POST)
        public String helper1(@RequestParam String name, @RequestParam String password, ModelMap map) {
        map.put("name", name);
        map.put("password", password);
        if (authentication.authenticate(name, password)) {
            return "welcome";
        }
        map.put("Error message", "invalid email or password");
        return "login";
    }
    @RequestMapping(value = "todo-list")
    public String todo(ModelMap map) {
        TodoService todoService = new TodoService();
        List<Todo> todo = todoService.giveallcourses("ameer jafar");
        map.addAttribute("todo", todo);
        return "todo";
    }
    @RequestMapping(value = "add_todo", method = RequestMethod.GET)
    public String show_todo(ModelMap map) {
        String username = (String)map.get("name");
        Todo todo = new Todo(0,"", LocalDate.now().plusYears(1), false);
        map.put("todo", todo);
        return "add_todo";
    }
    @RequestMapping(value = "add_todo", method = RequestMethod.POST)
        public String add_todo_post(ModelMap map, @Valid Todo todo1, BindingResult result) {
        if(result.hasErrors()) {
            return "todo";
        }
        TodoService todo = new TodoService();
        String username = (String) map.get("name");
        todo.addTodo(username,todo1.getNameOfCourse(),LocalDate.now().plusYears(1), false);
        return "redirect:todo-list";
    }
    @RequestMapping(value = "delete-todo")
    public String delete(@RequestParam int id) {
        todoService.deleteById(id);
        return "redirect:todo-list";
    }
    @RequestMapping(value = "update-todo")
    public String update() {
        return "redirect:todo-list";
    }


    }

