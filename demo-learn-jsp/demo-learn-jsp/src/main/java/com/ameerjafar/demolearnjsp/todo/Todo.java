package com.ameerjafar.demolearnjsp.todo;

import jakarta.validation.constraints.Size;

import java.time.LocalDate;

public class Todo {

    private int id;

    @Size(min = 10,message = "you will enter at least 10 characters")
    private String nameOfCourse;
    private LocalDate date;
    private boolean isCompleted;

    public Todo(int id, String nameOfCourse, LocalDate date, boolean isCompleted) {
        this.id = id;
        this.nameOfCourse = nameOfCourse;
        this.date = date;
        this.isCompleted = isCompleted;
    }

    public int getId() {
        return id;
    }

    public String getNameOfCourse() {
        return nameOfCourse;
    }

    public LocalDate getDate() {
        return date;
    }

    public boolean getisCompleted() {
        return isCompleted;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setNameOfCourse(String nameOfCourse) {
        this.nameOfCourse = nameOfCourse;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public void setCompleted(boolean isCompleted) {
        this.isCompleted = isCompleted;
    }

    @Override
    public String toString() {
        return "Todo{" +
                "id=" + id +
                ", nameOfCourse='" + nameOfCourse + '\'' +
                ", date=" + date +
                ", isCompleted=" + isCompleted +
                '}';
    }
}
