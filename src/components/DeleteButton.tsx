"use client"
import axios from 'axios';
import { TodoType } from '@/app/types/TodoType';
import getAllTodo from '@/service/getAllTodo';
const DeleteButton = ({ todoId, setTodos} : { todoId: number, setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>}) => {
    const deleteHandler = async () => {
        console.log(typeof todoId);
        await axios.delete(`http://localhost:3000/api/todo?todoId=${todoId}`);
        const response2 = await getAllTodo();
        setTodos(response2);
    }
    return (

        <button onClick = { deleteHandler } className = 'bg-red-600 text-center p-5'>Delete Todo</button>
    )
}

export default DeleteButton;