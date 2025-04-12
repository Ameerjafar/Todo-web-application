"use client"
import { TodoType } from "@/app/types/TodoType"
import getAllTodo from "@/service/getAllTodo"
import axios from "axios"
const TodoSubmitButton = ({ title, isCompleted, setTodos }: {
    title: string, isCompleted: boolean, setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>
}) => {
    const sumbitHandler = async () => {
        console.log(title, isCompleted)

        const response = await axios.post("http://localhost:3000/api/todo", {
            title,
            isCompleted,
            date: new Date().toISOString()
        })
        const response2 = await getAllTodo();
        setTodos(response2);
        console.log(response);
    }

    return (
        <div>
            <button onClick={sumbitHandler}>Sumbit</button>
        </div>
    )
}

export default TodoSubmitButton;